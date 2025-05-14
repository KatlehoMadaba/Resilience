using System;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Resilience.Domain.Reports;
using Resilience.Domain.Reports.Dtos;
using Resilience.Services.ReportsServices.Dtos;

namespace Resilience.Services.ReportsServices
{
    public class ReportAppService : AsyncCrudAppService<Report, ReportDto, Guid, PagedAndSortedResultRequestDto, ReportDto>
    {
        private readonly SexaualAssualtReportManager _sexaualAssualtReportManager;
        public ReportAppService(IRepository<Report, Guid> repository, SexaualAssualtReportManager sexaualAssualtReportManager) : base(repository)
        {
            _sexaualAssualtReportManager = sexaualAssualtReportManager;
        }

        //public async Task<FileDto>DownloadablePdf(Guid id)
        //{
        //    var pdf=await _sexaualAssualtReportManager.
        //}

    }
}
