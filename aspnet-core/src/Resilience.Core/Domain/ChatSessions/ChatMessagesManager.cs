using Abp.Domain.Repositories;
using System;
using Abp.Domain.Services;
using Microsoft.DotNet.Scaffolding.Shared;

namespace Resilience.Domain.ChatSessions
{
    public class ChatMessagesManager:DomainService
    {
        private readonly UserManager _userManager;
        private readonly IRepository<Provider, Guid> _providerRepository;
        private readonly IRepository<Provider, Guid> _repository;
    }
}
