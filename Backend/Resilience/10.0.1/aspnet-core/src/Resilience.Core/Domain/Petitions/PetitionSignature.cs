using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Persons;

namespace Resilience.Domain.Petitions
{
    public class PetitionSignature:FullAuditedEntity<Guid>
    {
        public Guid PetitionId { get; set; }
        public virtual Petition Petition { get; set; }
        public Guid? PersonId { get; set; } // Nullable for anonymous signatures
        public virtual Person Person { get; set; }
        public string? SignerName { get; set; } // Optional for anonymous
        public string? SignerEmail { get; set; } // Optional for anonymous
        public DateTime SignedDate { get; set; }
        public bool IsAnonymous { get; set; }
        public string? Comment { get; set; } // Optional comment
    }
}
