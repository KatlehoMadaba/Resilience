using System.ComponentModel;

namespace Resilience.Domain.CrowdfundingCampaigns
{
    public enum ReflistCampaignStatus
    {
        [Description("Active")]
        Active=1,
        [Description("Funded")]
        Funded =2,
        [Description("Closed")]
        Closed=3,
        [Description("Suspended")]
        Suspended=4
    }
}
