using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.Domain.Uow;
using Abp.Runtime.Session;
using Abp.UI;

namespace Resilience.Domain.ProgressTrackers
{
    public class MoodEntryManager : DomainService
    {
        private readonly IRepository<MoodEntry, Guid> _moodEntryRepository;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IAbpSession _abpSession;
        public MoodEntryManager
          (
          IRepository<MoodEntry, Guid> moodEntryRepository,
          IUnitOfWorkManager unitOfWorkManager,
          IAbpSession abpSession
          )
        {
            _moodEntryRepository = moodEntryRepository;
            _abpSession = abpSession;
            _unitOfWorkManager = unitOfWorkManager;
        }

        public async Task<MoodEntry> CreateMoodEntryAsync
           (
               Guid personId,
               int rating,
               ReflistMoodType moodType,
               string notes,
               DateTime entryDate
           )
        {
            try
            {
                var moodEntry = new MoodEntry
                {
                    PersonId = personId,
                    Rating = rating,
                    MoodType = moodType,
                    Notes = notes,
                    EntryDate = entryDate
                };

                var query = await _repository.InsertAsync(moodEntry);
                return query;
            }
            catch (Exception ex)
            {
                Logger.Error($"Error creating MoodEntry: {ex.Message}", ex);
                if (ex.InnerException != null)
                    Logger.Error($"Inner exception: {ex.InnerException.Message}");
                throw new UserFriendlyException("An error occurred while creating the MoodEntry", ex);
            }

        }

        public List<MoodEntry> GetMoodEntriesByPersonId(Guid personId)
        {
            using (var uow = _unitOfWorkManager.Begin())
            {
                _unitOfWorkManager.Current.SetTenantId(1);

                try
                {
                    var session = _abpSession.Use(1, 1);

                    var entries = _moodEntryRepository
                         .GetAll()
                         .Where(entry => entry.PersonId == personId)
                         .ToList();

                    uow.Complete();

                    return entries;
                }
                catch (Exception ex)
                {
                    Logger.Error($"Error retrieving Mood entries for PersonId {personId}: {ex.Message}", ex);
                    if (ex.InnerException != null)
                    {
                        Logger.Error($"Inner exception: {ex.InnerException.Message}");
                    }
                    throw new UserFriendlyException("An error occurred while retrieving Mood entries.", ex);
                }
            }
        }

    }

}
