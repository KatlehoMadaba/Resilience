"use client";
import { handleActions } from "redux-actions";
import { ChatMessageActionEnums } from "./actions";
import { IChatMessageStateContext, INITIAL_STATE } from "./context";

// Define the reducer for handling ChatMessage actions
export const ChatMessageReducer = handleActions<
  IChatMessageStateContext,
  IChatMessageStateContext
>(
  {
    [ChatMessageActionEnums.sendMessagePending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ChatMessageActionEnums.sendMessageSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ChatMessageActionEnums.sendMessageError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ChatMessageActionEnums.getMessagesWithPersonPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ChatMessageActionEnums.getMessagesWithPersonSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ChatMessageActionEnums.getMessagesWithPersonError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
