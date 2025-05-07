using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.Domain.Uow;
using Abp.Runtime.Session;
using Abp.UI;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Core.Types;
using Resilience.Authorization.Users;
using Resilience.Domain.CrowdfundingCampaigns;
using Resilience.Domain.Petitions;
using Resilience.Domain.ProgressTrackers;
using Resilience.Domain.Reports;
using Resilience.Domain.Stories;
using Resilience.Domain.SupportResources;
using Resilience.Domain.SupportSessions;
using Resilience.Domain.Testimonies;

namespace Resilience.Domain.Persons
{
    public class ImmediateSurvivorManager : DomainService
    {
        private readonly UserManager _userManager;
        private readonly PersonManager _personManager;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IRepository<ImmediateSurvivor, Guid> _imdsurvivorRepository;
        private readonly IAbpSession _abpSession;
        public ImmediateSurvivorManager
            (
            UserManager userManager,
             PersonManager personManager,
            IRepository<ImmediateSurvivor, Guid> imdsurvivorRepository,
            IUnitOfWorkManager unitOfWorkManager
,
            IAbpSession abpSession)
        {
            _userManager = userManager;
            _personManager = personManager;
            _imdsurvivorRepository = imdsurvivorRepository;
            _unitOfWorkManager = unitOfWorkManager;
            _abpSession = abpSession;
        }
        public async Task<ImmediateSurvivor> CreateImdSurvivorAsync(
            string? name,
            string? surname,
            string? emailAddress,
            string? username,
            string? password,
            string? anonymousId,
            string? displayName,
            bool? useDisplayNameOnly,
            ReflistSex? sex,
            string? phoneNumber,
            bool isAnonymous,
            DateTime? incidentDate,
            bool? hasReceivedMedicalAttention,
            bool? hasReportedToAuthorities
        )
        {
            ImmediateSurvivor survivor;
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

                    await _userManager.AddToRoleAsync(user, "immediatesurvivor");

                    // 2. Create ImmediateSurvivor (inherits from Person)
                    var immediateSurvivor = new ImmediateSurvivor
                    {
                        UserId = user.Id,
                        AnonymousId = anonymousId,
                        DisplayName = displayName,
                        UseDisplayNameOnly = useDisplayNameOnly,
                        Sex = sex,
                        PhoneNumber = phoneNumber,
                        IsAnonymous = isAnonymous,
                        IncidentDate = incidentDate,
                        HasReceivedMedicalAttention = hasReceivedMedicalAttention ?? false,
                        HasReportedToAuthorities = hasReportedToAuthorities ?? false,
                        SupportSessions = new List<SupportSession>(),
                        Reports = new List<Report>(),
                        Stories = new List<Story>(),
                        Petitions = new List<Petition>(),
                        CrowdfundingCampaigns = new List<CrowdfundingCampaign>(),
                        ProgressTracker = new ProgressTracker(),
                        SavedResources = new List<SupportResource>(),
                        Testimonies = new List<Testimony>()
                    };

                    await _imdsurvivorRepository.InsertAsync(immediateSurvivor);

                    // Optional: fetch again if you need navigation properties
                    survivor = immediateSurvivor;
                    await uow.CompleteAsync();
                }
            }
            catch (Exception ex)
            {
                Logger.Error($"Error creating ImmediateSurvivor: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the ImmediateSurvivor", ex);
            }

            return survivor;
        }


        public async Task<ImmediateSurvivor> GetImmediateSurvivorByIdWithUserAsync(Guid id)
        {
            try
            {
                using (var uow = _unitOfWorkManager.Begin()) using (_unitOfWorkManager.Current.SetTenantId(1))
                {
                    var session = _abpSession.Use(1, 1);

                    var query = await _imdsurvivorRepository.GetAllIncludingAsync(p => p.User, p => p.CrowdfundingCampaigns);

                    var immediateSurvivor = await query.FirstOrDefaultAsync(p => p.Id == id);
                    await uow.CompleteAsync();

                    return immediateSurvivor;
                }
            }
            catch (Exception ex)
            {

                Logger.Error($"Error creating ImmediateSurvivor: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the ImmediateSurvivor", ex);
            }

        }

        public async Task<ImmediateSurvivor> GetImmediateSurvivorByUserIdAsync(long userId)
        {
            using (var uow = _unitOfWorkManager.Begin()) using (_unitOfWorkManager.Current.SetTenantId(1))
            {
                var session = _abpSession.Use(1, 1);

                var ImmediateSurvivors = await _imdsurvivorRepository.GetAllIncludingAsync(
                p => p.User,
                p => p.CrowdfundingCampaigns,
                p => p.SupportSessions,
                p => p.MedicalAssistanceRecord
            );

                var ImmediateSurvivor = await ImmediateSurvivors.FirstOrDefaultAsync(p => p.UserId == userId);
                if (ImmediateSurvivor == null)
                {
                    throw new UserFriendlyException("ImmediateSurvivor not found");
                }
                await uow.CompleteAsync();
                return ImmediateSurvivor;
            }
        }

    }


}


