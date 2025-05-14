"use client";

import { useEffect, useState } from "react";
import { Spin, Input, Typography, List, Avatar } from "antd";
import {
  useChatMessageActions,
  useChatMessageState,
} from "@/providers/chat-provider";
import { ISendMessage } from "@/providers/chat-provider/models";
import * as S from "./styles";

const { Text, Paragraph } = Typography;

interface ChatInterfaceProps {
  personId: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ personId }) => {
  const { getMessagesWithPerson, sendMessage } = useChatMessageActions();
  const { ChatMessages, isPending } = useChatMessageState();

  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    if (personId) {
      getMessagesWithPerson(personId);
    }
  }, [personId]);

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const message: ISendMessage = {
      receiverPersonId: personId,
      content: messageInput.trim(),
    };

    sendMessage(message);
    setMessageInput("");
  };

  return (
    <S.ChatContainer>
      <S.Title level={3}>Conversation</S.Title>

      {isPending ? (
        <Spin tip="Loading messages..." />
      ) : (
        <List
          dataSource={ChatMessages}
          renderItem={(msg) => {
            const isOwn = msg.senderPersonId !== personId;
            return (
              <S.MessageBubble key={msg.sentAt} $isOwn={isOwn}>
                <List.Item.Meta
                  avatar={<Avatar src="/images/user-avatar-placeholder.png" />}
                  title={
                    <Text type="secondary">
                      {new Date(msg.sentAt).toLocaleString()}
                    </Text>
                  }
                  description={<Paragraph>{msg.content}</Paragraph>}
                />
              </S.MessageBubble>
            );
          }}
        />
      )}

      <Input.TextArea
        rows={3}
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="Type your message here..."
      />
      <S.SendButton
        type="primary"
        onClick={handleSendMessage}
        disabled={!messageInput.trim()}
      >
        Send
      </S.SendButton>
    </S.ChatContainer>
  );
};

export default ChatInterface;
