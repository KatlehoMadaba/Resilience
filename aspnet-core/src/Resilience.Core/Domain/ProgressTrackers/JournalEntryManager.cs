using System;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.UI;
using Microsoft.EntityFrameworkCore;

namespace Resilience.Domain.ProgressTrackers
{
    public class JournalEntryManager : DomainService
    {
        private readonly IRepository<JournalEntry, Guid> _journalEntryRepository;

        public JournalEntryManager
            (
            IRepository<JournalEntry, Guid> journalEntryRepository
            )
        {
            _journalEntryRepository = journalEntryRepository;
        }



        public async Task<JournalEntry> GetJournalEntryByPersonIdWithUserAsync(Guid personid)
        {
            try
            {
                    var query = await _journalEntryRepository.GetAllIncludingAsync(p => p.Person);

                    var JournalEntry = await query.FirstOrDefaultAsync(p => p.PersonId == personid);
                
                    return JournalEntry;
               
            }
            catch (Exception ex)
            {
                Logger.Error($"Error creating ImmediateSurvivor: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the ImmediateSurvivor", ex);
            }

        }



    }

}
