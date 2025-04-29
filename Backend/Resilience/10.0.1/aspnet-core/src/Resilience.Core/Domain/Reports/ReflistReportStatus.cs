using System.ComponentModel;

namespace Resilience.Domain.Reports
{
    public enum ReflistReportStatus:long
    {
        [Description("Draft")]
        Draft = 1,
        [Description("Completed")]
        Completed = 2,
        [Description("Submitted")]
        Submitted = 3,
        [Description("InProgress")]
        InProgress = 4,
        [Description("Closed")]
        Closed = 5

    }
}

