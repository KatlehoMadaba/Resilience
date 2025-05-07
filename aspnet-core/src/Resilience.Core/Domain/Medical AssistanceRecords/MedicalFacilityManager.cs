using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.ObjectMapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

        
    }
}

