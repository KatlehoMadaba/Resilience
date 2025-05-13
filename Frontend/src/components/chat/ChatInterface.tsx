"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useChatMessageActions,
  useChatMessageState,
} from "@/providers/chat-provider";
import { IChatMessage, ISendMessage } from "@/providers/chat-provider/models";
import { Button, Input, Spin } from "antd";
import * as S from "./ChatInterface.styles";

interface ChatInterfaceProps {
  personId: string;
}

const ChatInterface = ({ personId }: ChatInterfaceProps) => {
  const { getMessagesWithPerson, sendMessage } = useChatMessageActions();
  const { ChatMessages, isPending } = useChatMessageState();
  const [messageContent, setMessageContent] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (personId) getMessagesWithPerson(personId);
  }, [personId]);

  useEffect(() => {
    scrollToBottom();
  }, [ChatMessages]);

  const handleSendMessage = () => {
    if (messageContent.trim()) {
      const payload: ISendMessage = {
        receiverPersonId: personId,
        content: messageContent.trim(),
      };
      sendMessage(payload);
      setMessageContent("");
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  return (
    <S.ChatContainer>
      <S.MessagesContainer>
        {isPending ? (
          <S.Spinner>
            <Spin />
          </S.Spinner>
        ) : (
          ChatMessages?.map((msg: IChatMessage) => (
            <S.MessageWrapper
              key={msg.id}
              align={msg.senderPersonId === userId ? "right" : "left"}
            >
              <S.MessageBubble isSender={msg.senderPersonId === userId}>
                {msg.content}
              </S.MessageBubble>
              <S.Timestamp>
                {new Date(msg.sentAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </S.Timestamp>
            </S.MessageWrapper>
          ))
        )}
        <div ref={messagesEndRef} />
      </S.MessagesContainer>

      <S.InputContainer>
        <Input.TextArea
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          onPressEnter={(e) => {
            if (!e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          placeholder="Type your message..."
          autoSize={{ minRows: 1, maxRows: 4 }}
        />
        <Button type="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </S.InputContainer>
    </S.ChatContainer>
  );
};

export default ChatInterface;
