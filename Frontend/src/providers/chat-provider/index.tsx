"use client";
import {
  INITIAL_STATE,
  ChatMessageActionContext,
  ChatMessageStateContext,
} from "./context";
import { useContext, useReducer } from "react";
import {
  sendMessagePending,
  sendMessageSuccess,
  sendMessageError,
  getMessagesWithPersonPending,
  getMessagesWithPersonSuccess,
  getMessagesWithPersonError,
} from "./actions";
import { getAxiosInstace } from "@/utils/axiosInstance";
import { IChatMessage } from "../../providers/chat-provider/models";
import { ChatMessageReducer } from "./reducer";

export const ChatMessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ChatMessageReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const sendMessage = async (ChatMessage: IChatMessage) => {
    dispatch(sendMessagePending());
    const endpoint = `/api/services/app/Chat/SendMessage`;
    await instance
      .post(endpoint, ChatMessage)
      .then((response) => {
        dispatch(sendMessageSuccess(response?.data));
      })
      .catch((error) => {
        console.error("Error fetching medical centres:", error);
        dispatch(sendMessageError());
      });
  };
  const getMessagesWithPerson = async (personId: string) => {
    dispatch(getMessagesWithPersonPending());
    const endpoint = `/api/services/app/Chat/GetMessagesWithPerson?personId=${"0196c3a1-c555-774e-8bb3-64aec2141681"}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getMessagesWithPersonSuccess(response?.data?.result));
      })
      .catch((error) => {
        console.error("Error fetching testimonies:", error);
        dispatch(getMessagesWithPersonError());
      });
  };
  return (
    <ChatMessageStateContext.Provider value={state}>
      <ChatMessageActionContext.Provider
        value={{ sendMessage, getMessagesWithPerson }}
      >
        {children}
      </ChatMessageActionContext.Provider>
    </ChatMessageStateContext.Provider>
  );
};

export const useChatMessageState = () => {
  const context = useContext(ChatMessageStateContext);
  if (!context) {
    throw new Error(
      "useChatMessageState must be used within a ChatMessageProvider"
    );
  }
  return context;
};

export const useChatMessageActions = () => {
  const context = useContext(ChatMessageActionContext);
  if (!context) {
    throw new Error(
      "useChatMessageActions must be used within a ChatMessageProvider"
    );
  }
  return context;
};
