using System;
using Abp.Domain.Entities.Auditing;

namespace Resilience.Domain.CheckLists
{
    public class ChecklistItem:FullAuditedEntity<Guid>
    {
        public string Description { get; set; }
        public int Order { get; set; }
        public bool IsOptional { get; set; }
        public Guid ChecklistId { get; set; }
        public virtual Checklist Checklist { get; set; }
    }
}
