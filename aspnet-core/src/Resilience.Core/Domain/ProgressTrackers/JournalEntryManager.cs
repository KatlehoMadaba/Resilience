using System;
using Abp.Domain.Repositories;
using Abp.Domain.Services;

namespace Resilience.Domain.ProgressTrackers
{
    public class JournalEntryManager : DomainService
    {
        private readonly IRepository<JournalEntry,Guid> _journalEntryRepository;

        public JournalEntryManager
            (
            IRepository<JournalEntry,Guid> journalEntryRepository
            )
        {
            _journalEntryRepository= journalEntryRepository;
        }

        

    }
    
}
