using System;
using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;

namespace Resilience.Domain.SupportResources
{
    public class SupportResource:FullAuditedEntity<Guid>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public ReflistResourceType Type { get; set; }
        public string ContentUrl { get; set; }
        public List<string> Tags { get; set; }
        //public List<Gender> TargetGenders { get; set; } // For gender-specific resources
        public List<string> TargetUserTypes { get; set; } // Type names of person subclasses
        public DateTime CreatedDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }
        public bool IsActive { get; set; }
    }
}
