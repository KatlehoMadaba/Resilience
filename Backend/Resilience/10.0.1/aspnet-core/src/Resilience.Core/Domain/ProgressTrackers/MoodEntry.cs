using System;
using Abp.Domain.Entities.Auditing;

namespace Resilience.Domain.ProgressTrackers
{
    public class MoodEntry:FullAuditedEntity<Guid>
    {
        public Guid ProgressTrackerId { get; set; }
        public virtual ProgressTracker ProgressTracker { get; set; }
        public int Rating { get; set; } // 1-10 scale
        public ReflistMoodType MoodType { get; set; }
        public string ? MoodTypeText { get; set; }
        public string Notes { get; set; }
        public DateTime EntryDate { get; set; }
    }
}
