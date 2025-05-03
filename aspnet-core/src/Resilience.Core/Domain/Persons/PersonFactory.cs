using System;
using Abp.Domain.Repositories;
using Resilience.Authorization.Users;

namespace Resilience.Domain.Persons
{
    public class PersonFactory
    {
        private readonly UserManager _userManager;
        private readonly IRepository<GeneralSupporter, Guid> _generalSupporterRepository;
        private readonly IRepository<ImmediateSurvivor, Guid> _imdsurvivorRepository;
        private readonly IRepository<PastSurvivor, Guid> _pastRepository;

    }
}
