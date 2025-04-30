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
    }
    public class GooglePlaceDetailsResponse
    {
        public GooglePlaceResult result { get; set; }
    }

    public class GooglePlaceResult
    {
        public string formatted_phone_number { get; set; }
        public OpeningHours opening_hours { get; set; }
    }

    public class OpeningHours
    {
        public List<string> weekday_text { get; set; }
    }

}
