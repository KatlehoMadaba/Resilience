using System;
using System.Collections.Generic;
using Abp.Application.Services.Dto;
using Resilience.Domain.Persons;
using Resilience.Services.CrowdfundingCampaignServices.Dto;

namespace Resilience.Services.PersonServices.Dtos
{
    public class GeneralSupporterResponseDto:EntityDto<Guid>
    {
        //Person
        public string? UserName { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? Password { get; set; }
        public string? EmailAddress { get; set; }
        public string? DisplayName { get; set; }
        public bool? UseDisplayNameOnly { get; set; }
        public ReflistSex? Sex { get; set; }
        //General
        public string SupportMotivation { get; set; }//(Why they want to support)
        public bool IsSubscribedToUpdates { get; set; }
        public List<string> AreasOfInterest { get; set; }
        public List<DonationDto> Donations { get; set; }
        public List<StoryCommentDto> Comments { get; set; }
        public List<StoryReactionDto> Reactions { get; set; }
        public List<PetitionSignatureDto> PetitionSignatures { get; set; }
    }
}
