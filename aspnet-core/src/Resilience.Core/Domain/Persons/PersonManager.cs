using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
using Resilience.Domain.SupportSessions;
using Resilience.Domain.Testimonies;

namespace Resilience.Domain.Persons
{
    public class PersonManager : DomainService
    {
        private readonly UserManager _userManager;
        private readonly IRepository<Person, Guid> _personRepository;

        public PersonManager(UserManager userManager, IRepository<Person, Guid> personRepository)
        {
            _userManager = userManager;
            _personRepository = personRepository;

        }

        public async Task<Person> CreatePersonAsync(
            string name,
            string surname,
            string emailAddress,
            string username,
            string password,
            string anonymousId,
            string displayName,
            bool? useDisplayNameOnly,
            ReflistSex? sex,
            string phoneNumber,
            bool isAnonymous,
            string role
            )
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
                await _userManager.AddToRoleAsync(user, role);
                if (!userCreationResult.Succeeded)
                {
                    throw new UserFriendlyException("Failed to create user: " + string.Join(", ", userCreationResult.Errors));
                }
                var person = new Person
                {
                    UserId = user.Id,
                    AnonymousId = anonymousId,
                    DisplayName = displayName,
                    UseDisplayNameOnly = useDisplayNameOnly,
                    Sex = sex,
                    PhoneNumber = phoneNumber,
                    IsAnonymous = isAnonymous,
                    SupportSessions = new List<SupportSession>(),
                    Reports = new List<Report>(),
                    Stories = new List<Story>(),
                    Petitions = new List<Petition>(),
                    CrowdfundingCampaigns = new List<CrowdfundingCampaign>(),
                    SavedResources = new List<SupportResource>(),
                    Testimonies = new List<Testimony>(),
                };
                await _personRepository.InsertAsync(person);
                return person;
            }
            catch (Exception ex)
            {

                Logger.Error($"Error creating Person: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the Person", ex);
            }
        }

    }
}
