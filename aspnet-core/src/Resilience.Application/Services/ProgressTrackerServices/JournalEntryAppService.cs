using System;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.UI;
using Resilience.Domain.ProgressTrackers;
using Resilience.Services.ProgressTrackerServices.Dtos;

namespace Resilience.Services.ProgressTrackerServices
{
    public class JournalEntryAppService : AsyncCrudAppService<JournalEntry, JournalEntryDto, Guid, PagedAndSortedResultRequestDto, JournalEntryDto>
    {
        private readonly JournalEntryManager _journalEntryManager;
        public JournalEntryAppService(IRepository<JournalEntry, Guid> repository, JournalEntryManager journalEntryManager) : base(repository)
        {
            _journalEntryManager = journalEntryManager ;
        }

        public async Task<JournalEntry> GetJournalEntryByPersonIdAsync(Guid personId)
        {

            var JournalEntry = await _journalEntryManager.GetJournalEntryByPersonIdWithUserAsync(personId);

            if (JournalEntry == null)
            {
                throw new UserFriendlyException("Progress Tracker not found");
            }
            return JournalEntry;
        }
    }

}
