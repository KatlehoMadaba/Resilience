using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.UI;
using Resilience.Domain.Medical_AssistanceRecords;
using Resilience.Services.MedicalAAppServices.Dtos;

namespace Resilience.Services.MedicalAAppServices
{
    public class MedicalFacilityAppService : AsyncCrudAppService<MedicalFacility, MedicalFacilityDto, Guid>
    {
        public MedicalFacilityAppService(IRepository<MedicalFacility, Guid> repository) : base(repository)
        {

        }
        public override async Task<PagedResultDto<MedicalFacilityDto>> GetAllAsync(PagedAndSortedResultRequestDto input)
        {
            try
            {
                var queryable = await Repository.GetAllAsync();

                var distinctQuery = queryable
                    .ToList() 
                    .DistinctBy(x => x.PlaceId) 
                    .OrderBy(x => x.Name)
                    .Skip(input.SkipCount)
                    .Take(input.MaxResultCount);

                var totalCount = distinctQuery.Count(); 

                // Map distinct items to DTOs
                return new PagedResultDto<MedicalFacilityDto>(
                    totalCount,
                    ObjectMapper.Map<List<MedicalFacilityDto>>(distinctQuery)
                );
            }
            catch (Exception ex)
            {
                throw new UserFriendlyException("GetAll failed", ex.Message);
            }
        }

    }
}
