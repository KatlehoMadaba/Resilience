using System;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Persons;

namespace Resilience.Domain.CrowdfundingCampaigns
{
    public class Donation:FullAuditedEntity<Guid>
    {
        public Guid CampaignId { get; set; }
        public virtual CrowdfundingCampaign Campaign { get; set; }
        public Guid? DonorPersonId { get; set; } // Nullable for anonymous donors
        public virtual Person DonorPerson { get; set; }
        public decimal Amount { get; set; }
        public string? DonorName { get; set; } // Optional for anonymous
        public string ?Message { get; set; } // Optional message of support
        public DateTime DonationDate { get; set; }
        public bool IsAnonymous { get; set; }
        public string TransactionId { get; set; } // Reference to payment processor
    }
}
