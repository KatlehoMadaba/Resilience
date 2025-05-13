using System;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Resilience.Domain.Reports;

namespace Resilience.Services.ReportsServices.Dtos
{
    public class ReportDto: EntityDto<Guid>
    {
        public Guid PersonId { get; set; }
        public ReflistReportStatus ReportStatus { get; set; }
        public string? EncryptedContent { get; set; } // Encrypted report details
        public bool IsSharedWithAuthorities { get; set; }
        public DateTime? SharedDate { get; set; }
        public string FileReference { get; set; } // For PDF generation
    }
}
