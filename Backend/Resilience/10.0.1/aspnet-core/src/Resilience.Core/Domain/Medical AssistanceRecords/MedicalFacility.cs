using System;
using Abp.Domain.Entities.Auditing;

namespace Resilience.Domain.Medical_AssistanceRecords
{
    public class MedicalFacility : FullAuditedEntity<Guid>
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string PhoneNumber { get; set; }
        public bool HasRapeKit { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string FacilityType { get; set; }
        public string Description { get; set; }
        public string PlaceId { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string GoogleMapsUrl { get; set; }
        public string AdditionalInfo { get; set; }
        public string OperatingHours { get; set; }
        public bool SupportAllGenders { get; set; }

    }
}
