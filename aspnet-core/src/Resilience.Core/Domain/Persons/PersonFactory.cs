using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.UI;
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
    public class PersonFactory
    {
        private readonly UserManager _userManager;
        private readonly IRepository<GeneralSupporter, Guid> _generalSupporterRepository;
        private readonly IRepository<ImmediateSurvivor, Guid> _imdsurvivorRepository;
        private readonly IRepository<PastSurvivor, Guid> _pastsurvivorRepository;
        private readonly IRepository<Professional, Guid> _professionalRepository;

        public PersonFactory
            (
            UserManager userManager,
             IRepository<GeneralSupporter, Guid> generalSupporterRepository,
             IRepository<ImmediateSurvivor, Guid> imdsurvivorRepository,
             IRepository<PastSurvivor, Guid> pastsurvivorRepository,
             IRepository<Professional, Guid> professionalRepository
            )
        {
            _userManager = userManager;
            _generalSupporterRepository = generalSupporterRepository;
            _imdsurvivorRepository = imdsurvivorRepository;
            _pastsurvivorRepository = pastsurvivorRepository;
            _professionalRepository = professionalRepository;

        }
        //method to create a user and return a type of person
        public async Task<Person> CreatePersonAsync(
        string name,
        string surname,
        string username,
        string password,
        string emailAddress,
        string phoneNumber,
        bool isImdSurvivor = false,
        bool isPastSurvivor = false,
        bool isprofessional = false,
        bool isSupporter = false,
        string displayName = null,
        //common in survivors
        DateTime? incidentDate,
        bool isAnonymous,
        //ImdSurvivor
        bool hasReceivedMedicalAttention,
        bool hasReportedToAuthorities,
        bool? useDisplayNameOnly,
        ReflistSex? sex,
        //PastSurvivor
        bool hasDisclosedBefore,
        int timeElapsedInDays,
        ReflistRecoveryPhase recoveryPhase

    )
        {
            //A user is created 
            var user = new User
            {
                Name = name,
                Surname = surname,
                UserName = username,
                EmailAddress = emailAddress
            };
            var userResult = await _userManager.CreateAsync(user, password);
            if (!userResult.Succeeded)
            {
                throw new UserFriendlyException("Failed to create user: " + string.Join(", ", userResult.Errors));
            }
            //Create a imdsurvivor 
            if (isImdSurvivor)
            {
                var imdsurvivor = new ImmediateSurvivor
                {
                    UserId = user.Id,
                    DisplayName = displayName,
                    UseDisplayNameOnly = useDisplayNameOnly,
                    Sex = sex,
                    PhoneNumber = phoneNumber,
                    IsAnonymous = isAnonymous,
                    IncidentDate = incidentDate,
                    HasReceivedMedicalAttention = hasReceivedMedicalAttention,
                    HasReportedToAuthorities = hasReportedToAuthorities,
                    SupportSessions = new List<SupportSession>(),
                    Reports = new List<Report>(),
                    Stories = new List<Story>(),
                    Petitions = new List<Petition>(),
                    CrowdfundingCampaigns = new List<CrowdfundingCampaign>(),
                    ProgressTracker = new ProgressTracker(),
                    SavedResources = new List<SupportResource>(),
                    Testimonies = new List<Testimony>()
                };
                await _imdsurvivorRepository.InsertAsync(imdsurvivor);
                return imdsurvivor;
            }
            //Create a PastSurvivor 
            if (isPastSurvivor)
            {
                var pastSurvivor = new PastSurvivor
                {
                    UserId = user.Id,
                    DisplayName = displayName,
                    UseDisplayNameOnly = useDisplayNameOnly,
                    Sex = sex,
                    PhoneNumber = phoneNumber,
                    IsAnonymous = isAnonymous,
                    IncidentDate = incidentDate,
                    HasDisclosedBefore = hasDisclosedBefore,
                    TimeElapsedInDays = timeElapsedInDays,
                    RecoveryPhase = recoveryPhase
                };
                await _pastsurvivorRepository.InsertAsync(pastSurvivor);
                return pastSurvivor;
            }

        }


    }
}
