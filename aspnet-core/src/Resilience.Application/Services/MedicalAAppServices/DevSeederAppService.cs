using System.Threading.Tasks;
using Abp.Application.Services;

namespace Resilience.Services.MedicalAAppServices
{
    public class DevSeederAppService : ApplicationService
    {
        private readonly MedicalFacilitySeeder _seeder;

        public DevSeederAppService(MedicalFacilitySeeder seeder)
        {
            _seeder = seeder;
        }

        public async Task TriggerSeed()
        {
            await _seeder.SeedAsync();
        }
    }
}
