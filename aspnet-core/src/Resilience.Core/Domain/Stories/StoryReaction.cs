using System;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Persons;

namespace Resilience.Domain.Stories
{
    public class StoryReaction:FullAuditedEntity<Guid>
    {
        public Guid StoryId { get; set; }
        public virtual Story Story { get; set; }
        public Guid? PersonId { get; set; } // Nullable for anonymous reactions
        public virtual Person Person { get; set; }
        public ReflistReactionType ReactionType { get; set; }
        public string ReactionTypeText { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
