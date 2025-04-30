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
                var query = queryable.Where(x => x.Name != null && x.Name.Contains("Hospital"));


                var totalCount = await query.CountAsync();
                var items = await query
                    .OrderBy(x => x.Name)
                    .Skip(input.SkipCount)
                    .Take(input.MaxResultCount)
                    .ToListAsync();

                return new PagedResultDto<MedicalFacilityDto>(
                    totalCount,
                    ObjectMapper.Map<List<MedicalFacilityDto>>(items)
                );
            }
            catch (Exception ex) 
            {
                throw new UserFriendlyException("GetAll failed", ex.Message);
            }
        }

    }
}
