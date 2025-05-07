using AutoMapper;
using Resilience.Domain.CrowdfundingCampaigns;
using Resilience.Domain.Persons;
using Resilience.Domain.Petitions;
using Resilience.Domain.ProgressTrackers;
using Resilience.Domain.Reports;
using Resilience.Domain.Stories;
using Resilience.Domain.SupportResources;
using Resilience.Domain.SupportSessions;
using Resilience.Domain.Testimonies;
using Resilience.Services.CrowdfundingCampaignsServices.Dto;
using Resilience.Services.Helpers;
using Resilience.Services.PersonServices.Dtos;
using Resilience.Services.PetitionServices.Dtos;
using Resilience.Services.ProgressTrackerServices.Dtos;
using Resilience.Services.ReportsServices.Dtos;
using Resilience.Services.StoryServices.Dtos;
using Resilience.Services.SupportResourceServices.Dtos;
using Resilience.Services.SupportSessionServices.Dtos;
using Resilience.Services.TestimonyServices.Dtos;

namespace Resilience.Services.PersonServices.Mapping
{
    public class PersonMapProfile : Profile
    {
        public PersonMapProfile()
        {
            CreateMap<ImdSurvivorRequestDto, ImmediateSurvivor>();
            CreateMap<ImmediateSurvivor, ImdSurvivorResponseDto>()
            .ForMember(dest => dest.UserId,opt=> opt.MapFrom(src => src.UserId))
            .ForMember(dest => dest.Sex, opt => opt.MapFrom(src => src.Sex != null ? src.Sex.GetEnumDescription() : null))
            .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.User != null ? src.User.UserName : null))
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.User != null ? src.User.Name : null))
            .ForMember(dest => dest.EmailAddress, opt => opt.MapFrom(src => src.User != null ? src.User.EmailAddress : null))
            .ForMember(dest => dest.Surname, opt => opt.MapFrom(src => src.User != null ? src.User.Surname : null));

            CreateMap<PastSurvivorRequestDto, PastSurvivor>();
            CreateMap<PastSurvivor, Dtos.PastSurvivorResponseDto>()
            .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.UserId))
            .ForMember(dest => dest.Sex, opt => opt.MapFrom(src => src.Sex != null ? src.Sex.GetEnumDescription() : null))
            .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.User != null ? src.User.UserName : null))
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.User != null ? src.User.Name : null))
            .ForMember(dest => dest.EmailAddress, opt => opt.MapFrom(src => src.User != null ? src.User.EmailAddress : null))
            .ForMember(dest => dest.Surname, opt => opt.MapFrom(src => src.User != null ? src.User.Surname : null));

            CreateMap<SupportSession, SupportSessionDto>();
            CreateMap<Report, ReportDto>();
            CreateMap<Story, StoryDto>();
            CreateMap<Petition, PetitionDto>();
            CreateMap<CrowdfundingCampaign, CrowdfundingCampaignDto>();
            CreateMap<ProgressTracker, ProgressTrackerDto>();
            CreateMap<SupportResource, SupportResourceDto>();
            CreateMap<Testimony, TestimonyDto>();
        }



    }
}
