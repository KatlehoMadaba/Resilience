using System.Diagnostics;
using System.Threading.Tasks;
using Abp.Dependency;
using Abp.Events.Bus.Handlers;
using Abp.ObjectMapping;
using Microsoft.AspNetCore.SignalR;
using Resilience.Domain.ChatSessions.Events;
using Resilience.Hubs;
using Resilience.Services.ChatSessionServices;

namespace Resilience.EventHandler
{
    public class ChatMesssagesEventHandler : IAsyncEventHandler<ChatUpdateEvent>, ITransientDependency
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
