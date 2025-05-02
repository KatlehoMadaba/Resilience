using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.UI;
using Resilience.Authorization.Users;

namespace Resilience.Domain.Persons
{

    public class GeneralSupporterManager : DomainService
    {
        private readonly PersonManager _personManager;
        private readonly IRepository<GeneralSupporter, Guid> _GeneralSupporterRepository;
        public GeneralSupporterManager
            (
            UserManager userManager,
             PersonManager personManager,
            IRepository<GeneralSupporter, Guid> GeneralSupporterRepository
            )
        {
            _personManager = personManager;
            _GeneralSupporterRepository = GeneralSupporterRepository;

        }
        public async Task<GeneralSupporter> CreateGeneralSupporterAsync(
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
            string supportMotivation,
            bool isSubscribedToUpdates,
            List<string> areasOfInterest
            )
        {
            try
            {

                await _personManager.CreatePersonAsync(
                    name,
                    surname,
                    emailAddress,
                    username,
                    password,
                    anonymousId,
                    displayName,
                    useDisplayNameOnly,
                    sex,
                    phoneNumber,
                    isAnonymous,
                    "generalsupporter"
                    );
                var GeneralSupporter = new GeneralSupporter()
                {
                    
                  SupportMotivation= supportMotivation,
                  IsSubscribedToUpdates = isSubscribedToUpdates,
                  AreasOfInterest = areasOfInterest


                };
                await _GeneralSupporterRepository.InsertAsync(GeneralSupporter);
                return GeneralSupporter;

            }
            catch (Exception ex)
            {

                Logger.Error($"Error creating GeneralSupporter: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the GeneralSupporter", ex);
            }
        }
    }
    
}
