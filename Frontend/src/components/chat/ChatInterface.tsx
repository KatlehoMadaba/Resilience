"use client";

import { useEffect, useState } from "react";
import { Avatar,Input, List, Spin, Typography } from "antd";
import { ISendMessage } from "@/providers/chat-provider/models";
import {
  useChatMessageActions,
  useChatMessageState,
} from "@/providers/chat-provider";
import * as S from "./styles";


const { Paragraph, Text} = Typography;

interface ChatInterfaceProps {
  personId: string;
  personName?: string;
}
const ChatInterface: React.FC<ChatInterfaceProps> = ({
  personId,
  personName,
}) => {
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

  const getInitial = () => {
    if (!personName) return "?";
    return personName.trim().charAt(0).toUpperCase();
  };

  return (
    <S.ChatWrapper>
      <S.ChatContainer>
        <S.Header>
          <Avatar size={40} style={{ backgroundColor: "#9E9AC8" }}>
            {getInitial()}
          </Avatar>
          <Text strong style={{ marginLeft: 10 }}>
            Chatting with {personName || "Unknown"}
          </Text>
        </S.Header>

        <S.MessagesContainer>
          {isPending ? (
            <Spin tip="Loading messages..." />
          ) : ChatMessages.length === 0 ? (
            <Text type="secondary">
              No messages yet. Start the conversation.
            </Text>
          ) : (
            <List
              dataSource={ChatMessages}
              renderItem={(msg) => {
                const isOwn = msg.receiverPersonId !== personId;
                return (
                  <S.MessageBubble key={msg.sentAt} $isOwn={isOwn}>
                    <Paragraph>{msg.content}</Paragraph>
                    <Text type="secondary" style={{ fontSize: 10 }}>
                      {new Date(msg.sentAt).toLocaleString()}
                    </Text>
                  </S.MessageBubble>
                );
              }}
            />
          )}
        </S.MessagesContainer>

        <Input.TextArea
          rows={2}
          placeholder="Type your message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <S.SendButton
          type="primary"
          onClick={handleSendMessage}
          disabled={!messageInput.trim()}
        >
          Send
        </S.SendButton>
      </S.ChatContainer>
    </S.ChatWrapper>
  );
};
export default ChatInterface;
