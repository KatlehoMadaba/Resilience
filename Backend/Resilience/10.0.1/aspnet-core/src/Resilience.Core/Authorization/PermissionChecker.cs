using Abp.Authorization;
using Resilience.Authorization.Roles;
using Resilience.Authorization.Users;

namespace Resilience.Authorization;

public class PermissionChecker : PermissionChecker<Role, User>
{
    public PermissionChecker(UserManager userManager)
        : base(userManager)
    {
    }
}
