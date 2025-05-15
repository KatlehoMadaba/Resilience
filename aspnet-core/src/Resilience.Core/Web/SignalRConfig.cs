
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Resilience.Domain.ChatSessions;

namespace Resilience.Web
{
    public static class SignalRConfig
    {
        public static void ConfigureSignalR(this IServiceCollection services)
        {
            services.AddSignalR();
        }
        public static void UseSignalR(this IApplicationBuilder app)
        {
            app.UseEndpoints(endpoints =>
            {
               

                // Map other hubs if needed
                
            });
        }
    }
}
