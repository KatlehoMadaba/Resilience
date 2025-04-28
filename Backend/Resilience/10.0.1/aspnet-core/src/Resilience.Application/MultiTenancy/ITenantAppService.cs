using Abp.Application.Services;
using Resilience.MultiTenancy.Dto;

namespace Resilience.MultiTenancy;

public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
{
}

