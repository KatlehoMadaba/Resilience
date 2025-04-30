using System;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Persons;

namespace Resilience.Domain.Stories
{
    public class StoryComment:FullAuditedEntity<Guid>
    {

        public Guid StoryId { get; set; }
        public virtual Story Story { get; set; }
        public Guid? PersonId { get; set; } // Nullable for anonymous comments
        public virtual Person Person { get; set; }
        public string Content { get; set; }
        public DateTime PostedDate { get; set; }
        public bool IsAnonymous { get; set; }
    }
}
