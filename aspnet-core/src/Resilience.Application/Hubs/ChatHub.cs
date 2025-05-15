using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Resilience.Hubs
{
    public class ChatHub : Hub
    {

        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            return base.OnDisconnectedAsync(exception);
        }
        //Called by server to notify client of updated in the chat list 
        public async Task SendListOfMessagesUpdate(List<object> messages)
        {
            await Clients.All.SendAsync("ReceieveChatListUpdate", messages);
        }
        public async Task SendMessageAsync( object message)
        {
            await Clients.All.SendAsync("RecieveMessageUpdate", message);
        }
    }
}
