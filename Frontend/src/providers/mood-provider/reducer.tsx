"use client";
import { handleActions } from "redux-actions";
import { MoodEntryActionEnums } from "./actions";
import { IMoodEntryStateContext, INITIAL_STATE } from "./context";

// Define the reducer for handling MoodEntry actions
export const MoodEntryReducer = handleActions<
  IMoodEntryStateContext,
  IMoodEntryStateContext
>(
  {
    [MoodEntryActionEnums.createMoodEntryPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MoodEntryActionEnums.createMoodEntrySuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MoodEntryActionEnums.createMoodEntryError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MoodEntryActionEnums.getMoodEntriesByPersonIdPending]: (
      state,
      action
    ) => ({
      ...state,
      ...action.payload,
    }),
    [MoodEntryActionEnums.getMoodEntriesByPersonIdSuccess]: (
      state,
      action
    ) => ({
      ...state,
      ...action.payload,
    }),
    [MoodEntryActionEnums.getMoodEntriesByPersonIdError]: (
      state,
      action
    ) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
