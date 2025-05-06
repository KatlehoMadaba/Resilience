using System;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Resilience.Domain.Persons;
using Resilience.Services.PersonServices.Dtos;
using Volo.Abp;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;


namespace Resilience.Services.PersonServices
{
    public class ImdSurvivorAppService :
        AsyncCrudAppService<ImmediateSurvivor, ImdSurvivorResponseDto, Guid, PagedAndSortedResultRequestDto, ImdSurvivorRequestDto, ImdSurvivorResponseDto>

    {
        private readonly ImmediateSurvivorManager _immediateSurvivorManager;
        private readonly IRepository<ImmediateSurvivor, Guid> _Imdrepository;
        private readonly IMapper _mapper;
        public ImdSurvivorAppService(IRepository<ImmediateSurvivor, Guid> repository, ImmediateSurvivorManager immediateSurvivorManager, IMapper mapper, IRepository<ImmediateSurvivor, Guid> imdrepository) : base(repository)
        {
            _immediateSurvivorManager = immediateSurvivorManager;
            _mapper = mapper;
            _Imdrepository = imdrepository;
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

        protected override async Task<ImmediateSurvivor> GetEntityByIdAsync(Guid id)
        {
            var immediateSurvivor = await _immediateSurvivorManager.GetImmediateSurvivorByIdWithUserAsync(id);
            if (immediateSurvivor == null)
            {
                throw new UserFriendlyException("ImdSurvivor not found");
            }
            return immediateSurvivor;
        }
         
        public async Task<ImdSurvivorResponseDto> GetCurrentSurvivorAsync(long userId)
        {
            var imdSurvivor = await _immediateSurvivorManager.GetImmediateSurvivorByUserIdAsync(userId);
            return _mapper.Map<ImmediateSurvivor, ImdSurvivorResponseDto>(imdSurvivor);
        }


    }

}
