using Abp.Dependency;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore.Uow;
using Abp.MultiTenancy;
using Resilience.EntityFrameworkCore.Seed.Host;
using Resilience.EntityFrameworkCore.Seed.Tenants;
using Microsoft.EntityFrameworkCore;
using System;
using System.Transactions;

namespace Resilience.EntityFrameworkCore.Seed;

public static class SeedHelper
{
    public static void SeedHostDb(IIocResolver iocResolver)
    {
        WithDbContext<ResilienceDbContext>(iocResolver, context =>
        {
            context.SuppressAutoSetTenantId = true;
            var medicalFacilitySeeder = iocResolver.Resolve<MedicalFacilitySeeder>();
            new InitialHostDbBuilder(context, medicalFacilitySeeder)
            .CreateAsync().GetAwaiter().GetResult();
            new DefaultTenantBuilder(context).Create();
            new TenantRoleAndUserBuilder(context, 1).Create();


            medicalFacilitySeeder.SeedAsync().GetAwaiter().GetResult();
        });
    }
    public static void SeedHostDb(ResilienceDbContext context, MedicalFacilitySeeder medicalFacilitySeeder)

    {
        context.SuppressAutoSetTenantId = true;

        new InitialHostDbBuilder(context, medicalFacilitySeeder)
            .CreateAsync().GetAwaiter().GetResult();


        new DefaultTenantBuilder(context).Create();
        new TenantRoleAndUserBuilder(context, 1).Create();
    }
    public static void SeedHostDb(ResilienceDbContext context)
    {
        // Get the IIocResolver
        var iocResolver = IocManager.Instance;

        // Resolve the MedicalFacilitySeeder
        var medicalFacilitySeeder = iocResolver.Resolve<MedicalFacilitySeeder>();

        // Call your existing method
        SeedHostDb(context, medicalFacilitySeeder);
    }

    private static void WithDbContext<TDbContext>(IIocResolver iocResolver, Action<TDbContext> contextAction)
        where TDbContext : DbContext
    {
        using (var uowManager = iocResolver.ResolveAsDisposable<IUnitOfWorkManager>())
        {
            using (var uow = uowManager.Object.Begin(TransactionScopeOption.Suppress))
            {
                var context = uowManager.Object.Current.GetDbContext<TDbContext>(MultiTenancySides.Host);

                contextAction(context);

                uow.Complete();
            }
        }
    }
}
