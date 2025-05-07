using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resilience.EntityFrameworkCore.Seed
{
    public class InitialHostDbBuilder
    {
        private readonly ResilienceDbContext _context;
        private readonly MedicalFacilitySeeder _medicalFacilitySeeder;

        public InitialHostDbBuilder(ResilienceDbContext context, MedicalFacilitySeeder medicalFacilitySeeder)
        {
            _context = context;
            _medicalFacilitySeeder = medicalFacilitySeeder;
        }
        public async Task CreateAsync()
        {
            await _medicalFacilitySeeder.SeedAsync();
        }
    }
}

