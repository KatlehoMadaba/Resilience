using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.Domain.Uow;
using Abp.Runtime.Session;
using Abp.UI;
using Microsoft.EntityFrameworkCore;

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



        public async Task<IQueryable<JournalEntry>> GetJournalEntryByPersonIdWithUserAsync(Guid personid)
        {
            using (var uow = _unitOfWorkManager.Begin()) using (_unitOfWorkManager.Current.SetTenantId(1))
            {
                var session = _abpSession.Use(1, 1);
                try
                {
                    var query = await _journalEntryRepository.GetAllIncludingAsync(p=>p.Person);
                    await uow.CompleteAsync();
                    return query;
                }
                catch (Exception ex)
                {
                    Logger.Error($"Error getting entries: {ex.Message}", ex);
                    if (ex.InnerException != null)
                        Logger.Error($"Inner exception: {ex.InnerException.Message}");
                    throw new UserFriendlyException("Error getting entries", ex);
                }

            }
        }


    }

}
