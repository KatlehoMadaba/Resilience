using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resilience.Services.ChatSessionServices
{
    public class ChatMessageDto
    {
        public Guid Id { get; set; }
        public Guid SenderPersonId { get; set; }
        public Guid ReceiverPersonId { get; set; }
        public string Content { get; set; }
        public bool IsRead { get; set; }
        public DateTime SentAt { get; set; }
    }

    public class SendChatMessageInput
    {
        public Guid ReceiverPersonId { get; set; }
        public string Content { get; set; }
    }
}
