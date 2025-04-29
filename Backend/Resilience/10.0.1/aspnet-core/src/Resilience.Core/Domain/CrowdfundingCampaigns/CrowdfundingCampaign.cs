using System;
using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Persons;

namespace Resilience.Domain.CrowdfundingCampaigns
{
    public class CrowdfundingCampaign:FullAuditedEntity<Guid>
    {
        public Guid CreatorPersonId { get; set; }
        public virtual Person CreatorPerson { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal FundingGoal { get; set; }
        public decimal CurrentAmount { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime EndDate { get; set; }
        public ReflistCampaignStatus Status { get; set; }
        public string CampaignStatusText { get; set; }
        public string BankingDetails { get; set; } // Encrypted
        public virtual ICollection<Donation> Donations { get; set; }
    }
}
