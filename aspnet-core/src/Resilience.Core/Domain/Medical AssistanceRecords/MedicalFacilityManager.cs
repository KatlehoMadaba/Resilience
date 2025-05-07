using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Resilience.Domain.Medical_AssistanceRecords;

namespace Resilience.Domain.Medical_AssistanceRecords
{
    public class MedicalFacilityManager : DomainService
    {
        private readonly IRepository<MedicalFacility, Guid> _repository;

        public MedicalFacilityManager(IRepository<MedicalFacility, Guid> repository)
        {
            _repository = repository;
        }

        public async Task<List<MedicalFacility>> GetPagedDistinctMedicalFacilitiesAsync(int skipCount, int maxResultCount)
        {
            var queryable = await _repository.GetAllAsync();

            var distinctQuery = queryable
                .ToList()
                .DistinctBy(x => x.PlaceId)
                .OrderBy(x => x.Name)
                .Skip(skipCount)
                .Take(maxResultCount)
                .ToList();
            return distinctQuery;
        }
        public async Task<int> GetDistinctCountAsync()
        {
            var queryable = await _repository.GetAllAsync();

            var count = queryable
                .ToList()
                .DistinctBy(x => x.PlaceId)
                .Count();

            return count;
        }

        public async Task<List<MedicalFacility>> GetCurrentMedicalFacilityAsync(
            double longitude,
            double latitude,
            double radiusInKm)
        {
            var allFacilities = await _repository.GetAllListAsync();

            var nearbyFacilities = allFacilities
                .Where(facility => IsWithinRadiusApprox(
                    latitude,
                    longitude,
                    facility.Latitude,
                    facility.Longitude,
                    radiusInKm))
                .OrderBy(facility => GetDistanceInKmApprox(
                    latitude,
                    longitude,
                    facility.Latitude,
                    facility.Longitude))
                .ToList();

            return nearbyFacilities;
        }

        // Approximate check if facility is within radius using flat Earth (XY-plane) formula
        private bool IsWithinRadiusApprox(
            double userLat, double userLon,
            double facilityLat, double facilityLon,
            double radiusKm)
        {
            return GetDistanceInKmApprox(userLat, userLon, facilityLat, facilityLon) <= radiusKm;
        }

        // Approximate distance using basic Pythagorean theorem on a flat plane
        private double GetDistanceInKmApprox(
            double lat1, double lon1,
            double lat2, double lon2)
        {
            // Constants
            const double kmPerDegreeLat = 111.32; // 1 degree latitude ≈ 111.32 km
            double kmPerDegreeLon = 111.32 * Math.Cos(DegreesToRadians(lat1)); // varies by latitude

            // Differences
            double deltaLatKm = (lat2 - lat1) * kmPerDegreeLat;
            double deltaLonKm = (lon2 - lon1) * kmPerDegreeLon;

            // Pythagorean distance
            return Math.Sqrt(deltaLatKm * deltaLatKm + deltaLonKm * deltaLonKm);
        }

        private double DegreesToRadians(double deg)
        {
            return deg * (Math.PI / 180);
        }
    }
}
