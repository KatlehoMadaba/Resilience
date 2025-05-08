using Abp.Application.Services.Dto;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using AutoMapper;
using Resilience.Domain.Persons;
using Resilience.Services.PersonServices.Dtos;
using System.Threading.Tasks;
using System;
using Abp.UI;

namespace Resilience.Services.PersonServices
{
    public class PastSurvivorAppService :
      AsyncCrudAppService< PastSurvivor, PastSurvivorResponseDto, Guid, PagedAndSortedResultRequestDto, PastSurvivorRequestDto, PastSurvivorResponseDto>

    {
        private readonly PastSurvivorManager _pastSurvivorManager;
        private readonly IRepository< PastSurvivor, Guid> _Imdrepository;
        private readonly IMapper _mapper;
        public PastSurvivorAppService(IRepository< PastSurvivor, Guid> repository, PastSurvivorManager PastSurvivorManager, IMapper mapper, IRepository< PastSurvivor, Guid> imdrepository) : base(repository)
        {
            _pastSurvivorManager = PastSurvivorManager;
            _mapper = mapper;
            _Imdrepository = imdrepository;
        }
        public override async Task<PastSurvivorResponseDto> CreateAsync(PastSurvivorRequestDto input)
        {
            var  PastSurvivor = await _pastSurvivorManager.CreatePastSurvivorAsync(
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
                input.HasDisclosedBefore,
                input.TimeElapsedInDays
                );

            return _mapper.Map<PastSurvivorResponseDto>( PastSurvivor);
        }

        protected override async Task< PastSurvivor> GetEntityByIdAsync(Guid id)
        {
            var  PastSurvivor = await _pastSurvivorManager.GetPastSurvivorByIdWithUserAsync(id);
            if ( PastSurvivor == null)
            {
                throw new UserFriendlyException("PastSurvivor not found");
            }
            return  PastSurvivor;
        }

        public async Task<PastSurvivorResponseDto> GetCurrentSurvivorAsync(long userId)
        {
            var PastSurvivor = await _pastSurvivorManager.GetPastSurvivorByUserIdAsync(userId);
            return _mapper.Map< PastSurvivor, PastSurvivorResponseDto>(PastSurvivor);
        }


    }

}
