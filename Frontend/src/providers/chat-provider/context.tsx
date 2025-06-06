"use client";
import { createContext } from "react";
import { IChatMessage, ISendMessage } from "./models";

// Context shape interface
export interface IChatMessageStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  //ChatMessage?: IChatMessage;
  ChatMessages?: IChatMessage[];
  CountMessages?: number;
}

// ChatMessage action context interface
export interface IChatMessageActionContext {
  sendMessage: (sendMessage: ISendMessage) => void;
  getMessagesWithPerson: (personId: string) => void;
  countMessages: (personId: string) => void;
  addMessage: (message: IChatMessage) => void;
}

// Initial state with default values
export const INITIAL_STATE: IChatMessageStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  ChatMessages: [],
  CountMessages: 0,
};

// Create the state context and the action context
export const ChatMessageStateContext =
  createContext<IChatMessageStateContext>(INITIAL_STATE);
export const ChatMessageActionContext = createContext<
  IChatMessageActionContext | undefined
>(undefined);
