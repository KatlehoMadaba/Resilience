using System.ComponentModel;

namespace Resilience.Domain.Persons
{
    public enum ReflistRecoveryPhase
    {
        //This occurs immediately after the assault and is marked by shock,
        //fear, anger, or numbness.
        //Survivors may feel disoriented or struggle to process the event
        [Description("Acute Phase")]
        AcutePhase = 1,

        //During this phase, survivors often attempt to return to normalcy,
        //sometimes by suppressing thoughts about the incident.
        //They may appear outwardly fine but still grapple with internal struggles
        [Description("Outward Adjustment Phase")]
        AdjustmentPhase = 2,

        //This is when survivors begin to confront and process the trauma, 
        //often seeking support or counseling. 
        //Feelings of depression or anxiety may resurface,
        //but this phase is crucial for healing
        [Description("Integration Phase")]
        IntegrationPhase = 3,

        //In this stage, survivors work toward acceptance and rebuilding their lives. 
        //They may redefine relationships, roles, or goals as part of their recovery.
        [Description("Resolution Phase")]
        ResolutionPhase = 4,

        [Description("Unsure")]
        Unsure = 5,
    }
}
