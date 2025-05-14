"use client";
import { createContext } from "react";
import { IJournalEntry } from "./models";
export interface IJournalEntryStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  JournalEntry?: IJournalEntry;
  journalEntries?: IJournalEntry[];
}
export interface IJournalEntryActionContext {
  createJournalEntry: (JournalEntry: IJournalEntry) => void;
  getJournalEntriesByPersonId: (personId: string) => void;
}
export const INITIAL_STATE: IJournalEntryStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  journalEntries: [],
};

export const JournalEntryStateContext =
  createContext<IJournalEntryStateContext>(INITIAL_STATE);
export const JournalEntryActionContext = createContext<
  IJournalEntryActionContext | undefined
>(undefined);
