using System;
using Abp.Domain.Entities.Auditing;

namespace Resilience.Domain.ProgressTrackers
{
    public class MilestoneEntry:FullAuditedEntity<Guid>
    {
        public Guid ProgressTrackerId { get; set; }
        public virtual ProgressTracker ProgressTracker { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime AchievedDate { get; set; }
        public ReflistMilestoneType Type { get; set; }
        public  string ? MilestoneTypeText { get; set; }

    }
}
