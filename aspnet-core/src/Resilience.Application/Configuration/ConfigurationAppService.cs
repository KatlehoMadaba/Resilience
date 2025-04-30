using Abp.Authorization;
using Abp.Runtime.Session;
using Resilience.Configuration.Dto;
using System.Threading.Tasks;

namespace Resilience.Configuration;

[AbpAuthorize]
public class ConfigurationAppService : ResilienceAppServiceBase, IConfigurationAppService
{
    public async Task ChangeUiTheme(ChangeUiThemeInput input)
    {
        await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
    }
}
