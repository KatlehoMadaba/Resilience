using System.Threading.Tasks;
using System;
using Abp.Application.Services;
using Abp.Runtime.Session;
using Abp.UI;
using Abp.Domain.Repositories;
using Resilience.Domain.Persons;
using Microsoft.AspNetCore.Mvc;

namespace Resilience.Services.PersonServices
{
    public class PersonService : ApplicationService
    {
        private readonly IRepository<Person, Guid> _personRepository;
        public PersonService(IRepository<Person, Guid> personRepository)
        {
            _personRepository = personRepository;
        }

        public async Task<Guid> GetCurrentPersonIdAsync()
        {
            var userId = AbpSession.GetUserId(); // gets current user (ABP)
            var person = await _personRepository.FirstOrDefaultAsync(p => p.UserId == userId);
            if (person == null)
            {
                throw new UserFriendlyException("Person not found for current user.");
            }

            return person.Id;
        }
        [HttpGet]
        public async Task<Guid> GetMyPersonId()
        {
            return await GetCurrentPersonIdAsync();
        }

    }


}
