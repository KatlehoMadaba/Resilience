"use client";
import { createAction } from "redux-actions";
import { IJournalEntryStateContext } from "./context";
import { IJournalEntry } from "./models";

// Enum defining the actions for creating a JournalEntry
export enum JournalEntryActionEnums {
  createJournalEntryPending = "CREATE_JournalEntry_PENDING",
  createJournalEntrySuccess = "CREATE_JournalEntry_SUCCESS",
  createJournalEntryError = "CREATE_JournalEntry_ERROR",
  getJournalEntriesPending = "GET_JournalEntries_PENDING",
  getJournalEntriesSuccess = "GET_JournalEntries_SUCCESS",
  getJournalEntriesError = "GET_JournalEntries_ERROR",
}

// CREATE JournalEntry ACTIONS
export const createJournalEntryPending =
  createAction<IJournalEntryStateContext>(
    JournalEntryActionEnums.createJournalEntryPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
  );

export const createJournalEntrySuccess = createAction<
  IJournalEntryStateContext,
  IJournalEntry
>(
  JournalEntryActionEnums.createJournalEntrySuccess,
  (JournalEntry: IJournalEntry) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    JournalEntry,
  })
);

export const createJournalEntryError = createAction<IJournalEntryStateContext>(
  JournalEntryActionEnums.createJournalEntryError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
//Get Journal Entries

export const getJournalEntriesPending = createAction<IJournalEntryStateContext>(
  JournalEntryActionEnums.createJournalEntryPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getJournalEntriesSuccess = createAction<
  IJournalEntryStateContext,
  IJournalEntry[]
>(
  JournalEntryActionEnums.createJournalEntrySuccess,
  (journalEntries: IJournalEntry[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    journalEntries,
  })
);

export const getJournalEntriesError = createAction<IJournalEntryStateContext>(
  JournalEntryActionEnums.createJournalEntryError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
