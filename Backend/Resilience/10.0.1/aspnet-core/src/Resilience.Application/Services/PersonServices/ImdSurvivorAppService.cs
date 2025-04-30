using Abp.Application.Services.Dto;
using Abp.Application.Services;
using Resilience.Domain.Persons;
using System;
using Resilience.Services.PersonServices.Dtos;
using Abp.Domain.Repositories;
using AutoMapper;


namespace Resilience.Services.PersonServices
{
    public class ImdSurvivorAppService : 
        AsyncCrudAppService<ImmediateSurvivor, ImdSurvivorResponseDto, Guid, PagedAndSortedResultRequestDto, ImdSurvivorRequestDto, ImdSurvivorResponseDto>

    {
        private readonly ImmediateSurvivorManager _immediateSurvivorManager;
        private readonly IMapper _mapper;
        private readonly IRepository<ImmediateSurvivor, Guid> _repository;
        public ImdSurvivorAppService(IRepository<ImmediateSurvivor, Guid> repository, ImmediateSurvivorManager immediateSurvivorManager,IMapper mapper) : base(repository)
        {
            _immediateSurvivorManager = immediateSurvivorManager;
            _repository = repository;
            _mapper = mapper;
        }
    }
}
