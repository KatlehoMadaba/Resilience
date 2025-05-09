using AutoMapper;
using Resilience.Domain.ProgressTrackers;
using Resilience.Services.Helpers;
using Resilience.Services.ProgressTrackerServices.Dtos;

namespace Resilience.Services.ProgressTrackerServices.Mapping
{
    public class MoodEntryMapProfile:Profile
    {
        public  MoodEntryMapProfile()
        {
            CreateMap<MoodEntry, MoodEntryDto>();
            CreateMap<MoodEntryDto, MoodEntry>()
            .ForMember(dest => dest.MoodType, opt => opt.MapFrom(src => src.MoodType != null ? src.MoodType.GetEnumDescription():null));
        }

       
    }
}
