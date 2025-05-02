using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.UI;
using Resilience.Authorization.Users;
using Resilience.Domain.CrowdfundingCampaigns;
using Resilience.Domain.Petitions;
using Resilience.Domain.ProgressTrackers;
using Resilience.Domain.Reports;
using Resilience.Domain.Stories;
using Resilience.Domain.SupportResources;
using Resilience.Domain.Testimonies;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Resilience.Domain.Persons
{
    public class ImmediateSurvivorManager : DomainService
    {
        private readonly UserManager _userManager;
        private readonly IRepository<Person, Guid> _personRepository;
        private readonly IRepository<ImmediateSurvivor, Guid> _imdsurvivorRepository;
        public ImmediateSurvivorManager
            (
            UserManager userManager,
            IRepository<Person, Guid> personRepository,
            IRepository<ImmediateSurvivor, Guid> imdsurvivorRepository
            )
        {
            _userManager = userManager;
            _personRepository = personRepository;
            _imdsurvivorRepository = imdsurvivorRepository;

        }
        public async Task<ImmediateSurvivor> CreateImdSurvivorAsync(
            string name,
            string surname,
            string emailAddress,
            string username,
            string password,
            ImmediateSurvivor imdSurvivorInput,
            Person personInput)
        {
            try
            {
                var user = new User
                {
                    Name = name,
                    Surname = surname,
                    EmailAddress = emailAddress,
                    UserName = username
                };
                var userCreationResult = await _userManager.CreateAsync(user, password);
                if (!userCreationResult.Succeeded)
                {
                    throw new UserFriendlyException("Failed to create user: " + string.Join(", ", userCreationResult.Errors));
                }
                await _userManager.AddToRoleAsync(user, "ImmediateSurvivor");

                var person = new Person
                {
                    UserId = user.Id,
                    AnonymousId = personInput.AnonymousId,
                    DisplayName = personInput.DisplayName,
                    UseDisplayNameOnly = personInput.UseDisplayNameOnly,
                    Sex = personInput.Sex,
                    PhoneNumber = personInput.PhoneNumber,
                    IsAnonymous = personInput.IsAnonymous,
                    SupportSessions = personInput.SupportSessions,
                    Reports = new List<Report>(),
                    Stories = new List<Story>(),
                    Petitions = new List<Petition>(),
                    CrowdfundingCampaigns = new List<CrowdfundingCampaign>(),
                    ProgressTracker = new ProgressTracker(),
                    SavedResources = new List<SupportResource>(),
                    Testimonies = new List<Testimony>(),

                };
                var immediateSurvivor = new ImmediateSurvivor()
                {
                    IncidentDate = imdSurvivorInput.IncidentDate,
                    HasReceivedMedicalAttention = imdSurvivorInput.HasReceivedMedicalAttention,
                    HasReportedToAuthorities = imdSurvivorInput.HasReportedToAuthorities,
                    MedicalAssistanceRecord = imdSurvivorInput.MedicalAssistanceRecord,
                };
                return immediateSurvivor;
            }
            catch (Exception ex)
            {

                Logger.Error($"Error creating immediateSurvivor: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the immediateSurvivor", ex);
            }
        }
        }
    }


