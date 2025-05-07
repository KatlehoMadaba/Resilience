using Abp.Dependency;
using Abp.Domain.Repositories;
using Newtonsoft.Json;
using Resilience.Domain.Medical_AssistanceRecords;
using Resilience.Domain.PoliceStations;
using Resilience.ExternalServices.GooglePlaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Resilience.EntityFrameworkCore.Seed
{
    public class PoliceStationSeeder : ITransientDependency
    {
        private readonly IRepository<PoliceStation, Guid> _policeStationRepository;
        private readonly IHttpClientFactory _httpClientFactory;

        public PoliceStationSeeder(IRepository<PoliceStation, Guid> policeStationRepository, IHttpClientFactory httpClientFactory)
        {
            _policeStationRepository = policeStationRepository;
            _httpClientFactory = httpClientFactory;
        }

        public async Task SeedAsync()
        {
            string apiKey = "AIzaSyAMGW5ic5jY_AT4bPE3N915OtPZbkhSIc4";
            string query = "police stations in Gauteng";
            string searchUrl = $"https://maps.googleapis.com/maps/api/place/textsearch/json?query={Uri.EscapeDataString(query)}&key={apiKey}";

                var client = _httpClientFactory.CreateClient();
                var response = await client.GetAsync(searchUrl);
                var json = await response.Content.ReadAsStringAsync();
                var result = JsonConvert.DeserializeObject<GooglePlacesResponse>(json);
                if (result?.results == null) return;
                foreach (var place in result.results)
                {
                    // Check for duplicates by PlaceId
                    var exists = await _policeStationRepository.FirstOrDefaultAsync(x => x.PlaceId == place.place_id);
                    if (exists != null)
                        continue;
                    string placeId = place.place_id;
                    string mapsUrl = $"https://www.google.com/maps/place/?q=place_id:{placeId}";
                    string detailsUrl = $"https://maps.googleapis.com/maps/api/place/details/json?place_id={placeId}&key={apiKey}";

                    var detailsResponse = await client.GetAsync(detailsUrl);
                    var detailsJson = await detailsResponse.Content.ReadAsStringAsync();
                    var detailsResult = JsonConvert.DeserializeObject<GooglePlaceDetailsResponse>(detailsJson);

                    var policeStation = new PoliceStation
                    {
                        Id = Guid.NewGuid(),
                        Name = place.name,
                        Address = place.formatted_address,
                        Latitude = place.geometry.location.lat,
                        Longitude = place.geometry.location.lng,
                        PlaceId = placeId,
                        GoogleMapsUrl = mapsUrl,
                        PhoneNumber = detailsResult.result?.formatted_phone_number,
                        City = null,
                        State = null,

                    };

                    await _policeStationRepository.InsertAsync(policeStation);
                }
            }


        }
    }

