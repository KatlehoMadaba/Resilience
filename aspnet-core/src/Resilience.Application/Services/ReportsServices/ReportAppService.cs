using System;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Resilience.Domain.Reports;
using Resilience.Services.ReportsServices.Dtos;

namespace Resilience.Services.ReportsServices
{
    public class ReportAppService : AsyncCrudAppService<Report, ReportDto, Guid, PagedAndSortedResultRequestDto, ReportDto>
    {
        public ReportAppService(IRepository<Report, Guid> repository) : base(repository)
        {
        }
    }
}
