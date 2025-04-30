using System.Threading.Tasks;
using Abp.Application.Services;
using Resilience.EntityFrameworkCore.Seed;
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
