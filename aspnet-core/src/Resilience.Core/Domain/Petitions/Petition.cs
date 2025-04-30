using System;
using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Persons;

namespace Resilience.Domain.Petitions
{
    public class Petition:FullAuditedEntity<Guid>
    {
        public Guid CreatorPersonId { get; set; }
        public virtual Person CreatorPerson { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Target { get; set; } // Who the petition is directed at
        public int SignatureGoal { get; set; }//How many signatures they want to have
        public DateTime CreatedDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool IsActive { get; set; }
        public virtual ICollection<PetitionSignature> Signatures { get; set; }
    }
}
