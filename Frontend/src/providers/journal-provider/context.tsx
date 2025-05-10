"use client";
import { createContext } from "react";
import { IJournalEntry } from "./models";

// Context shape interface
export interface IJournalEntryStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  JournalEntry?: IJournalEntry;
}

// JournalEntry action context interface
export interface IJournalEntryActionContext {
  createJournalEntry: (JournalEntry: IJournalEntry) => void;
}

// Initial state with default values
export const INITIAL_STATE: IJournalEntryStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

// Create the state context and the action context
export const JournalEntryStateContext =
  createContext<IJournalEntryStateContext>(INITIAL_STATE);
export const JournalEntryActionContext = createContext<
  IJournalEntryActionContext | undefined
>(undefined);
