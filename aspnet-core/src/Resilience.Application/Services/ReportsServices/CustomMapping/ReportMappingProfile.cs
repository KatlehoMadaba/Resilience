using AutoMapper;
using Resilience.Domain.Persons;
using Resilience.Domain.Reports;
using Resilience.Services.PersonServices.Dtos;
using Resilience.Services.ReportsServices.Dtos;

namespace Resilience.Services.ReportsServices.CustomMapping
{
   public class ReportMappingProfile : Profile
    {
        public  ReportMappingProfile()
        {
            CreateMap<SexualAssaultReportDto, SexualAssaultReport>();
            CreateMap<SexualAssaultReport, SexualAssaultReportDto>();
        }

        
    }
}
