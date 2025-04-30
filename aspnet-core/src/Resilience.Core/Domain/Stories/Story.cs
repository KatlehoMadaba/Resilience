using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Persons;

namespace Resilience.Domain.Stories
{
    public class Story:FullAuditedEntity<Guid>
    {
        public Guid PersonId { get; set; }
        public virtual Person Person { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime PostedDate { get; set; }
        public bool IsAnonymous { get; set; }
        public List<string> Tags { get; set; }
        public virtual ICollection<StoryComment> Comments { get; set; }
        public virtual ICollection<StoryReaction> Reactions { get; set; }
    }
}
