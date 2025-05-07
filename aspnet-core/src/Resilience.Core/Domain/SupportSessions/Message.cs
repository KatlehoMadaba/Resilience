using System;
using Abp.Domain.Entities.Auditing;

namespace Resilience.Domain.SupportSessions
{
    public class Message:FullAuditedEntity<Guid>
    {
        public Guid SessionId { get; set; }
        public virtual SupportSession Session { get; set; }
        public string Content { get; set; }
        public bool IsFromAI { get; set; }
        public DateTime Timestamp { get; set; }
        public MessageSentimentReflist? Sentiment { get; set; } // For tracking emotional state
    }
}
