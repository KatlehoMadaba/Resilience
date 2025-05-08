using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Resilience.Domain.Helper;
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

            return FacilityFilterHelper.FilterFacilities(
                allFacilities,
                latitude,
                longitude,
                radiusInKm,
                facility => facility.Latitude,
                facility => facility.Longitude,
                facility => facility.OperatingHours,
                facility => facility.PlaceId
            );
        }
    }

    }
