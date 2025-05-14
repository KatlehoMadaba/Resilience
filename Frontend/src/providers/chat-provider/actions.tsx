"use client";
import { createAction } from "redux-actions";
import { IChatMessageStateContext } from "./context";
import { ISendMessage, IChatMessage } from "./models";

// Enum defining the actions for creating a ChatMessage
export enum ChatMessageActionEnums {
  sendMessagePending = "CREATE_ChatMessage_PENDING",
  sendMessageSuccess = "CREATE_ChatMessage_SUCCESS",
  sendMessageError = "CREATE_ChatMessage_ERROR",
  getMessagesWithPersonPending = "GET_ChatMessages_PENDING",
  getMessagesWithPersonSuccess = "GET_ChatMessages_SUCCESS",
  getMessagesWithPersonError = "GET_ChatMessages_ERROR",
}

// CREATE ChatMessage ACTIONS
export const sendMessagePending = createAction<IChatMessageStateContext>(
  ChatMessageActionEnums.sendMessagePending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const sendMessageSuccess = createAction<
  IChatMessageStateContext,
  ISendMessage
>(ChatMessageActionEnums.sendMessageSuccess, (sendMessage: ISendMessage) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  sendMessage,
}));

export const sendMessageError = createAction<IChatMessageStateContext>(
  ChatMessageActionEnums.sendMessageError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
export const getMessagesWithPersonPending =
  createAction<IChatMessageStateContext>(
    ChatMessageActionEnums.sendMessagePending,
    () => ({ isPending: true, isSuccess: false, isError: false })
  );

export const getMessagesWithPersonSuccess = createAction<
  IChatMessageStateContext,
  IChatMessage[]
>(
  ChatMessageActionEnums.getMessagesWithPersonSuccess,
  (ChatMessages: IChatMessage[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    ChatMessages,
  })
);

export const getMessagesWithPersonError =
  createAction<IChatMessageStateContext>(
    ChatMessageActionEnums.sendMessageError,
    () => ({ isPending: false, isSuccess: false, isError: true })
  );
