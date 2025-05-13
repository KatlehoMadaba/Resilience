"use client";

import { useEffect, useRef, useState } from "react";
import { Input, Button, Spin, message } from 'antd';
import MessageBubble from "./MessageBubble";
import styles from "./ChatInterface.module.css";
import {ISendMessage} from "@/providers/chat-provider/models"
import { IPersonId, } from "@/providers/users-providers/models";
import {
  useChatMessageActions,
  useChatMessageState,
} from "@/providers/chat-provider";

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
      const message: ISendMessage = {
        receiverPersonId: "0196c3d5-5509-795a-b25e-60f31bff6c20",
        content: "I am feeling Good today 123",
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










