using System.Collections.Generic;
using Resilience.Domain.CrowdfundingCampaigns;
using Resilience.Domain.Petitions;
using Resilience.Domain.Stories;

namespace Resilience.Domain.Persons
{
    public class GeneralSupporter : Person
    {
        public string SupportMotivation { get; set; }//(Why they want to support)
        public bool IsSubscribedToUpdates{get; set; }
        public List<string> AreasOfInterest { get; set; }

        public ICollection<Donation> Donations {get; set;}
        public ICollection<StoryComment> Comments{get; set;}
        public ICollection<StoryReaction> Reactions{get; set;}
        public ICollection<PetitionSignature> PetitionSignatures{get; set;}
    }
}
