"use client";
import { handleActions } from "redux-actions";
import { ChatMessageActionEnums } from "./actions";
import { IChatMessageStateContext, INITIAL_STATE } from "./context";
// Define the reducer for handling ChatMessage actions
export const ChatMessageReducer = handleActions<IChatMessageStateContext>(
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

    [ChatMessageActionEnums.addMessagePending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ChatMessageActionEnums.addMessageSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ChatMessageActionEnums.addMessageError]: (state, action) => ({
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
    [ChatMessageActionEnums.countMessagesPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ChatMessageActionEnums.countMessagesSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ChatMessageActionEnums.countMessagesError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
