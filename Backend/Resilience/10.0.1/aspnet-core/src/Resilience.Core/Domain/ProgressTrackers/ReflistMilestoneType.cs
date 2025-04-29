using System.ComponentModel;

namespace Resilience.Domain.ProgressTrackers
{
    public enum ReflistMilestoneType:long
    {
        [Description("Personal")]
        Personal=1,
        [Description("Social")]
        Social=2,
        [Description("Medical")]
        Medical = 2,
        [Description("Legal")]
        Legal=3,
        [Description("Emotional")]
        Emotional=4,
    }
}
