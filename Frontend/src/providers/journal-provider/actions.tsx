"use client";
import { createAction } from "redux-actions";
import { IJournalEntryStateContext } from "./context";
import { IJournalEntry } from "./models";

// Enum defining the actions for creating a JournalEntry
export enum JournalEntryActionEnums {
  createJournalEntryPending = "CREATE_JournalEntry_PENDING",
  createJournalEntrySuccess = "CREATE_JournalEntry_SUCCESS",
  createJournalEntryError = "CREATE_JournalEntry_ERROR",
  resetJournalEntryState = "RESET_JournalEntry_STATE",
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

export const resetJournalEntryState = createAction<IJournalEntryStateContext>(
  JournalEntryActionEnums.resetJournalEntryState,
  () => ({ isPending: false, isSuccess: false, isError: false })
);
