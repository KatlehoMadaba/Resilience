using System;
using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Persons;

namespace Resilience.Domain.ProgressTrackers
{
   public class ProgressTracker:FullAuditedEntity<Guid>
    {
        public Guid PersonId { get; set; }
        public virtual Person Person { get; set; }
        public DateTime StartDate { get; set; }
        public int DaysSinceStart { get; set; }
        public virtual ICollection<MilestoneEntry> Milestones { get; set; }
        public virtual ICollection<JournalEntry> JournalEntries { get; set; }
        public virtual ICollection<MoodEntry> MoodEntries { get; set; }
    }
}
