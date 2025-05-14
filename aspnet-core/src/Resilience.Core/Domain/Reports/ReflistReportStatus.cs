using System.ComponentModel;

namespace Resilience.Domain.Reports
{
    public enum ReflistReportStatus:long
    {
        [Description("Submitted")]
        Submitted = 1,
        [Description("InProgress")]
        InProgress = 2,
        [Description("Draft")]
        Draft = 3

    }
}

