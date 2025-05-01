using Abp.Dependency;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;

namespace Resilience.EntityFrameworkCore.Seed
{
    public class ResilienceDbSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly MedicalFacilitySeeder _medicalFacilitySeeder;

        public async Task SeedAsync(DataSeedContext context)
        {
            await _medicalFacilitySeeder.SeedAsync();
        }
    }
}