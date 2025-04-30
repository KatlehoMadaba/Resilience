using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using Abp.Linq;
using Resilience.Domain.Medical_AssistanceRecords;
using Resilience.Services.MedicalAAppServices.Dtos;
using Abp.UI;

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

                // Fetch data into memory first, then ensure uniqueness
                var distinctQuery = queryable
                    .ToList() // Execute database query first
                    .DistinctBy(x => x.PlaceId) // Ensure uniqueness by PlaceId
                    .OrderBy(x => x.Name) // Sort by Name
                    .Skip(input.SkipCount) // Apply pagination
                    .Take(input.MaxResultCount); // Limit results

                var totalCount = distinctQuery.Count(); // Get the total count

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
