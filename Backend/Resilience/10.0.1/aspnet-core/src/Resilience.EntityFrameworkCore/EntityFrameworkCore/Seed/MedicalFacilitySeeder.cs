using Abp.Dependency;
using Abp.Domain.Repositories;
using Newtonsoft.Json;
using Resilience.Domain.Medical_AssistanceRecords;
using Resilience.ExternalServices.GooglePlaces;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Resilience.EntityFrameworkCore.Seed
{
    public class MedicalFacilitySeeder: ITransientDependency
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
            string url = $"https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospitals+in+Gauteng&key={apiKey}";

            var client = _httpClientFactory.CreateClient();
            var response = await client.GetAsync(url);
            var json = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<GooglePlacesResponse>(json);

            foreach (var place in result.results)
            {
                var medicalFacility = new MedicalFacility
                {
                    Id = Guid.NewGuid(),
                    Name = place.name,
                    Address = place.formatted_address,
                    Latitude = place.geometry.location.lat,
                    Longitude = place.geometry.location.lng,
                    PlaceId = place.place_id
                };

                await _medicalFacilityRepository.InsertAsync(medicalFacility);
            }
        }
    }
}
