using System;
using System.Collections.Generic;

namespace Resilience.Domain.Persons
{
        public class CreatePersonInput
        {
            // Shared User/Person fields
            public string Name { get; set; }
            public string Surname { get; set; }
            public string UserName { get; set; }
            public string Password { get; set; }
            public string EmailAddress { get; set; }
            public string PhoneNumber { get; set; }
            public string? DisplayName { get; set; }
            public bool IsAnonymous { get; set; }
            public bool? UseDisplayNameOnly { get; set; }
            public ReflistSex? Sex { get; set; }

            // derived type flags 
            public bool IsImdSurvivor { get; set; }
            public bool IsPastSurvivor { get; set; }
            public bool IsProfessional { get; set; }
            public bool IsSupporter { get; set; }

            // ImmediateSurvivor-specific fields
            public DateTime? IncidentDate { get; set; }
            public bool? HasReceivedMedicalAttention { get; set; }
            public bool? HasReportedToAuthorities { get; set; }

            // PastSurvivor-specific fields
            public bool? HasDisclosedBefore { get; set; }
            public int? TimeElapsedInDays { get; set; }
            public ReflistRecoveryPhase? RecoveryPhase { get; set; }

            // Supporter-specific fields
            public string? SupportMotivation { get; set; }
            public bool? IsSubscribedToUpdates { get; set; }
            public List<string>? AreasOfInterest { get; set; }

            // Professional-specific fields
            public string? Profession { get; set; }
            public string? Organization { get; set; }
            public string? Credentials { get; set; }
            public bool? IsVerified { get; set; }
            public bool? IsActive { get; set; }
        }
    }


