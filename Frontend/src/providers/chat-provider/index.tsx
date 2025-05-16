"use client";
import {
  INITIAL_STATE,
  ChatMessageActionContext,
  ChatMessageStateContext,
} from "./context";
import { useContext, useReducer } from "react";
import {
  // sendMessagePending,
  sendMessageSuccess,
  sendMessageError,
  getMessagesWithPersonSuccess,
  getMessagesWithPersonError,
} from "./actions";
import { getAxiosInstance } from "@/utils/axiosInstance";
import { ChatMessageReducer } from "./reducer";
import { ISendMessage } from "./models";


export const ChatMessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ChatMessageReducer, INITIAL_STATE);
  const instance = getAxiosInstance();

  const sendMessage = async (sendMessage: ISendMessage) => {
    // dispatch(sendMessagePending());
    const endpoint = `/api/services/app/Chat/SendMessage`;
    await instance
      .post(endpoint, sendMessage)
      .then((response) => {
        dispatch(sendMessageSuccess(response?.data?.result));
      })
      .catch((error) => {
        console.error("Error sending messages for sending:", error);
        dispatch(sendMessageError());
      });
  };

  // const addMessage = async (message: IChatMessage) => {

  //   dispatch(addMessageSuccess(message));
  // };

  const getMessagesWithPerson = async (personId: string) => {
    const endpoint = `/api/services/app/Chat/GetMessagesWithPerson?personId=${personId}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getMessagesWithPersonSuccess(response?.data?.result));
      })
      .catch((error) => {
        console.error("Error fetching messages for getting chats:", error);
        dispatch(getMessagesWithPersonError());
      });
  };
  const countMessages = async (personId: string) => {
    //dispatch(getMessagesWithPersonPending());
    const endpoint = `/api/services/app/Chat/GetMessageCount?personId=${personId}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getMessagesWithPersonSuccess(response?.data?.result));
        console.log("here is the count success:", response?.data?.result);
      })
      .catch((error) => {
        console.error("Error fetching messages for getting chats:", error);
        console.log("here is the count success:");
        dispatch(getMessagesWithPersonError());
      });
  };

  return (
    <ChatMessageStateContext.Provider value={state}>
      <ChatMessageActionContext.Provider
        value={{ sendMessage, getMessagesWithPerson, countMessages, addMessage }}
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
