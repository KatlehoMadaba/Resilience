using AutoMapper;
using Resilience.Domain.ChatSessions;

namespace Resilience.Services.ChatSessionServices.MappingChatProfile
{
   public class ChatMappingProfile:Profile
    {
        public ChatMappingProfile()
        {
             CreateMap<ChatMessage, ChatMessageDto>();
        }

    }
}
