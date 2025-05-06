using Abp.Application.Services.Dto;
using Resilience.Domain.MedicalAssistanceRecords;
using Resilience.Domain.Persons;
using Resilience.Services.CrowdfundingCampaignsServices.Dto;
using Resilience.Services.PetitionServices.Dtos;
using Resilience.Services.ProgressTrackerServices.Dtos;
using Resilience.Services.ReportsServices.Dtos;
using Resilience.Services.StoryServices.Dtos;
using Resilience.Services.SupportResourceServices.Dtos;
using Resilience.Services.SupportSessionServices.Dtos;
using Resilience.Services.TestimonyServices.Dtos;
using System;
using System.Collections.Generic;

namespace Resilience.Services.PersonServices.Dtos
{
    public class ImdSurvivorResponseDto: EntityDto<Guid>
    {
        //Person & User 
        public long UserId { get; set; }
        public string? UserName { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? EmailAddress { get; set; }
        public string? DisplayName { get; set; }
        public bool? UseDisplayNameOnly { get; set; }
        public ReflistSex? Sex { get; set; }
        public string? PhoneNumber { get; set; }
        public  List<SupportSessionDto>? SupportSessions { get; set; }
        public  List<ReportDto>? Reports { get; set; }
        public  List<StoryDto>? Stories { get; set; }
        public  List<PetitionDto>? Petitions { get; set; }
        public  List<CrowdfundingCampaignDto>? CrowdfundingCampaigns { get; set; }
        public  ProgressTrackerDto? ProgressTracker { get; set; }
        public  List<SupportResourceDto>? SavedResources { get; set; }
        public  List<TestimonyDto>? Testimonies { get; set; }
        //ImdSurvivor
        public string? AnonymousId { get; set; }
        public bool IsAnonymous { get; set; }
        public DateTime? IncidentDate { get; set; }
        public bool HasReceivedMedicalAttention { get; set; }
        public bool HasReportedToAuthorities { get; set; }
        public virtual MedicalAssistanceRecord MedicalAssistanceRecord { get; set; }

        

    }
}
