using System;
using Abp.Domain.Entities.Auditing;

namespace Resilience.Domain.SupportSessions
{
   public class ProsessionalMessage:FullAuditedEntity<Guid>
    {
        public Guid SessionId { get; set; }
        public virtual SupportSession Session { get; set; }
        public string Content { get; set; }
        public bool IsFromProsessional { get; set; }
        public DateTime Timestamp { get; set; }
    }
}
