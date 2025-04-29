using System;
using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Persons;

namespace Resilience.Domain.SupportSessions
{
    public class SupportSession:FullAuditedEntity<Guid>
    {
        public Guid? PersonId { get; set; } // Nullable for anonymous sessions
        public virtual Person Person { get; set; }
        public string AnonymousId { get; set; } // To track anonymous sessions
        public DateTime StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public string SessionNotes { get; set; } // Encrypted summary of session
        public virtual ICollection<Message> Messages { get; set; }
        public virtual ICollection<ProsessionalMessage> ProsessionalMessages { get; set; }
    }
}
