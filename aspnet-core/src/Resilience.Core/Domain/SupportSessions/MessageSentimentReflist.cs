using System.ComponentModel;

namespace Resilience.Domain.SupportSessions
{
    public enum MessageSentimentReflist:long
    {
        [Description("Distressed")]
        Distressed=1,
        [Description("Anxious")]
        Anxious=2,
        [Description("Neutral")]
        Neutral=3,
        [Description("Hopeful")]
        Hopeful=4,
        [Description("Empowered")]
        Empowered=5

    }
}
