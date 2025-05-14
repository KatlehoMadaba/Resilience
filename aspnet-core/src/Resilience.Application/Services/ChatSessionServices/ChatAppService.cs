using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using Resilience.Domain.ChatSessions;
using Resilience.Domain.Persons;

namespace Resilience.Services.ChatSessionServices
{
    public class ChatAppService : ApplicationService
    {
        private readonly IRepository<ChatMessage, Guid> _chatRepository;
        private readonly IRepository<Person, Guid> _personRepository;

        public ChatAppService(
            IRepository<ChatMessage, Guid> chatRepository,
            IRepository<Person, Guid> personRepository)
        {
            _chatRepository = chatRepository;
            _personRepository = personRepository;
        }

        public async Task<string> SendMessageAsync(SendChatMessageInput input)
        {
            var senderUserId = AbpSession.UserId.Value;
            var sender = await _personRepository.FirstOrDefaultAsync(p => p.UserId == senderUserId);

            if (sender == null)
                throw new Abp.UI.UserFriendlyException("Sender not found.");

            var receiver = await _personRepository.FirstOrDefaultAsync(input.ReceiverPersonId);
            if (receiver == null)
                throw new Abp.UI.UserFriendlyException("Receiver not found.");

            var message = new ChatMessage
            {
                SenderPersonId = sender.Id,
                ReceiverPersonId = receiver.Id,
                Content = input.Content
            };

            await _chatRepository.InsertAsync(message);
            return "message was sent successfullly.";
            //return ObjectMapper.Map<ChatMessageDto>(message);
        }

        public async Task<List<ChatMessageDto>> GetMessagesWithPersonAsync(Guid personId)
        {
            var userId = AbpSession.UserId.Value;
            var currentPerson = await _personRepository.FirstOrDefaultAsync(p => p.UserId == userId);

            if (currentPerson == null)
                throw new Abp.UI.UserFriendlyException("Current person not found.");

            var messages = await _chatRepository
                .GetAll()
                .Where(m =>
                    (m.SenderPersonId == currentPerson.Id && m.ReceiverPersonId == personId) ||
                    (m.SenderPersonId == personId && m.ReceiverPersonId == currentPerson.Id))
                .OrderBy(m => m.SentAt)
                .ToListAsync();

            return ObjectMapper.Map<List<ChatMessageDto>>(messages);
        }


    }
}
