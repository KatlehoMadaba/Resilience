using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resilience.ExternalServices.GooglePlaces
{
    public class GooglePlacesResponse
    {
        public List<PlaceResult> results { get; set; }
    }

    public class PlaceResult
    {
        public string name { get; set; }
        public string formatted_address { get; set; }
        public string place_id { get; set; }
        public Geometry geometry { get; set; }
    }

    public class Geometry
    {
        public Location location { get; set; }
    }

    public class Location
    {
        public double lat { get; set; }
        public double lng { get; set; }
    }
}