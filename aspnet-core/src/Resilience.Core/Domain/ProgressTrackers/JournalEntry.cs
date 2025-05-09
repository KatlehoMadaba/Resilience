using System;
using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;

namespace Resilience.Domain.ProgressTrackers
{
    public class JournalEntry:FullAuditedEntity<Guid>
    {
        public Guid ProgressTrackerId { get; set; }
        public virtual ProgressTracker ProgressTracker { get; set; }
        public string Content { get; set; }
        public DateTime EntryDate { get; set; }
        public List<string> Tags { get; set; }
        public bool IsPrivate { get; set; }//If user allows us to publish their diary entries 
    }
}
