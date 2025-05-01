using Abp.Application.Services.Dto;
using System;

namespace Resilience.Services.PersonServices.Dtos
{
    public class ImdSurvivorRequestDto:EntityDto<Guid>
    {
        public string? UserName{get;set;} 
        public string? Name { get; set; } 
        public string? Surname{get;set; }
        public string? EmailAddress { get; set; }
        public string? DisplayName{ get; set; }
        public string? UseDisplayNameOnly{get;set;}
        public string? Sex{get;set;}
        public string? PhoneNumber{get;set;}
        public string? AnonymousId { get; set; }
        public bool IsAnonymous { get; set; }
        public DateTime? IncidentDate { get; set; }
        public bool HasReceivedMedicalAttention { get; set; }
        public bool HasReportedToAuthorities { get; set; }
    }
}
