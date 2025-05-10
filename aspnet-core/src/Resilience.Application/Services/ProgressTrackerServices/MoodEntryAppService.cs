using System;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using AutoMapper;
using Resilience.Domain.ProgressTrackers;
using Resilience.Services.ProgressTrackerServices.Dtos;

namespace Resilience.Services.ProgressTrackerServices
{
    public class MoodEntryAppService : AsyncCrudAppService<MoodEntry, MoodEntryDto, Guid, PagedAndSortedResultRequestDto, MoodEntryDto>
    {
        
        private readonly MoodEntryManager _moodEntryManager;
        private readonly IMapper _mapper;

        public MoodEntryAppService(IRepository<MoodEntry, Guid> repository, MoodEntryManager moodEntryManager, IMapper mapper) : base(repository)
        {
            _moodEntryManager = moodEntryManager;
            _mapper = mapper;

        }
        public  override async  Task<MoodEntryDto> CreateAsync(MoodEntryDto input)
        {
            var moodEntry = await _moodEntryManager.CreateMoodEntryAsync
                (
                    input.PersonId,
                    input.Rating,
                    input.MoodType,
                    input.Notes,
                    input.EntryDate
                );

            return _mapper.Map<MoodEntryDto>(moodEntry);
        }


    }
}


