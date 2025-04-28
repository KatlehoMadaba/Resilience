using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Resilience.Authorization;

namespace Resilience;

[DependsOn(
    typeof(ResilienceCoreModule),
    typeof(AbpAutoMapperModule))]
public class ResilienceApplicationModule : AbpModule
{
    public override void PreInitialize()
    {
        Configuration.Authorization.Providers.Add<ResilienceAuthorizationProvider>();
    }

    public override void Initialize()
    {
        var thisAssembly = typeof(ResilienceApplicationModule).GetAssembly();

        IocManager.RegisterAssemblyByConvention(thisAssembly);

        Configuration.Modules.AbpAutoMapper().Configurators.Add(
            // Scan the assembly for classes which inherit from AutoMapper.Profile
            cfg => cfg.AddMaps(thisAssembly)
        );
    }
}
