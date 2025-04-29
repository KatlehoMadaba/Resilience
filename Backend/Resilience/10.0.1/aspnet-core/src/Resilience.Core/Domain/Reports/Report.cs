using System;
using Abp.Domain.Entities.Auditing;
using Resilience.Domain.Persons;

namespace Resilience.Domain.Reports
{
    public class Report:FullAuditedEntity<Guid>
    {
        public Guid PersonId { get; set; }
        public virtual Person Person { get; set; }
        public ReflistReportStatus ReportStatus { get; set; }
        public  string ReportStatusText { get; set; }
        public string? EncryptedContent { get; set; } // Encrypted report details
        public bool IsSharedWithAuthorities { get; set; }
        public DateTime? SharedDate { get; set; }
        public string FileReference { get; set; } // For PDF generation
        public virtual SexualAssaultReport SexualAssaultReport {  get; set; }
    }
}
