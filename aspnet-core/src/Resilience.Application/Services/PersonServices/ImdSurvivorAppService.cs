using System;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using AutoMapper;
using Resilience.Domain.Persons;
using Resilience.Services.PersonServices.Dtos;
using Volo.Abp;


namespace Resilience.Services.PersonServices
{
    public class ImdSurvivorAppService :
        AsyncCrudAppService<ImmediateSurvivor, ImdSurvivorResponseDto, Guid, PagedAndSortedResultRequestDto, ImdSurvivorRequestDto, ImdSurvivorResponseDto>

    {
        private readonly ImmediateSurvivorManager _immediateSurvivorManager;
        private readonly IMapper _mapper;
        public ImdSurvivorAppService(IRepository<ImmediateSurvivor, Guid> repository, ImmediateSurvivorManager immediateSurvivorManager, IMapper mapper) : base(repository)
        {
            _immediateSurvivorManager = immediateSurvivorManager;
            _mapper = mapper;
        }
        public override async Task<ImdSurvivorResponseDto> CreateAsync(ImdSurvivorRequestDto input)
        {
            var immediateSurvivor = await _immediateSurvivorManager.CreateImdSurvivorAsync(
                input.Name,
                input.Surname,
                input.EmailAddress,
                input.UserName,
                input.Password,
                input.AnonymousId,
                input.DisplayName,
                input.UseDisplayNameOnly,
                input.Sex,
                input.PhoneNumber,
                input.IsAnonymous,
                input.IncidentDate,
                input.HasReceivedMedicalAttention,
                input.HasReportedToAuthorities
                );

            return _mapper.Map<ImdSurvivorResponseDto>(immediateSurvivor);
        }

        public override async Task<ImdSurvivorResponseDto> GetAsync(EntityDto<Guid> input)
        {
            var immediateSurvivor = await _immediateSurvivorManager.GetImmediateSurvivorByIdWithUserAsync(input.Id);
            if (immediateSurvivor == null)
            {
                throw new UserFriendlyException("ImdSurvivor not found");
            }
            return _mapper.Map<ImdSurvivorResponseDto>(immediateSurvivor);
        }



    }
}
