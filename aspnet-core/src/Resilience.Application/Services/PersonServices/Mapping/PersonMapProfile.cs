using AutoMapper;
using Resilience.Domain.Persons;
using Resilience.Services.PersonServices.Dtos;

namespace Resilience.Services.PersonServices.Mapping
{
    public class PersonMapProfile : Profile
    {
     public PersonMapProfile()
        {
            CreateMap<ImmediateSurvivor,ImdSurvivorRequestDto>();
            CreateMap<ImdSurvivorRequestDto, ImmediateSurvivor>();
        }

    }
}
