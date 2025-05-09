using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Resilience.Domain.Persons;
using Resilience.Domain.Reports;

namespace Resilience.Services.ReportsServices.Dtos
{
    [AutoMap(typeof(Report))]
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
