using Abp.Modules;
using Abp.Reflection.Extensions;
using Resilience.Configuration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace Resilience.Web.Host.Startup
{
    [DependsOn(
       typeof(ResilienceWebCoreModule))]
    public class ResilienceWebHostModule : AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public ResilienceWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(ResilienceWebHostModule).GetAssembly());
        }
    }
}
