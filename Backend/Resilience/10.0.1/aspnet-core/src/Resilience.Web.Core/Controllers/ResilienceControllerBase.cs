using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace Resilience.Controllers
{
    public abstract class ResilienceControllerBase : AbpController
    {
        protected ResilienceControllerBase()
        {
            LocalizationSourceName = ResilienceConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
