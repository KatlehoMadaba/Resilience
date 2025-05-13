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
        Hopeful = 4,
        [Description("Neutral")]
        Neutral = 5,
        [Description("Angered")]
        Angered = 6,
    }

}
