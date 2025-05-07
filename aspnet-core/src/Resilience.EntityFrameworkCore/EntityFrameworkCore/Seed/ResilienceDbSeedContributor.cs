using Abp.Dependency;
using System.Threading.Tasks;
using Volo.Abp.Data;

namespace Resilience.EntityFrameworkCore.Seed
{
    public class ResilienceDbSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly MedicalFacilitySeeder _medicalFacilitySeeder;
        private readonly PoliceStationSeeder _policestationSeeder;

        public async Task SeedAsync(DataSeedContext context)
        {
            await _medicalFacilitySeeder.SeedAsync();
            await _policestationSeeder.SeedAsync();
        }
    }
}