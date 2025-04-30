
using Abp.Dependency;
using Abp.Domain.Repositories;
using Newtonsoft.Json;
using Resilience.Domain.Medical_AssistanceRecords;
using Resilience.ExternalServices.GooglePlaces;
using Resilience.Services.MedicalAAppServices.Dtos;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Resilience.EntityFrameworkCore.Seed
{
    //public class MedicalFacilitySeeder : ITransientDependency
    //{
    //    private readonly IRepository<MedicalFacility, Guid> _medicalFacilityRepository;
    //    private readonly IHttpClientFactory _httpClientFactory;

    //    public MedicalFacilitySeeder(IRepository<MedicalFacility, Guid> medicalFacilityRepository, IHttpClientFactory httpClientFactory)
    //    {
    //        _medicalFacilityRepository = medicalFacilityRepository;
    //        _httpClientFactory = httpClientFactory;
    //    }

    //    public async Task SeedAsync()
    //    {
    //        string apiKey = "AIzaSyAMGW5ic5jY_AT4bPE3N915OtPZbkhSIc4";
    //        string url = $"https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospitals+in+Gauteng&key={apiKey}";

    //        var client = _httpClientFactory.CreateClient();
    //        var response = await client.GetAsync(url);
    //        var json = await response.Content.ReadAsStringAsync();
    //        var result = JsonConvert.DeserializeObject<GooglePlacesResponse>(json);

    //        foreach (var place in result.results)
    //        {
    //            var medicalFacility = new MedicalFacility
    //            {
    //                Id = Guid.NewGuid(),
    //                Name = place.name,
    //                Address = place.formatted_address,
    //                Latitude = place.geometry.location.lat,
    //                Longitude = place.geometry.location.lng,
    //                PlaceId = place.place_id
    //            };

    //            await _medicalFacilityRepository.InsertAsync(medicalFacility);
    //        }
    //    }
    //}

    public class MedicalFacilitySeeder : ITransientDependency
    {
        private readonly IRepository<MedicalFacility, Guid> _medicalFacilityRepository;
        private readonly IHttpClientFactory _httpClientFactory;

        public MedicalFacilitySeeder(IRepository<MedicalFacility, Guid> medicalFacilityRepository, IHttpClientFactory httpClientFactory)
        {
            _medicalFacilityRepository = medicalFacilityRepository;
            _httpClientFactory = httpClientFactory;
        }

        public async Task SeedAsync()
        {
            string apiKey = "AIzaSyAMGW5ic5jY_AT4bPE3N915OtPZbkhSIc4";
            string searchUrl = $"https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospitals+in+Gauteng&key={apiKey}";

            var client = _httpClientFactory.CreateClient();
            var response = await client.GetAsync(searchUrl);
            var json = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<GooglePlacesResponse>(json);

            foreach (var place in result.results)
            {
                string placeId = place.place_id;
                string mapsUrl = $"https://www.google.com/maps/place/?q=place_id:{placeId}";
                string detailsUrl = $"https://maps.googleapis.com/maps/api/place/details/json?place_id={placeId}&key={apiKey}";

                var detailsResponse = await client.GetAsync(detailsUrl);
                var detailsJson = await detailsResponse.Content.ReadAsStringAsync();
                var detailsResult = JsonConvert.DeserializeObject<GooglePlaceDetailsResponse>(detailsJson);

                var facility = new MedicalFacility
                {
                    Id = Guid.NewGuid(),
                    Name = place.name,
                    Address = place.formatted_address,
                    Latitude = place.geometry.location.lat,
                    Longitude = place.geometry.location.lng,
                    PlaceId = placeId,
                    GoogleMapsUrl = mapsUrl,
                    PhoneNumber = detailsResult.result?.formatted_phone_number,
                    OperatingHours = detailsResult.result?.opening_hours != null
                        ? string.Join("; ", detailsResult.result.opening_hours.weekday_text)
                        : null,

                    // These would be null/default unless you add logic or admin input
                    City = null,
                    State = null,
                    PostalCode = null,
                    Country = null,
                    HasRapeKit = true,
                    FacilityType = null,
                    Description = null,
                    AdditionalInfo = null,
                    SupportAllGenders = false
                };

                await _medicalFacilityRepository.InsertAsync(facility);
            }
        }
    }

}