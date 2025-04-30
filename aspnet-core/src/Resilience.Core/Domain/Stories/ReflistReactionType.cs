using System.ComponentModel;

namespace Resilience.Domain.Stories
{
    public enum ReflistReactionType:long
    {
        [Description("Support")]
        Support= 1,
        [Description("Empathy")]
        Empathy=2,
        [Description("Strength")]
        Strength=3,
        [Description("Solidarity")]
        Solidarity=4
    }
}
