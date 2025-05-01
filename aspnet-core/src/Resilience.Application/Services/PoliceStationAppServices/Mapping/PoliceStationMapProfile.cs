using AutoMapper;
using Resilience.Domain.PoliceStations;
using Resilience.Services.PoliceStationAppServices.Dtos;

namespace Resilience.Services.PoliceStationAppServices.Mapping
{
    class PoliceStationMapProfile : Profile
    {
        public PoliceStationMapProfile()
        {
            CreateMap<PoliceStation, PoliceStationDto>();
        
            CreateMap<PoliceStationDto, PoliceStation>();
        }
    }
}
