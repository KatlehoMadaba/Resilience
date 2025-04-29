using System;

namespace Resilience.Domain.Persons
{
    public class PastSurvivor : Person
    {
        public DateTime? IncidentDate { get; set; }
        public bool HasDisclosedBefore { get; set; }
        public int TimeElapsedInDays { get; set; } // Time since incident
        public ReflistRecoveryPhase? RecoveryPhase { get; set; } // Self-identified phase of recovery
        public string? RecoveryPhaseText { get; set; }

    }
}
