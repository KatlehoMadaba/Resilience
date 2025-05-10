using System;
using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Persons;

namespace Resilience.Domain.Testimonies
{
    public class Testimony : FullAuditedEntity<Guid>
    {
        public Guid PersonId { get; set; }
        public Person Person { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public List<string> Tags { get; set; }
        public bool IsAnonymous { get; set; }
    }
}

