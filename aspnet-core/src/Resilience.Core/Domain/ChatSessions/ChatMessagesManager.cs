﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using Abp.Domain.Services;
using Abp.Events.Bus;
using Resilience.Domain.ChatSessions.Events;

namespace Resilience.Domain.ChatSessions
{
    public class ChatMessagesManager : DomainService
    {
        private readonly IRepository<ChatMessage, Guid> _chatMessagesRepository;
        public IEventBus EventBus { get; set; }

        public ChatMessagesManager(IRepository<ChatMessage, Guid> chatMessagesRepository)
        {
            _chatMessagesRepository = chatMessagesRepository;
            EventBus = NullEventBus.Instance;
        }

        public async Task<ChatMessage> SendMessageAsync(Guid senderId, Guid receiverId, string content)
        {
            var message = new ChatMessage
            {
                SenderPersonId = senderId,
                ReceiverPersonId = receiverId,
                Content = content
            };

            await _chatMessagesRepository.InsertAsync(message);
            //declaring the event
            var messageEvent = new ChatUpdateEvent(message);
            //trigger event
            await EventBus.TriggerAsync(messageEvent);
            return message;
        }

        public async Task<List<ChatMessage>> GetMessagesWithPersonAsync(Guid senderId, Guid receiverId)
        {
            var allMessages = await _chatMessagesRepository.GetAllListAsync();
            return allMessages
                .Where(m =>
                    (m.SenderPersonId == senderId && m.ReceiverPersonId == receiverId) ||
                    (m.SenderPersonId == receiverId && m.ReceiverPersonId == senderId))
                .OrderBy(m => m.SentAt)
                .ToList();
        }

        public async Task<int> CountMessagesWithPersonAsync(Guid senderId, Guid receiverId)
        {
            var allMessages = await _chatMessagesRepository.GetAllListAsync();
            return allMessages
                .Count(m =>
                    (m.SenderPersonId == senderId && m.ReceiverPersonId == receiverId) ||
                    (m.SenderPersonId == receiverId && m.ReceiverPersonId == senderId));
        }

        public async Task<int> CountUniqueContactsAsync(Guid personId)
        {
            var allMessages = await _chatMessagesRepository.GetAllListAsync();
            var uniqueContacts = allMessages
                .Where(m => m.SenderPersonId == personId || m.ReceiverPersonId == personId)
                .Select(m => m.SenderPersonId == personId ? m.ReceiverPersonId : m.SenderPersonId)
                .Distinct()
                .Count();

            return uniqueContacts;
        }
    }
}
