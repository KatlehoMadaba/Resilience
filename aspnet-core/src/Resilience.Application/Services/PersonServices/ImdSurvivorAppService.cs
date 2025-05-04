using System;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.UI;
using AutoMapper;
using Resilience.Domain.Persons;
using Resilience.Services.PersonServices.Dtos;


namespace Resilience.Services.PersonServices
{
    public class ImdSurvivorAppService : 
        AsyncCrudAppService<ImmediateSurvivor, ImdSurvivorResponseDto, Guid, PagedAndSortedResultRequestDto, ImdSurvivorRequestDto, ImdSurvivorResponseDto>

    {
        private readonly PersonFactory _personFactory;
        private readonly ImmediateSurvivorManager _immediateSurvivorManager;
        private readonly IMapper _mapper;
        public ImdSurvivorAppService(IRepository<ImmediateSurvivor, Guid> repository, ImmediateSurvivorManager immediateSurvivorManager, IMapper mapper, PersonFactory personFactory) : base(repository)
        {

            _personFactory = personFactory;
            _immediateSurvivorManager = immediateSurvivorManager;
            _mapper = mapper;
        }
        //public override async Task<ImdSurvivorResponseDto> CreateAsync(ImdSurvivorRequestDto input)
        //{
        //    try
        //    {
        //        var immediateSurvivor = await _personFactory.CreatePersonAsync
        //    (new CreatePersonInput
        //    {
        //        Name = input.Name,
        //        Surname = input.Surname,
        //        UserName = input.UserName,
        //        Password = input.Password,
        //        EmailAddress = input.EmailAddress,
        //        PhoneNumber = input.PhoneNumber,
        //        DisplayName = input.DisplayName,
        //        UseDisplayNameOnly = input.UseDisplayNameOnly,
        //        IsAnonymous = input.IsAnonymous,
        //        Sex = input.Sex,

        //        IsImdSurvivor = true,
        //        IncidentDate = input.IncidentDate,
        //        HasReceivedMedicalAttention = input.HasReceivedMedicalAttention,
        //        HasReportedToAuthorities = input.HasReportedToAuthorities
        //    });

        //        return _mapper.Map<ImdSurvivorResponseDto>(immediateSurvivor);
        //    }
        //    catch (Exception ex)
        //    {
        //        Logger.Error(ex.Message, ex);
        //        throw new UserFriendlyException("An error occurred: " + ex.Message); // temporary
        //    }

        //}
    }
}
