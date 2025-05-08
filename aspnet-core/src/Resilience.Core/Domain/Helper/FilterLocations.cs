namespace Resilience.Domain.Helper
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public static class FacilityFilterHelper
    {
        public static List<T> FilterFacilities<T>(
            List<T> facilities,
            double userLat,
            double userLon,
            double radiusKm,
            Func<T, double> getLat,
            Func<T, double> getLon,
            Func<T, string?> getOperatingHours,
            Func<T, string> getPlaceId)
            where T : class
        {
            userLat = Math.Round(userLat, 2);
            userLon = Math.Round(userLon, 2);

            var filteredFacilities = facilities
                .Where(facility =>
                    GetDistanceInKmApprox(userLat, userLon, Math.Round(getLat(facility), 2), getLon(facility)) <= radiusKm &&
                    (getOperatingHours(facility)?.Contains("24 hours") ?? true)) // Include 24/7 filter if applicable
                .OrderBy(facility => GetDistanceInKmApprox(userLat, userLon, Math.Round(getLat(facility), 2), getLon(facility)))
                .GroupBy(getPlaceId)
                .Select(group => group.First()) // Remove duplicates
                .Take(10) // Limit to first 10
                .ToList();

            return filteredFacilities;
        }

        public static double GetDistanceInKmApprox(double lat1, double lon1, double lat2, double lon2)
        {
            const double kmPerDegreeLat = 111.32;
            double kmPerDegreeLon = 111.32 * Math.Cos(DegreesToRadians(lat1));

            double deltaLatKm = (lat2 - lat1) * kmPerDegreeLat;
            double deltaLonKm = (lon2 - lon1) * kmPerDegreeLon;

            return Math.Sqrt(deltaLatKm * deltaLatKm + deltaLonKm * deltaLonKm);
        }

        private static double DegreesToRadians(double deg)
        {
            return deg * (Math.PI / 180);
        }
    }
}
