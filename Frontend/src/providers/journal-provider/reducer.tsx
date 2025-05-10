"use client";
import { handleActions } from "redux-actions";
import { JournalEntryActionEnums } from "./actions";
import { IJournalEntryStateContext, INITIAL_STATE } from "./context";

// Define the reducer for handling JournalEntry actions
export const JournalEntryReducer = handleActions<
  IJournalEntryStateContext,
  IJournalEntryStateContext
>(
  {
    [JournalEntryActionEnums.createJournalEntryPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [JournalEntryActionEnums.createJournalEntrySuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [JournalEntryActionEnums.createJournalEntryError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [JournalEntryActionEnums.resetJournalEntryState]: () => ({
      ...INITIAL_STATE,
    }),
  },
  INITIAL_STATE
);
