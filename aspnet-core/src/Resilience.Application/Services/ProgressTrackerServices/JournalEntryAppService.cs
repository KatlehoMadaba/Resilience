using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.UI;
using Microsoft.EntityFrameworkCore;
using Resilience.Domain.ProgressTrackers;
using Resilience.Services.ProgressTrackerServices.Dtos;

namespace Resilience.Services.ProgressTrackerServices
{
    public class JournalEntryAppService : AsyncCrudAppService<JournalEntry, JournalEntryDto, Guid, PagedAndSortedResultRequestDto, JournalEntryDto>
    {
        private readonly JournalEntryManager _journalEntryManager;
        public JournalEntryAppService(IRepository<JournalEntry, Guid> repository, JournalEntryManager journalEntryManager) : base(repository)
        {
            _journalEntryManager = journalEntryManager;
        }

        public async Task<List<JournalEntry>> GetJournalEntryByPersonIdAsync(Guid personId)
        {
            var journalEntries = await _journalEntryManager
                .GetJournalEntriesByPersonId(personId)
                .ToListAsync();

            if (journalEntries == null || !journalEntries.Any())
            {
                throw new UserFriendlyException("No journal entries found for this person.");
            }

            return journalEntries;
        }


    }
}
