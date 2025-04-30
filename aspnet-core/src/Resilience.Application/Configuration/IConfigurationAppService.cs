using Resilience.Configuration.Dto;
using System.Threading.Tasks;

namespace Resilience.Configuration;

public interface IConfigurationAppService
{
    Task ChangeUiTheme(ChangeUiThemeInput input);
}
