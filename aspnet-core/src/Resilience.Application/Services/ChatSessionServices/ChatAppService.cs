using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using Resilience.Domain.ChatSessions;
using Resilience.Domain.Persons;

namespace Resilience.Services.ChatSessionServices
{
    public class ChatAppService : ApplicationService
    {
        private readonly ChatMessagesManager _chatMessagesManager;
        private readonly IRepository<Person, Guid> _personRepository;

        public ChatAppService(
            ChatMessagesManager chatMessagesManager,
            IRepository<Person, Guid> personRepository)
        {
            _chatMessagesManager = chatMessagesManager;
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

            await _chatMessagesManager.SendMessageAsync(sender.Id, receiver.Id, input.Content);
            return "Message was sent successfully.";
        }


        public async Task<List<ChatMessageDto>> GetMessagesWithPersonAsync(Guid personId)
        {
            var userId = AbpSession.UserId.Value;
            var currentPerson = await _personRepository.FirstOrDefaultAsync(p => p.UserId == userId);

            if (currentPerson == null)
                throw new Abp.UI.UserFriendlyException("Current person not found.");

            var messages = await _chatMessagesManager.GetMessagesWithPersonAsync(currentPerson.Id, personId);
            return ObjectMapper.Map<List<ChatMessageDto>>(messages);
        }

        public async Task<int> GetMessageCountAsync(Guid personId)
        {
            var userId = AbpSession.UserId.Value;
            var currentPerson = await _personRepository.FirstOrDefaultAsync(p => p.UserId == userId);

            if (currentPerson == null)
                throw new Abp.UI.UserFriendlyException("Current person not found.");

            return await _chatMessagesManager.CountMessagesWithPersonAsync(currentPerson.Id, personId);
        }
        public async Task<int> GetUniqueContactsCountAsync(Guid personId)
        {       
            var userId = AbpSession.UserId.Value;
            var currentPerson = await _personRepository.FirstOrDefaultAsync(p => p.UserId == userId);

            if (currentPerson == null)
                throw new Abp.UI.UserFriendlyException("Current person not found.");

            return await _chatMessagesManager.CountUniqueContactsAsync(currentPerson.Id);
        }


    }
}
