using System.ComponentModel;

namespace Resilience.Domain.SupportResources
{
    public enum ReflistResourceType:long
    {
        [Description("PostAssaultChecklist")]
        PostAssaultChecklist=1,
        [Description("EducationalContent")]
        EducationalContent=2,
        [Description("HealingExercise")]
        HealingExercise=3,
        [Description("LegalInformation")]
        LegalInformation=4,
        [Description("SelfCareGuide")]
        SelfCareGuide=5
    }
}
