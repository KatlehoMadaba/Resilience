using System.ComponentModel;

namespace Resilience.Domain.Persons
{
    public enum ReflistSex:long
    {
        [Description(" Male")]
        Male=1,
        [Description("Female")]
        Female=2,
        [Description("PreferNotToSay")]
        PreferNotToSay=3,
    
    }
}
