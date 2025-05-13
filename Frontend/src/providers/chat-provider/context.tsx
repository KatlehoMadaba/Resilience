"use client";
import { createContext } from "react";
import { IChatMessage } from "./models";
import { ISendMessage } from "@/components/chat/ChatMessage";

// Context shape interface
export interface IChatMessageStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  ChatMessage?: IChatMessage;
  ChatMessages?: IChatMessage[];
}

// ChatMessage action context interface
export interface IChatMessageActionContext {
  sendMessage: (sendMessage: ISendMessage) => void;
  getMessagesWithPerson: (personId: string) => void;
}

// Initial state with default values
export const INITIAL_STATE: IChatMessageStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  ChatMessages: [],
};

// Create the state context and the action context
export const ChatMessageStateContext =
  createContext<IChatMessageStateContext>(INITIAL_STATE);
export const ChatMessageActionContext = createContext<
  IChatMessageActionContext | undefined
>(undefined);
