using Abp.Application.Services.Dto;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using Resilience.Domain.Medical_AssistanceRecords;
using Resilience.Services.MedicalAAppServices.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.ObjectMapping;
using Resilience.Domain.PoliceStations;
using Resilience.Services.PoliceStationAppServices.Dtos;
using Abp.UI;

namespace Resilience.Services.PoliceStationAppServices
{
    public class PoliceStationAppService : AsyncCrudAppService<PoliceStation, PoliceStationDto, Guid>
    {
        private readonly PoliceStationManager _policeStationManager;
        private readonly IObjectMapper _objectMapper;
        private readonly IRepository<PoliceStation, Guid> _repository;
        public PoliceStationAppService(IRepository<PoliceStation, Guid> repository, PoliceStationManager policeStationManager, IObjectMapper ObjectMapper) : base(repository)
        {
            _policeStationManager = policeStationManager;
            _objectMapper = ObjectMapper;
        }
        public override async Task<PagedResultDto<PoliceStationDto>> GetAllAsync(PagedAndSortedResultRequestDto input)
        {
            try
            {
                var facilities = await _policeStationManager.GetPagedDistinctMedicalFacilitiesAsync(input.SkipCount, input.MaxResultCount);
                var totalCount = await _policeStationManager.GetDistinctCountAsync();
                var dtos = _objectMapper.Map<List<PoliceStationDto>>(facilities);
                return new PagedResultDto<PoliceStationDto>(totalCount, dtos);
            }
            catch (Exception ex)
            {
                throw new UserFriendlyException("GetAll failed", ex.Message);
            }
        }

    }
}
