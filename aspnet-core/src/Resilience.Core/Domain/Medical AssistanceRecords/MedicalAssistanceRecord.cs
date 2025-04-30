using System;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Medical_AssistanceRecords;
using Resilience.Domain.Persons;

namespace Resilience.Domain.MedicalAssistanceRecords
{
    public class MedicalAssistanceRecord:FullAuditedEntity<Guid>
    {
        public Guid SurvivorId { get; set; }
        public virtual ImmediateSurvivor Survivor { get; set; }
        public Guid? MedicalFacilityId { get; set; }
        public virtual MedicalFacility MedicalFacility { get; set; }
        public DateTime? VisitDate { get; set; }
        public bool RapeKitCollected { get; set; }
        public string TreatmentProvided { get; set; }
        public string FollowUpInstructions { get; set; }
    }
}
