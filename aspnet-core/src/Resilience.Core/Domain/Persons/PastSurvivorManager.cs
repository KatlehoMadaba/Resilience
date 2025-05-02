using System;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.UI;
using Resilience.Authorization.Users;

namespace Resilience.Domain.Persons
{
    public class PastSurvivorManager : DomainService
    {
        private readonly PersonManager _personManager;
        private readonly IRepository<PastSurvivor, Guid> _pastsurvivorRepository;
        public PastSurvivorManager
            (
            UserManager userManager,
             PersonManager personManager,
            IRepository<PastSurvivor, Guid> pastsurvivorRepository
            )
        {
            _personManager = personManager;
            _pastsurvivorRepository = pastsurvivorRepository;

        }
        public async Task<PastSurvivor> CreatepastsurvivorAsync(
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
            DateTime? incidentDate,
            bool hasDisclosedBefore,
            int timeElapsedInDays,
            ReflistRecoveryPhase recoveryPhase
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
                    "pastsurvivor"
                    );
                var PastSurvivor = new PastSurvivor()
                {
                    UseDisplayNameOnly = useDisplayNameOnly,
                    IncidentDate = incidentDate,
                    HasDisclosedBefore= hasDisclosedBefore,
                    TimeElapsedInDays= timeElapsedInDays,
                    RecoveryPhase= recoveryPhase

                };
                await _pastsurvivorRepository.InsertAsync(PastSurvivor);
                return PastSurvivor;

            }
            catch (Exception ex)
            {

                Logger.Error($"Error creating PastSurvivor: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the PastSurvivor", ex);
            }
        }
    }
}

