using System.ComponentModel;

namespace Resilience.Domain.ProgressTrackers
{
    public enum ReflistMoodType:long
    {
        [Description("Fearful")]
        Fearful = 1,
        [Description("Sombre")]
        Sombre = 2,
        [Description("Hopeful")]
        Hopeful = 3,
        [Description("Neutral")]
        Neutral = 4,
        [Description("Angered")]
        Angered = 3,
    }

}
