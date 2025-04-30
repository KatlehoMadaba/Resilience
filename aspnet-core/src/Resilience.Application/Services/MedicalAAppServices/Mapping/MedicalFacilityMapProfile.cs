using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Resilience.Domain.Medical_AssistanceRecords;
using Resilience.Services.MedicalAAppServices.Dtos;

namespace Resilience.Services.MedicalAAppServices.Mapping
{
    class MedicalFacilityMapProfile:Profile
    {
        public MedicalFacilityMapProfile()
        {
            CreateMap<MedicalFacility, MedicalFacilityDto>();
            // Optionally, map reverse if needed:
            CreateMap<MedicalFacilityDto, MedicalFacility>();
        }
    }
}
