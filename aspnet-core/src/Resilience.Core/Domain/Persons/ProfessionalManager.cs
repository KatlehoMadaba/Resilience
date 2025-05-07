using System;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.UI;
using Resilience.Authorization.Users;

namespace Resilience.Domain.Persons
{

    public class ProfessionalManager : DomainService
    {
        private readonly PersonManager _personManager;
        private readonly IRepository<Professional, Guid> _ProfessionalRepository;
        public ProfessionalManager
            (
            UserManager userManager,
             PersonManager personManager,
            IRepository<Professional, Guid> ProfessionalRepository
            )
        {
            _personManager = personManager;
            _ProfessionalRepository = ProfessionalRepository;

        }
        public async Task<Professional> CreateProfessionalAsync(
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
            string profession,
            string organization,
            string credentials,
            bool isVerified,
            bool isActive
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
                    false,
                    "Professional"
                    );
                var Professional = new Professional()
                {
                    Profession= profession,
                    Organization= organization,
                    Credentials= credentials,
                    IsVerified= isVerified,
                    isActive= isActive
                };
                await _ProfessionalRepository.InsertAsync(Professional);
                return Professional;

            }
            catch (Exception ex)
            {

                Logger.Error($"Error creating Professional: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the Professional", ex);
            }
        }
    }


}
