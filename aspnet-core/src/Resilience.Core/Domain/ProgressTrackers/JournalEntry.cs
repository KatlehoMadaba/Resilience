using System;
using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Persons;

namespace Resilience.Domain.ProgressTrackers
{
    public class JournalEntry:FullAuditedEntity<Guid>
    {
        public Guid PersonId { get; set; }
        public virtual Person Person { get; set; }
        public string Content { get; set; }
        public DateTime EntryDate { get; set; }
        public List<string> Tags { get; set; }
        public bool IsPrivate { get; set; }//If user allows us to publish their diary entries 
    }
}
