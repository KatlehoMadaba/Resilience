using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resilience.Services.MedicalAAppServices.Dtos
{
   public class GetNearbyFacilitiesInputDto
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
