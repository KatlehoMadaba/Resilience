using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.ObjectMapping;
using Abp.UI;
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
        private readonly IRepository<MedicalFacility, Guid> _repository;
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

    }
}
