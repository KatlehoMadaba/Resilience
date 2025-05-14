using System;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Resilience.Domain.Reports;
using Resilience.Services.ReportsServices.Dtos;

namespace Resilience.Services.ReportsServices
{
    public class SexualAssaultReportAppService : AsyncCrudAppService<SexualAssaultReport, SexualAssaultReportDto, Guid,SexualAssaultReportDto>
    {
 
       
        public SexualAssaultReportAppService(IRepository<SexualAssaultReport, Guid> repository ) : base(repository)
        {
          
        }



      
    }


}
