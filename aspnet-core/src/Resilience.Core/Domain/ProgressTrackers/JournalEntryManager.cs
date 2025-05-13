using System;
using System.Collections.Generic;
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



        public List<JournalEntry> GetJournalEntriesByPersonId(Guid personId)
        {
            using (var uow = _unitOfWorkManager.Begin())
            {
                _unitOfWorkManager.Current.SetTenantId(1); 

                try
                {
                    var session = _abpSession.Use(1, 1);

                    var entries = _journalEntryRepository
                         .GetAll()
                         .Where(entry => entry.PersonId == personId)
                         .ToList(); 

                    uow.Complete(); 

                    return entries;
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

}
