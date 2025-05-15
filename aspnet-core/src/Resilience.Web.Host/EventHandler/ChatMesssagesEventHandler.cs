using System.Diagnostics;
using System.Threading.Tasks;
using Abp.Events.Bus.Handlers;
using Abp.ObjectMapping;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Resilience.Domain.ChatSessions.Events;
using Resilience.Services.ChatSessionServices;
using Resilience.Web.Host.Hubs;

namespace Resilience.Web.Host.EventHandler
{
    public class ChatMesssagesEventHandler : IAsyncEventHandler<ChatUpdateEvent>
    {
        private readonly IHubContext<ChatHub> _hubContext;
        private readonly IObjectMapper _objectMapper;

        public ChatMesssagesEventHandler(
            IHubContext<ChatHub> hubContext,
            IObjectMapper objectMapper)
        {
            _hubContext = hubContext;
            _objectMapper = objectMapper;

            Debug.WriteLine("ConstructedEvent");
        }
        public async Task HandleEventAsync(ChatUpdateEvent eventData)
        {
            Debug.WriteLine("Message EventHandler triggered");
            var chatDto = _objectMapper.Map<ChatMessageDto>(eventData.Entity);
            await _hubContext.Clients.All.SendAsync("ReceiveTaxiUpdate", chatDto);
        }

    }
}
