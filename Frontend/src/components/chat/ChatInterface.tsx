"use client";

import { useEffect, useState } from "react";
import { Input, List, Spin, Typography, Button } from "antd";
import {
  startConnection,
  onReceiveTaxiUpdate,
} from "../../../src/app/lib/signalr";
import { ISendMessage } from "@/providers/chat-provider/models";
import {
  useChatMessageActions,
  useChatMessageState,
} from "@/providers/chat-provider";
import * as S from "./styles";

const { Paragraph, Text } = Typography;

interface ChatInterfaceProps {
  personId: string;
  personName?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ personId }) => {
  const { getMessagesWithPerson, sendMessage } = useChatMessageActions();
  const { ChatMessages, isPending } = useChatMessageState();
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    if (personId) {
      getMessagesWithPerson(personId);
    }

    // Initialize SignalR connection
    const initSignalR = async () => {
      await startConnection();

      // Set up listener for incoming messages
      onReceiveTaxiUpdate((msg) => {
        // If the message is relevant to the currently open chat, add it
        if (msg.senderPersonId === personId) {
          getMessagesWithPerson(personId);
        }
      });
    };
    initSignalR();
  }, [personId]);
  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    const message: ISendMessage = {
      receiverPersonId: personId,
      content: messageInput.trim(),
    };

    sendMessage(message);
    getMessagesWithPerson(personId);
    setMessageInput("");
  };
  return (
    <S.ChatWrapper>
      <S.ChatContainer>
        <S.MessagesContainer>
          {isPending ? (
            <Spin />
          ) : ChatMessages.length === 0 ? (
            <Text>No messages yet. Start the conversation.</Text>
          ) : (
            <List
              dataSource={ChatMessages}
              renderItem={(msg) => {
                // This determines if the message is sent by the current user
                // If receiverPersonId is not the current personId, it's our own message
                const isOwn = msg.receiverPersonId !== personId;
                // Inverting the normal behavior - showing sent messages on left, received on right
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: isOwn ? "flex-start" : "flex-end",
                    }}
                  >
                    <S.MessageBubble $isOwn={!isOwn}>
                      <Paragraph>{msg.content}</Paragraph>
                      <Text type="secondary" style={{ fontSize: "0.8rem" }}>
                        {new Date(msg.sentAt).toLocaleString()}
                      </Text>
                    </S.MessageBubble>
                  </div>
                );
              }}
            />
          )}
        </S.MessagesContainer>
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <Input
            placeholder="Type a message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onPressEnter={handleSendMessage}
            style={{ flexGrow: 1, marginRight: "8px" }}
          />
          <Button type="primary" onClick={handleSendMessage}>
            Send
          </Button>
        </div>
      </S.ChatContainer>
    </S.ChatWrapper>
  );
};

export default ChatInterface;
