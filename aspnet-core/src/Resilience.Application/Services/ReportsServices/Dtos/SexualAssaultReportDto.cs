using System;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Resilience.Domain.Reports;

namespace Resilience.Services.ReportsServices.Dtos
{
    [AutoMap(typeof(SexualAssaultReport))]
    public class SexualAssaultReportDto:EntityDto<Guid>
    {
        public Guid PersonId { get; set; }
        public ReflistReportStatus ReportStatus { get; set; }
        public string? EncryptedContent { get; set; } // Encrypted report details
        public bool IsSharedWithAuthorities { get; set; }
        public DateTime? SharedDate { get; set; }
        public string FileReference { get; set; } // For PDF generation


        // Victim Details
        public string FullName { get; set; }
        public string IDNumber { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Occupation { get; set; }

        // Incident Details
        public DateTime? IncidentDateTime { get; set; }
        public string Location { get; set; }
        public bool AloneOrWithSomeone { get; set; }
        public string LeadingEventsDescription { get; set; }

        // Suspect Details
        public bool IsSuspectKnown { get; set; }
        public string? SuspectName { get; set; }
        public string? SuspectDescription { get; set; }
        public string? WeaponOrThreats { get; set; }

        // Assault Details
        public string? AssaultDescription { get; set; }
        public bool Injuries { get; set; }
        public string? WordsSpokenBySuspect { get; set; }

        // Post-Incident Actions
        public string ActionsTaken { get; set; }
        public bool ChangedClothesOrShowered { get; set; }
        public bool ClothesKept { get; set; }

        // Witnesses and Evidence
        public bool WitnessPresent { get; set; }
        public string WitnessDetails { get; set; }
        public bool CCTVAvailable { get; set; }
        public bool IsOtherEvidence { get; set; }
        public string OtherEvidenceDescription { get; set; }

        // Medical
        public bool ReceivedMedicalAttention { get; set; }
        public bool WillingForensicExam { get; set; }

        // Safety and Support
        public bool FeelsSafe { get; set; }
        public bool WantsCounsellor { get; set; }
        public bool PrefersFemaleOfficer { get; set; }
    }
}
