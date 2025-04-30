using Abp.Localization;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Runtime.Security;
using Abp.Timing;
using Abp.Zero;
using Abp.Zero.Configuration;
using Resilience.Authorization.Roles;
using Resilience.Authorization.Users;
using Resilience.Configuration;
using Resilience.Localization;
using Resilience.MultiTenancy;
using Resilience.Timing;

namespace Resilience;

[DependsOn(typeof(AbpZeroCoreModule))]
public class ResilienceCoreModule : AbpModule
{
    public override void PreInitialize()
    {
        Configuration.Auditing.IsEnabledForAnonymousUsers = true;

        // Declare entity types
        Configuration.Modules.Zero().EntityTypes.Tenant = typeof(Tenant);
        Configuration.Modules.Zero().EntityTypes.Role = typeof(Role);
        Configuration.Modules.Zero().EntityTypes.User = typeof(User);

        ResilienceLocalizationConfigurer.Configure(Configuration.Localization);

        // Enable this line to create a multi-tenant application.
        Configuration.MultiTenancy.IsEnabled = ResilienceConsts.MultiTenancyEnabled;

        // Configure roles
        AppRoleConfig.Configure(Configuration.Modules.Zero().RoleManagement);

        Configuration.Settings.Providers.Add<AppSettingProvider>();

        Configuration.Localization.Languages.Add(new LanguageInfo("fa", "فارسی", "famfamfam-flags ir"));

        Configuration.Settings.SettingEncryptionConfiguration.DefaultPassPhrase = ResilienceConsts.DefaultPassPhrase;
        SimpleStringCipher.DefaultPassPhrase = ResilienceConsts.DefaultPassPhrase;
    }

    public override void Initialize()
    {
        IocManager.RegisterAssemblyByConvention(typeof(ResilienceCoreModule).GetAssembly());
    }

    public override void PostInitialize()
    {
        IocManager.Resolve<AppTimes>().StartupTime = Clock.Now;
    }
}
