using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Resilience.Configuration;
using Resilience.EntityFrameworkCore;
using Resilience.Migrator.DependencyInjection;
using Castle.MicroKernel.Registration;
using Microsoft.Extensions.Configuration;

namespace Resilience.Migrator;

[DependsOn(typeof(ResilienceEntityFrameworkModule))]
public class ResilienceMigratorModule : AbpModule
{
    private readonly IConfigurationRoot _appConfiguration;

    public ResilienceMigratorModule(ResilienceEntityFrameworkModule abpProjectNameEntityFrameworkModule)
    {
        abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

        _appConfiguration = AppConfigurations.Get(
            typeof(ResilienceMigratorModule).GetAssembly().GetDirectoryPathOrNull()
        );
    }

    public override void PreInitialize()
    {
        Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
            ResilienceConsts.ConnectionStringName
        );

        Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
        Configuration.ReplaceService(
            typeof(IEventBus),
            () => IocManager.IocContainer.Register(
                Component.For<IEventBus>().Instance(NullEventBus.Instance)
            )
        );
    }

    public override void Initialize()
    {
        IocManager.RegisterAssemblyByConvention(typeof(ResilienceMigratorModule).GetAssembly());
        ServiceCollectionRegistrar.Register(IocManager);
    }
}
