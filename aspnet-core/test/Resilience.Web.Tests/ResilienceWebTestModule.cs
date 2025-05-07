using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Resilience.EntityFrameworkCore;
using Resilience.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace Resilience.Web.Tests;

[DependsOn(
    typeof(ResilienceWebMvcModule),
    typeof(AbpAspNetCoreTestBaseModule)
)]
public class ResilienceWebTestModule : AbpModule
{
    public ResilienceWebTestModule(ResilienceEntityFrameworkModule abpProjectNameEntityFrameworkModule)
    {
        abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
    }

    public override void PreInitialize()
    {
        Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
    }

    public override void Initialize()
    {
        IocManager.RegisterAssemblyByConvention(typeof(ResilienceWebTestModule).GetAssembly());
    }

    public override void PostInitialize()
    {
        IocManager.Resolve<ApplicationPartManager>()
            .AddApplicationPartsIfNotAddedBefore(typeof(ResilienceWebMvcModule).Assembly);
    }
}