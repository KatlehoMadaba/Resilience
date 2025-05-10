using System;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.Domain.Uow;
using Abp.Runtime.Session;
using Abp.UI;
using Microsoft.EntityFrameworkCore;

namespace Resilience.Domain.ProgressTrackers
{
    public class ProgressTrackerManager: DomainService
    {
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IRepository<ProgressTracker, Guid> _progressTrackerRepository;
        private readonly IAbpSession _abpSession;
        public ProgressTrackerManager(IUnitOfWorkManager unitOfWorkManager, IRepository<ProgressTracker, Guid> progressTrackerRepository, IAbpSession abpSession)
        {
            _unitOfWorkManager = unitOfWorkManager;
            _progressTrackerRepository = progressTrackerRepository;
            _abpSession = abpSession;
        }
        
    }
}
