"use client";

import { useEffect } from "react";
import { Button, Spin } from "antd";
import { ISendMessage } from "@/providers/chat-provider/models";
import { useUserActions } from "@/providers/users-providers";

import {
  useChatMessageActions,
  useChatMessageState,
} from "@/providers/chat-provider";

import { useUserState } from "@/providers/users-providers";

const ChatInterface = () => {
  const { getMessagesWithPerson, sendMessage } = useChatMessageActions();
  const { personId } = useUserState();
  const { ChatMessages, isPending } = useChatMessageState();
  const { getCurrentPersonId } = useUserActions();

  useEffect(() => {
    const fetchData = async () => {
      try {
        getCurrentPersonId();
      } catch (error) {
        console.error("Error fetching person ID:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (personId) {
      getMessagesWithPerson(personId);
    }
  }, [personId]);

  const handleSendMessage = () => {
    try {
      const message: ISendMessage = {
        receiverPersonId: personId,
        content: "I am feeling Good today 123",
      };
      sendMessage(message);
    } catch (error) {
      console.error("messages error", error);
    }
  };

  return (
    <div>
      {isPending && <Spin tip="loading messages" />}
      {ChatMessages && ChatMessages.length > 0 ? (
        ChatMessages.map((messages, index) => (
          <div key={index}>
            <p>{messages.content}</p>
            <p>{messages.sentAt}</p>
          </div>
        ))
      ) : (
        <p>No messages yet</p>
      )}
      <div>
        <Button onClick={handleSendMessage}>send Message</Button>
      </div>
    </div>
  );
};

export default ChatInterface;
