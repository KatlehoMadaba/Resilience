using Abp.Domain.Entities.Auditing;
using System;

namespace Resilience.Domain.PoliceStations
{
    public  class PoliceStation:FullAuditedEntity<Guid>
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string PhoneNumber { get; set; }
        public string State { get; set; }
        public string PlaceId { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string GoogleMapsUrl { get; set; }
    }
}
