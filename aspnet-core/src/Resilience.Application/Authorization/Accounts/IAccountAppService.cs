using Abp.Application.Services;
using Resilience.Authorization.Accounts.Dto;
using System.Threading.Tasks;

namespace Resilience.Authorization.Accounts;

public interface IAccountAppService : IApplicationService
{
    Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

    Task<RegisterOutput> Register(RegisterInput input);
}
