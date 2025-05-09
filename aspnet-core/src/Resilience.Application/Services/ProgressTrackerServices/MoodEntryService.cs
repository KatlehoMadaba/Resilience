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
    public class MoodEntryService : AsyncCrudAppService<MoodEntry, MoodEntryDto, Guid, PagedAndSortedResultRequestDto, MoodEntryDto>
    {
        
        private readonly MoodEntryManager _moodEntryManager;
        private readonly IRepository<MoodEntry, Guid> _moodentryrespository;
        private readonly IMapper _mapper;

        public MoodEntryService(IRepository<MoodEntry, Guid> repository, MoodEntryManager moodEntryManager, IMapper mapper, IRepository<MoodEntry, Guid> moodentryrespository) : base(repository)
        {
            _moodEntryManager = moodEntryManager;
            _mapper = mapper;
            _moodentryrespository = moodentryrespository;
        }
    }
}


