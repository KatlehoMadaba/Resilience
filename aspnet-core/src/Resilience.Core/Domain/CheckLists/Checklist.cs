using System;
using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;

namespace Resilience.Domain.CheckLists
{
    public class Checklist:FullAuditedEntity<Guid>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string TargetUserType { get; set; } // Type name of person subclass
        public bool IsImmediate { get; set; } // For immediate vs. non-immediate steps
        public List<ChecklistItem> Items { get; set; }
    }
}
