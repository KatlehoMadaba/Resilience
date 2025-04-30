using System;
using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;
using Resilience.Authorization.Users;
using Resilience.Domain.CrowdfundingCampaigns;
using Resilience.Domain.Petitions;
using Resilience.Domain.ProgressTrackers;
using Resilience.Domain.Reports;
using Resilience.Domain.Stories;
using Resilience.Domain.SupportResources;
using Resilience.Domain.SupportSessions;
using Resilience.Domain.Testimonies;

namespace Resilience.Domain.Persons
{
    public class Person : FullAuditedEntity<Guid>
    {
        public string? AnonymousId { get; set; }
        public string? DisplayName { get; set; }
        public bool? UseDisplayNameOnly { get; set; }
        public User? User { get; set; }
        public Guid UserId { get; set; }
        public virtual ReflistSex? Sex { get; set; }
        public string? SexText { get; set; }
        public string? PhoneNumber { get; set; }
        public bool IsAnonymous { get; set; }
        public DateTime? CreatedDate { get; set; }//move this
        public DateTime? LastLoginDate { get; set; }
        public virtual ICollection<SupportSession>? SupportSessions { get; set; }
        public virtual ICollection<Report>? Reports { get; set; }
        public virtual ICollection<Story>? Stories { get; set; }
        public virtual ICollection<Petition>? Petitions { get; set; }
        public virtual ICollection<CrowdfundingCampaign>? CrowdfundingCampaigns { get; set; }
        public virtual ProgressTracker? ProgressTracker { get; set; }
        public virtual ICollection<SupportResource>? SavedResources { get; set; }
        public virtual ICollection<Testimony>? Testimonies { get; set; }
    }
}
