using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.UI;
using Resilience.Authorization.Roles;
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
        public async Task<Person> CreatePersonAsync(CreatePersonInput input)
        {

            //A user is created 
            var user = new User
            {
                Name = input.Name,
                Surname = input.Surname,
                UserName = input.UserName,
                EmailAddress = input.EmailAddress
            };
            var userResult = await _userManager.CreateAsync(user, input.Password);
            if (!userResult.Succeeded)
            {
                throw new UserFriendlyException("Failed to create user: " + string.Join(", ", userResult.Errors));
            }
            //A person type imdsurvivor creation
            if (input.IsImdSurvivor)
            {
                var imdsurvivor = new ImmediateSurvivor
                {
                    UserId = user.Id,
                    DisplayName = input.DisplayName,
                    UseDisplayNameOnly = input.UseDisplayNameOnly,
                    Sex = input.Sex,
                    PhoneNumber = input.PhoneNumber,
                    IsAnonymous = input.IsAnonymous,

                    IncidentDate = input.IncidentDate,
                    HasReceivedMedicalAttention = input.HasReceivedMedicalAttention??false,
                    HasReportedToAuthorities = input.HasReportedToAuthorities ?? false,
                };
                await _userManager.AddToRoleAsync(user, "immediatesurvivor");
                await _imdsurvivorRepository.InsertAsync(imdsurvivor);
                return imdsurvivor;
            }
            //A person type imdsurvivor creation PastSurvivor 
            if (input.IsPastSurvivor)
            {
                var pastSurvivor = new PastSurvivor
                {
                    UserId = user.Id,
                    DisplayName = input.DisplayName,
                    UseDisplayNameOnly = input.UseDisplayNameOnly,
                    Sex = input.Sex,
                    PhoneNumber = input.PhoneNumber,
                    IsAnonymous = input.IsAnonymous,
                    IncidentDate = input.IncidentDate,
                    HasDisclosedBefore = input.HasDisclosedBefore ?? false,
                    TimeElapsedInDays = input.TimeElapsedInDays ?? 0,
                    RecoveryPhase = input.RecoveryPhase
                };
                await _userManager.AddToRoleAsync(user, "pastsurvivor");
                await _pastsurvivorRepository.InsertAsync(pastSurvivor);
                return pastSurvivor;
            }
            //A person type imdsurvivor creation
            if (input.IsProfessional)
            {
                var Professional = new Professional()
                {
                    UserId = user.Id,
                    DisplayName = input.DisplayName,
                    UseDisplayNameOnly = input.UseDisplayNameOnly,
                    Sex = input.Sex,
                    PhoneNumber = input.PhoneNumber,
                    IsAnonymous = input.IsAnonymous,
                    Profession = input.Profession,
                    Organization = input.Organization,
                    Credentials = input.Credentials,
                    IsVerified = input.IsVerified ?? false,
                    isActive = input.IsActive ?? false
                };
                await _userManager.AddToRoleAsync(user, "professional");
                await _professionalRepository.InsertAsync(Professional);
                return Professional;
            }
            //A person type imdsurvivor creation
            if (input.IsSupporter)
            {
                var GeneralSupporter = new GeneralSupporter()
                {
                    UserId = user.Id,
                    DisplayName = input.DisplayName,
                    UseDisplayNameOnly = input.UseDisplayNameOnly,
                    Sex = input.Sex,
                    PhoneNumber = input.PhoneNumber,
                    IsAnonymous = input.IsAnonymous,
                    SupportMotivation = input.SupportMotivation,
                    IsSubscribedToUpdates = input.IsSubscribedToUpdates ?? false,
                    AreasOfInterest = input.AreasOfInterest ?? new List<string>()
                };
                await _userManager.AddToRoleAsync(user, "generalsupporter");
                await _generalSupporterRepository.InsertAsync(GeneralSupporter);
                return GeneralSupporter;
            }
        throw new UserFriendlyException("No valid person type was specified.");
        }


    }
}
