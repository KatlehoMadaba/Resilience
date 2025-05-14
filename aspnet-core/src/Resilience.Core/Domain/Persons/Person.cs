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
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Resilience.Domain.Persons
{
    public class Person : FullAuditedEntity<Guid>
    {
        [Required]
        public long UserId { get; set; }
        [ForeignKey("UserId")]
        public User? User { get; set; }
        public string? AnonymousId { get; set; }
        public string? DisplayName { get; set; }
        public bool? UseDisplayNameOnly { get; set; }
        public virtual ReflistSex? Sex { get; set; }
        public string? SexText { get; set; }
        public string? PhoneNumber { get; set; }
        public bool ? IsAnonymous { get; set; }
        //public DateTime? LastLoginDate { get; set; }
        public virtual ICollection<SupportSession>? SupportSessions { get; set; }
        public virtual ICollection<Story>? Stories { get; set; }
        public virtual ICollection<Petition>? Petitions { get; set; }
        public virtual ICollection<CrowdfundingCampaign>? CrowdfundingCampaigns { get; set; }
        public virtual ICollection<SupportResource>? SavedResources { get; set; }
        public virtual ICollection<Testimony>? Testimonies { get; set; }


    }
}
