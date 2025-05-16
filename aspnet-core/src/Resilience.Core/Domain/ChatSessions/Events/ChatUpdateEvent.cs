using Abp.Events.Bus.Entities;

namespace Resilience.Domain.ChatSessions.Events
{
    public class ChatUpdateEvent : EntityEventData<ChatMessage>   
    {
        public ChatUpdateEvent(ChatMessage chatMessage) : base(chatMessage)
        {

        }
    }
}
