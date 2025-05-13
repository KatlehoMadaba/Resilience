using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.Domain.Uow;
using Abp.Runtime.Session;
using Abp.UI;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Resilience.Authorization.Users;

namespace Resilience.Domain.Persons
{

    public class ProfessionalManager : DomainService
    {
        private readonly UserManager _userManager;
        private readonly IRepository<Professional, Guid> _professionalRepository;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IAbpSession _abpSession;
        public ProfessionalManager
            (
            UserManager userManager,
            IRepository<Professional, Guid> professionalRepository,
            IUnitOfWorkManager unitOfWorkManager,
            IAbpSession abpSession
            )
        {

            _professionalRepository = professionalRepository;
            _userManager = userManager;
            _abpSession = abpSession;
            _unitOfWorkManager= unitOfWorkManager;

        }
        public async Task<Professional> CreateProfessionalAsync(
            string name,
            string surname,
            string emailAddress,
            string username,
            string password,
            ReflistSex? sex,
            string phoneNumber,
            string profession,
            string organization,
            string credentials,
            bool isVerified,
            bool isActive
            )
        {
            Professional aprofessional;
            try
            {
                using (var uow = _unitOfWorkManager.Begin()) using (_unitOfWorkManager.Current.SetTenantId(1))
                {
                    var session = _abpSession.Use(1, 1);

                    // 1. Create user
                    var user = new User
                    {
                        Name = name,
                        Surname = surname,
                        EmailAddress = emailAddress,
                        UserName = username,
                        TenantId = 1
                    };
                    var userCreationResult = await _userManager.CreateAsync(user, password);
                    if (!userCreationResult.Succeeded)
                    {
                        throw new UserFriendlyException("Failed to create user: " + string.Join(", ", userCreationResult.Errors));
                    }
                    await _userManager.AddToRoleAsync(user, "Professional");


                    var professional = new Professional()
                    {
                        UserId = user.Id,
                        Sex = sex,
                        PhoneNumber = phoneNumber,
                        IsAnonymous = false,
                        Profession = profession,
                        Organization = organization,
                        Credentials = credentials,
                        IsVerified = isVerified,
                        isActive = isActive
                    };
                    await _professionalRepository.InsertAsync(professional);
                    aprofessional = professional;
                    await uow.CompleteAsync();
                }

            }
            catch (Exception ex)
            {

                Logger.Error($"Error creating Professional: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the Professional", ex);
            }
            return aprofessional;
        }


        public async Task<Professional> GetProfessionalByIdWithUserAsync(Guid id)
        {
            try
            {
                using (var uow = _unitOfWorkManager.Begin()) using (_unitOfWorkManager.Current.SetTenantId(1))
                {
                    var session = _abpSession.Use(1, 1);

                    var query = await _professionalRepository.GetAllIncludingAsync(p => p.User, p => p.CrowdfundingCampaigns);

                    var Professional = await query.FirstOrDefaultAsync(p => p.Id == id);
                    await uow.CompleteAsync();

                    return Professional;
                }
            }
            catch (Exception ex)
            {

                Logger.Error($"Error creating Professional: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the Professional", ex);
            }

        }

        public async Task<IQueryable<Professional>> GetAllProfessionalsWithUserAsync()
        {
            using (var uow = _unitOfWorkManager.Begin()) using (_unitOfWorkManager.Current.SetTenantId(1))
            {

                var session = _abpSession.Use(1, 1);

                using (_unitOfWorkManager.Current.SetTenantId(1))
                {
                    var professionals = await _professionalRepository.GetAllIncludingAsync(p => p.User);
                    await uow.CompleteAsync();

                    return professionals;
                }
            }
        }
        



        public async Task<Professional> GetProfessionalByUserIdAsync(long userId)
        {
            using (var uow = _unitOfWorkManager.Begin()) using (_unitOfWorkManager.Current.SetTenantId(1))
            {
                var session = _abpSession.Use(1, 1);

                var Professionals = await _professionalRepository.GetAllIncludingAsync(
                p => p.User
            );

                var Professional = await Professionals.FirstOrDefaultAsync(p => p.UserId == userId);
                if (Professional == null)
                {
                    throw new UserFriendlyException("Professional not found");
                }
                await uow.CompleteAsync();
                return Professional;
            }
        }


    }
    }
