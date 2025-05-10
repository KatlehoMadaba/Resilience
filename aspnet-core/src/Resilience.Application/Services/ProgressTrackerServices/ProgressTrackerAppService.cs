using System;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.UI;
using Resilience.Domain.Persons;
using Resilience.Domain.ProgressTrackers;
using Resilience.Services.ProgressTrackerServices.Dtos;

namespace Resilience.Services.ProgressTrackerServices
{
    public class ProgressTrackerAppService : AsyncCrudAppService<ProgressTracker, ProgressTrackerDto, Guid, PagedAndSortedResultRequestDto, ProgressTrackerDto>
    {
        private readonly ProgressTrackerManager _progressTrackerManager;
        public ProgressTrackerAppService(IRepository<ProgressTracker, Guid> repository, ProgressTrackerManager progressTrackerManager) : base(repository)
        {
            _progressTrackerManager=progressTrackerManager;
        }

        //public async Task<ProgressTracker> GetProgressTrackerByPersonIdAsync(Guid personId)
        //{

        //    var progressTracker = await _progressTrackerManager.GetProgressTrackerByPersonIdWithUserAsync(personId);
        //    if (progressTracker == null)
        //    {
        //        throw new UserFriendlyException("Progress Tracker not found");
        //    }
        //    return progressTracker; 
        //}
    }
}
