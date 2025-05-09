using System;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Resilience.Domain.ProgressTrackers;
using Resilience.Services.ProgressTrackerServices.Dtos;

namespace Resilience.Services.ProgressTrackerServices
{
    public class JournalEntryAppService : AsyncCrudAppService<JournalEntry, JournalEntryDto, Guid, PagedAndSortedResultRequestDto, JournalEntryDto>
    {
        public JournalEntryAppService(IRepository<JournalEntry, Guid> repository) : base(repository)
        {

        }
    }
}
