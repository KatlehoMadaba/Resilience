using Abp.Dependency;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Data;

namespace Resilience.EntityFrameworkCore.Seed
{
    public class ResilienceDbSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly MedicalFacilitySeeder _medicalFacilitySeeder;
        private readonly PoliceStationSeeder _policestationSeeder;

        public ResilienceDbSeedContributor(
        MedicalFacilitySeeder medicalFacilitySeeder,
        PoliceStationSeeder policeStationSeeder)
        {
            _medicalFacilitySeeder = medicalFacilitySeeder;
            _policestationSeeder = policeStationSeeder;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await _medicalFacilitySeeder.SeedAsync();
            await _policestationSeeder.SeedAsync();
        }
    }
}