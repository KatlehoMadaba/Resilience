//using System;
//using System.Collections.Generic;
//using System.Net;
//using System.Threading.Tasks;
//using Abp.Domain.Repositories;
//using Abp.UI;
//using Resilience.Authorization.Users;
//using Resilience.Domain.CrowdfundingCampaigns;
//using Resilience.Domain.Petitions;
//using Resilience.Domain.ProgressTrackers;
//using Resilience.Domain.Reports;
//using Resilience.Domain.Stories;
//using Resilience.Domain.SupportResources;
//using Resilience.Domain.SupportSessions;
//using Resilience.Domain.Testimonies;

//namespace Resilience.Domain.Persons
//{
//    public class PersonFactory
//    {
//        private readonly UserManager _userManager;
//        private readonly IRepository<GeneralSupporter, Guid> _generalSupporterRepository;
//        private readonly IRepository<ImmediateSurvivor, Guid> _imdsurvivorRepository;
//        private readonly IRepository<PastSurvivor, Guid> _pastsurvivorRepository;
//        private readonly IRepository<Professional, Guid> _professionalRepository;

//        public PersonFactory
//            (
//            UserManager userManager,
//             IRepository<GeneralSupporter, Guid> generalSupporterRepository,
//             IRepository<ImmediateSurvivor, Guid> imdsurvivorRepository,
//             IRepository<PastSurvivor, Guid> pastsurvivorRepository,
//             IRepository<Professional, Guid> professionalRepository
//            )
//        {
//            _userManager = userManager;
//            _generalSupporterRepository = generalSupporterRepository;
//            _imdsurvivorRepository = imdsurvivorRepository;
//            _pastsurvivorRepository = pastsurvivorRepository;
//            _professionalRepository = professionalRepository;

//        }
//        //method to create a user and return a type of person
//        public async Task<Person> CreatePersonAsync(
//        bool isAnonymous,
//        //PastSurvivor
//        bool hasDisclosedBefore,
//        int timeElapsedInDays,
//        //ImdSurvivor
//        bool hasReceivedMedicalAttention,
//        bool hasReportedToAuthorities,
//        //Supporter 
//         string supportMotivation,
//         bool isSubscribedToUpdates,
//         List<string> areasOfInterest,
//         //Professional
//         string profession,
//         string organization,
//         string credentials,
//         bool isVerified,
//         bool isActive,
//        //User,Person
//        string name,
//        string surname,
//        string username,
//        string password,
//        string emailAddress,
//        string phoneNumber,
//        string?displayName,
//        //PastSurvivor
//        ReflistRecoveryPhase? recoveryPhase,
//        //common in survivors
//        DateTime? incidentDate,
//        bool? useDisplayNameOnly,
//        ReflistSex? sex,
//        bool isImdSurvivor = false,
//        bool isPastSurvivor = false,
//        bool isprofessional = false,
//        bool isSupporter = false
//        )
//        {
//            //A user is created 
//            var user = new User
//            {
//                Name = name,
//                Surname = surname,
//                UserName = username,
//                EmailAddress = emailAddress
//            };
//            var userResult = await _userManager.CreateAsync(user, password);
//            if (!userResult.Succeeded)
//            {
//                throw new UserFriendlyException("Failed to create user: " + string.Join(", ", userResult.Errors));
//            }
//            //Create a imdsurvivor 
//            if (isImdSurvivor)
//            {
//                var imdsurvivor = new ImmediateSurvivor
//                {
//                    UserId = user.Id,
//                    DisplayName = displayName,
//                    UseDisplayNameOnly = useDisplayNameOnly,
//                    Sex = sex,
//                    PhoneNumber = phoneNumber,
//                    IsAnonymous = isAnonymous,
//                    IncidentDate = incidentDate,
//                    HasReceivedMedicalAttention = hasReceivedMedicalAttention,
//                    HasReportedToAuthorities = hasReportedToAuthorities,
//                    SupportSessions = new List<SupportSession>(),
//                    Reports = new List<Report>(),
//                    Stories = new List<Story>(),
//                    Petitions = new List<Petition>(),
//                    CrowdfundingCampaigns = new List<CrowdfundingCampaign>(),
//                    ProgressTracker = new ProgressTracker(),
//                    SavedResources = new List<SupportResource>(),
//                    Testimonies = new List<Testimony>()
//                };
//                await _imdsurvivorRepository.InsertAsync(imdsurvivor);
//                return imdsurvivor;
//            }
//            //Create a PastSurvivor 
//            if (isPastSurvivor)
//            {
//                var pastSurvivor = new PastSurvivor
//                {
//                    UserId = user.Id,
//                    DisplayName = displayName,
//                    UseDisplayNameOnly = useDisplayNameOnly,
//                    Sex = sex,
//                    PhoneNumber = phoneNumber,
//                    IsAnonymous = isAnonymous,
//                    IncidentDate = incidentDate,
//                    HasDisclosedBefore = hasDisclosedBefore,
//                    TimeElapsedInDays = timeElapsedInDays,
//                    RecoveryPhase = recoveryPhase
//                };
//                await _pastsurvivorRepository.InsertAsync(pastSurvivor);
//                return pastSurvivor;
//            }
//            if (isprofessional)
//            {
//                var Professional = new Professional()
//                {
//                    Organization = organization,
//                    Credentials = credentials,
//                    IsVerified = isVerified,
//                    isActive = isActive
//                };
//                    await _professionalRepository.InsertAsync(Professional);
//                    return Professional;
//            }
//            if (isSupporter)
//            {
//                var GeneralSupporter = new GeneralSupporter()
//                {
//                    SupportMotivation = supportMotivation,
//                    IsSubscribedToUpdates = isSubscribedToUpdates,
//                    AreasOfInterest = areasOfInterest
//                };
//                await _generalSupporterRepository.InsertAsync(GeneralSupporter);
//                return GeneralSupporter;
//            }
//        }


//    }
//}
