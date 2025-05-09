using System;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.UI;

namespace Resilience.Domain.ProgressTrackers
{
    public class MoodEntryManager:DomainService
    {
        private readonly IRepository<MoodEntry, Guid> _repository;
        public MoodEntryManager(IRepository<MoodEntry, Guid> repository)
        {
            _repository=repository;
        }

        public async Task<MoodEntry> CreateMoodEntryAsync
           (
               Guid progressTrackerId,
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
                    ProgressTrackerId= progressTrackerId,
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
    }
}
