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
        private readonly PersonFactory _personFactory;
        private readonly GeneralSupporterManager _GeneralSupporterManager;
        private readonly IMapper _mapper;
        public GeneralSupporterAppService(IRepository<GeneralSupporter, Guid> repository, GeneralSupporterManager GeneralSupporterManager, IMapper mapper, PersonFactory personFactory) : base(repository)
        {

            _GeneralSupporterManager = GeneralSupporterManager;
            _mapper = mapper;
            _personFactory = personFactory;
        }
        public override async Task<GeneralSupporterResponseDto> CreateAsync(GeneralSupporterRequestDto input)
        {
           
            var GeneralSupporter = await _personFactory.CreatePersonAsync(
                new CreatePersonInput
                {
                    Name = input.Name,
                    Surname = input.Surname,
                    UserName = input.UserName,
                    Password = input.Password,
                    EmailAddress = input.EmailAddress,
                    PhoneNumber = input.PhoneNumber,
                    DisplayName = input.DisplayName,
                    UseDisplayNameOnly = input.UseDisplayNameOnly,
                    IsAnonymous = input.IsAnonymous,
                    Sex = input.Sex

                });

            return _mapper.Map<GeneralSupporterResponseDto>(GeneralSupporter);
        }
    }
}
