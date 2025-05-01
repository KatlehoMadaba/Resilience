using System.Threading.Tasks;
using Abp.Application.Services;
using Resilience.EntityFrameworkCore.Seed;
namespace Resilience.Services.MedicalAAppServices
{
    public class DevSeederAppService : ApplicationService
    {
        private readonly MedicalFacilitySeeder _medicalseeder;
        private readonly PoliceStationSeeder _policeseeder;

        public DevSeederAppService(MedicalFacilitySeeder medicalseeder, PoliceStationSeeder policeseeder)
        {
            _medicalseeder = medicalseeder;
            _policeseeder = policeseeder;
        }

        public async Task TriggerSeed()
        {
            await _medicalseeder.SeedAsync();
            await _policeseeder.SeedAsync();
        }
    }
}
