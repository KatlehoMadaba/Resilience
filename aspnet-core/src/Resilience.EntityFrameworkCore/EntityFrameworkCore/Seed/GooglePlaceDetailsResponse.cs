using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resilience.EntityFrameworkCore.Seed
{
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
