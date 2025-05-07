using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.ObjectMapping;
using Abp.UI;
using NuGet.Protocol.Core.Types;
using Resilience.Domain.Medical_AssistanceRecords;
using Resilience.Services.MedicalAAppServices.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Resilience.Services.MedicalAAppServices
{
    public class MedicalFacilityAppService : AsyncCrudAppService<MedicalFacility, MedicalFacilityDto, Guid>
    {
        private readonly MedicalFacilityManager _medicalFacilityManager;
        private readonly IObjectMapper _objectMapper;
        
        public MedicalFacilityAppService( IRepository<MedicalFacility, Guid> repository, MedicalFacilityManager medicalFacilityManager, IObjectMapper ObjectMapper) :base(repository)
        {
            _medicalFacilityManager= medicalFacilityManager;
            _objectMapper = ObjectMapper;
        }
        public override async Task<PagedResultDto<MedicalFacilityDto>> GetAllAsync(PagedAndSortedResultRequestDto input)
        {
            try
            {
                var facilities = await _medicalFacilityManager.GetPagedDistinctMedicalFacilitiesAsync(input.SkipCount, input.MaxResultCount);
                var totalCount = await _medicalFacilityManager.GetDistinctCountAsync();
                var dtos = _objectMapper.Map<List<MedicalFacilityDto>>(facilities);
                return new PagedResultDto<MedicalFacilityDto>(totalCount, dtos);
            }
            catch (Exception ex)
            {
                throw new UserFriendlyException("GetAll failed", ex.Message);
            }
        }

        [AbpAllowAnonymous] // Optional, allow public access
        public async Task<List<MedicalFacilityDto>> GetNearbyFacilitiesAsync(GetNearbyFacilitiesInputDto input)
        {
            const double fixedRadiuskm = 15;
            var allFacilities = await _medicalFacilityManager.GetCurrentMedicalFacilityAsync(input.Longitude,input.Latitude, fixedRadiuskm);

            return _objectMapper.Map<List<MedicalFacilityDto>>(allFacilities);
        }

    }
}
