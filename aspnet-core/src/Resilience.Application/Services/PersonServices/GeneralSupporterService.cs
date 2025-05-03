using Abp.Application.Services.Dto;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using AutoMapper;
using Resilience.Domain.Persons;
using Resilience.Services.PersonServices.Dtos;
using System.Threading.Tasks;
using System;

namespace Resilience.Services.PersonServices
{
    public class GeneralSupporterAppService :
    AsyncCrudAppService<GeneralSupporter, GeneralSupporterResponseDto, Guid, PagedAndSortedResultRequestDto, GeneralSupporterRequestDto, GeneralSupporterResponseDto>
    {
        private readonly GeneralSupporterManager _GeneralSupporterManager;
        private readonly IMapper _mapper;
        public GeneralSupporterAppService(IRepository<GeneralSupporter, Guid> repository, GeneralSupporterManager GeneralSupporterManager, IMapper mapper) : base(repository)
        {
            _GeneralSupporterManager = GeneralSupporterManager;
            _mapper = mapper;
        }
        public override async Task<GeneralSupporterResponseDto> CreateAsync(GeneralSupporterRequestDto input)
        {
            var GeneralSupporter = await _GeneralSupporterManager.CreateGeneralSupporterAsync(
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
                input.SupportMotivation,
                input.IsSubscribedToUpdates,
                input.AreasOfInterest
                );

            return _mapper.Map<GeneralSupporterResponseDto>(GeneralSupporter);
        }
    }
}
