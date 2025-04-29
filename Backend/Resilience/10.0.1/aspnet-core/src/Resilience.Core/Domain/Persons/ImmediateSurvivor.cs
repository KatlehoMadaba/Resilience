using System;
using Resilience.Domain.MedicalAssistanceRecords;

namespace Resilience.Domain.Persons
{
    public class ImmediateSurvivor:Person
    {
        public DateTime? IncidentDate { get; set; }
        public bool HasReceivedMedicalAttention { get; set; }
        public bool HasReportedToAuthorities { get; set; }
        public virtual MedicalAssistanceRecord MedicalAssistance { get; set; }
    }
}
