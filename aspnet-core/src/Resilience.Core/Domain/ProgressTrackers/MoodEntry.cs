using System;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Persons;

namespace Resilience.Domain.ProgressTrackers
{
    public class MoodEntry:FullAuditedEntity<Guid>
    {
        public Guid PersonId { get; set; }
        public virtual Person Preson { get; set; }
        public int Rating { get; set; } // 1-10 scale
        public ReflistMoodType MoodType { get; set; }
        public string ? MoodTypeText { get; set; }
        public string Notes { get; set; }
        public DateTime EntryDate { get; set; }
    }
}
