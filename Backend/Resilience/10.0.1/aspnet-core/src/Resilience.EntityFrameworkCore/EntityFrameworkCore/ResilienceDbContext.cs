using Abp.Zero.EntityFrameworkCore;
using Resilience.Authorization.Roles;
using Resilience.Authorization.Users;
using Resilience.MultiTenancy;
using Microsoft.EntityFrameworkCore;

namespace Resilience.EntityFrameworkCore;

public class ResilienceDbContext : AbpZeroDbContext<Tenant, Role, User, ResilienceDbContext>
{
    /* Define a DbSet for each entity of the application */

    public ResilienceDbContext(DbContextOptions<ResilienceDbContext> options)
        : base(options)
    {
    }
}
