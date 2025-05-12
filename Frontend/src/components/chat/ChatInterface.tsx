"use client";

import { useEffect, useRef, useState } from "react";
import { Input, Button, Spin, message } from 'antd';
import MessageBubble from "./MessageBubble";
import styles from "./ChatInterface.module.css";
import { ChatMessage } from "./ChatMessage";
import { IPersonId } from "@/providers/users-providers/models";
import {
  useChatMessageActions,
  useChatMessageState,
} from "@/providers/chat-provider";
import { IChatMessage } from "@/providers/chat-provider/models";
import { useUserState } from "@/providers/users-providers";
const ChatInterface =()=> {
  //const { } = useUserState();

  const { getMessagesWithPerson, sendMessage } = useChatMessageActions();
  const { personId } = useUserState();
  const { ChatMessages, ChatMessage } = useChatMessageState();
  
  useEffect(() => {
    getMessagesWithPerson("0196c3d5-5509-795a-b25e-60f31bff6c20");
    try {
      console.log("the messages", ChatMessages);
    } catch (error) {
      console.log("this is the error", error);
    } finally {
    }
  }, [ChatMessages]);
    
    const handleSendMessage = () => {
      const message: IChatMessage = {
        senderPersonId: "0196bde8-8ec9-79ef-8a19-8ba867d5e0d8",
        receiverPersonId: "0196c3d5-5509-795a-b25e-60f31bff6c20",
        content: "I am feeling Good today",
      };
      sendMessage(message);

      console.log("the message sent", message);
    };
    return (
      <div>
      <Button onClick={handleSendMessage}>send Message</Button>
    </div>
    )
   
};
export default ChatInterface;










