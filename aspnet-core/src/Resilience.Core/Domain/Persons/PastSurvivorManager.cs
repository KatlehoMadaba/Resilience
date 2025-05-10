using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.Domain.Uow;
using Abp.Runtime.Session;
using Abp.UI;
using Microsoft.EntityFrameworkCore;
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
    public class PastSurvivorManager : DomainService
    {
        private readonly UserManager _userManager;
        private readonly PersonManager _personManager;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IRepository<PastSurvivor, Guid> _pastsurvivorRepository;
        private readonly IAbpSession _abpSession;
        public PastSurvivorManager
            (
            UserManager userManager,
             PersonManager personManager,
            IRepository<PastSurvivor, Guid> pastsurvivorRepository,
            IUnitOfWorkManager unitOfWorkManager
,
            IAbpSession abpSession)
        {
            _userManager = userManager;
            _personManager = personManager;
            _pastsurvivorRepository = pastsurvivorRepository;
            _unitOfWorkManager = unitOfWorkManager;
            _abpSession = abpSession;
        }
        public async Task<PastSurvivor> CreatePastSurvivorAsync(
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
            bool? hasDisclosedBefore,
            int timeElapsedInDays
        )
        {
            PastSurvivor survivor;
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

                    await _userManager.AddToRoleAsync(user, "PastSurvivor");

                    // 2. Create PastSurvivor (inherits from Person)
                    var pastSurvivor = new PastSurvivor
                    {
                        UserId = user.Id,
                        AnonymousId = anonymousId,
                        DisplayName = displayName,
                        UseDisplayNameOnly = useDisplayNameOnly,
                        Sex = sex,
                        PhoneNumber = phoneNumber,
                        IsAnonymous = isAnonymous,
                        IncidentDate = incidentDate,
                        HasDisclosedBefore = hasDisclosedBefore ?? false,
                        TimeElapsedInDays = timeElapsedInDays,
                        SupportSessions = new List<SupportSession>(),
                        Reports = new List<Report>(),
                        Stories = new List<Story>(),
                        Petitions = new List<Petition>(),
                        CrowdfundingCampaigns = new List<CrowdfundingCampaign>(),
                        SavedResources = new List<SupportResource>(),
                        Testimonies = new List<Testimony>()
                    };

                    await _pastsurvivorRepository.InsertAsync(pastSurvivor);

                    // Optional: fetch again if you need navigation properties
                    survivor = pastSurvivor;
                    await uow.CompleteAsync();
                }
            }
            catch (Exception ex)
            {
                Logger.Error($"Error creating PastSurvivor: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the PastSurvivor", ex);
            }

            return survivor;
        }


        public async Task<PastSurvivor> GetPastSurvivorByIdWithUserAsync(Guid id)
        {
            try
            {
                using (var uow = _unitOfWorkManager.Begin()) using (_unitOfWorkManager.Current.SetTenantId(1))
                {
                    var session = _abpSession.Use(1, 1);

                    var query = await _pastsurvivorRepository.GetAllIncludingAsync(p => p.User, p => p.CrowdfundingCampaigns);

                    var PastSurvivor = await query.FirstOrDefaultAsync(p => p.Id == id);
                    await uow.CompleteAsync();

                    return PastSurvivor;
                }
            }
            catch (Exception ex)
            {

                Logger.Error($"Error creating PastSurvivor: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the PastSurvivor", ex);
            }

        }

        public async Task<PastSurvivor> GetPastSurvivorByUserIdAsync(long userId)
        {
            using (var uow = _unitOfWorkManager.Begin()) using (_unitOfWorkManager.Current.SetTenantId(1))
            {
                var session = _abpSession.Use(1, 1);

                var pastSurvivors = await _pastsurvivorRepository.GetAllIncludingAsync(
                p => p.User,
                p => p.CrowdfundingCampaigns,
                p => p.SupportSessions,
                p => p.Testimonies,
                p=>p.JournalEntries,
                p=>p.MoodEntries
            );

                var pastSurvivor = await pastSurvivors.FirstOrDefaultAsync(p => p.UserId == userId);
                if (pastSurvivor == null)
                {
                    throw new UserFriendlyException("PastSurvivor not found");
                }
                await uow.CompleteAsync();
                return pastSurvivor;
            }
        }

    }

}

