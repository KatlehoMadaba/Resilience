using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;

namespace Resilience.Services.MedicalAAppServices.Dtos
{
    public class MedicalFacilityDto : EntityDto<Guid>
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string PlaceId { get; set; }
        public string PhoneNumber { get; set; }
        public string OperatingHours { get; set; }
        public string GoogleMapsUrl { get; set; }
    }

}
