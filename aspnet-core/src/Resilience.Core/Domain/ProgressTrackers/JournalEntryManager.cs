using System;
using System.Linq;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.Domain.Uow;
using Abp.Runtime.Session;
using Abp.UI;

namespace Resilience.Domain.ProgressTrackers
{
    public class JournalEntryManager : DomainService
    {
        private readonly IRepository<JournalEntry, Guid> _journalEntryRepository;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IAbpSession _abpSession;
        public JournalEntryManager
            (
            IRepository<JournalEntry, Guid> journalEntryRepository,
            IUnitOfWorkManager unitOfWorkManager,
            IAbpSession abpSession
            )
        {
            _journalEntryRepository = journalEntryRepository;
            _abpSession = abpSession;
            _unitOfWorkManager = unitOfWorkManager;
        }



        public IQueryable<JournalEntry> GetJournalEntriesByPersonId(Guid personId)
        {
            try
            {
                return _journalEntryRepository
                    .GetAll()
                    .Where(entry => entry.PersonId == personId);
            }
            catch (Exception ex)
            {
                Logger.Error($"Error retrieving journal entries for PersonId {personId}: {ex.Message}", ex);
                if (ex.InnerException != null)
                {
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                }
                throw new UserFriendlyException("An error occurred while retrieving journal entries.", ex);
            }
        }


    }

}
