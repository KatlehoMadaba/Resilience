using Abp.Application.Services;
using Resilience.Sessions.Dto;
using System.Threading.Tasks;

namespace Resilience.Sessions;

public interface ISessionAppService : IApplicationService
{
    Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
}
