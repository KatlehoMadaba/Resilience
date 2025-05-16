using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.UI;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Resilience.Domain.Persons;
using Resilience.Services.PersonServices.Dtos;

namespace Resilience.Services.PersonServices
{
    public class ProfessionalAppService :
      AsyncCrudAppService<Professional, ProfessionalResponseDto, Guid, PagedAndSortedResultRequestDto, ProfessionalRequestDto, ProfessionalResponseDto>

    {
        private readonly ProfessionalManager _ProfessionalManager;
        private readonly IRepository<Professional, Guid> _Imdrepository;
        private readonly IMapper _mapper;
        public ProfessionalAppService(IRepository<Professional, Guid> repository, ProfessionalManager ProfessionalManager, IMapper mapper, IRepository<Professional, Guid> imdrepository) : base(repository)
        {
            _ProfessionalManager = ProfessionalManager;
            _mapper = mapper;
            _Imdrepository = imdrepository;
        }
        public override async Task<ProfessionalResponseDto> CreateAsync(ProfessionalRequestDto input)
        {
            var professional = await _ProfessionalManager.CreateProfessionalAsync(
                input.Name,
                input.Surname,
                input.EmailAddress,
                input.UserName,
                input.Password,
                input.Sex,
                input.PhoneNumber,
                input.Profession,
                input.Organization,
                input.Credentials,
                input.IsVerified,
                input.isActive
            );

            return _mapper.Map<ProfessionalResponseDto>(professional);
        }

        protected override async Task<Professional> GetEntityByIdAsync(Guid id)
        {
            var Professional = await _ProfessionalManager.GetProfessionalByIdWithUserAsync(id);
            if (Professional == null)
            {
                throw new UserFriendlyException("Professional not found");
            }
            return Professional;
        }

        public async Task<ProfessionalResponseDto> GetCurrentProfessionalAsync(long userId)
        {
            var Professional = await _ProfessionalManager.GetProfessionalByUserIdAsync(userId);
            return _mapper.Map<Professional, ProfessionalResponseDto>(Professional);
        }

        public override async Task<PagedResultDto<ProfessionalResponseDto>> GetAllAsync(PagedAndSortedResultRequestDto input)
        {
            var query = await _ProfessionalManager.GetAllProfessionalsWithUserAsync();
            var totalCount = await query.CountAsync();

            var professionals = await query
                                .Skip(input.SkipCount)
                                .Take(input.MaxResultCount)
                                .ToListAsync();

            return new PagedResultDto<ProfessionalResponseDto>(
                totalCount,
                _mapper.Map<List<ProfessionalResponseDto>>(professionals));
            
        }

    }
}
