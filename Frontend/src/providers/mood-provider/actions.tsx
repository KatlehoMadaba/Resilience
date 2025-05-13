"use client";
import { createAction } from "redux-actions";
import { IMoodEntryStateContext } from "./context";
import { IMoodEntry } from "./models";

// Enum defining the actions for creating a MoodEntry
export enum MoodEntryActionEnums {
  createMoodEntryPending = "CREATE_MoodEntry_PENDING",
  createMoodEntrySuccess = "CREATE_MoodEntry_SUCCESS",
  createMoodEntryError = "CREATE_MoodEntry_ERROR",
  getMoodEntriesByPersonIdPending = "GET_MoodEntriesPersonId_PENDING",
  getMoodEntriesByPersonIdSuccess = "GET_MoodEntriesPersonId_SUCCESS",
  getMoodEntriesByPersonIdError = "GET_MoodEntriesPersonId_ERROR",
}

// CREATE MoodEntry ACTIONS
export const createMoodEntryPending =
  createAction<IMoodEntryStateContext>(
    MoodEntryActionEnums.createMoodEntryPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
  );

export const createMoodEntrySuccess = createAction<
  IMoodEntryStateContext,
  IMoodEntry
>(
  MoodEntryActionEnums.createMoodEntrySuccess,
  (MoodEntry: IMoodEntry) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    MoodEntry,
  })
);

export const createMoodEntryError = createAction<IMoodEntryStateContext>(
  MoodEntryActionEnums.createMoodEntryError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
//Get Mood Entries

export const getMoodEntriesByPersonIdPending =
  createAction<IMoodEntryStateContext>(
    MoodEntryActionEnums.createMoodEntryPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
  );

export const getMoodEntriesByPersonIdSuccess = createAction<
  IMoodEntryStateContext,
  IMoodEntry[]
>(
  MoodEntryActionEnums.createMoodEntrySuccess,
  (moodEntries: IMoodEntry[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    moodEntries,
  })
);

export const getMoodEntriesByPersonIdError =
  createAction<IMoodEntryStateContext>(
    MoodEntryActionEnums.createMoodEntryError,
    () => ({ isPending: false, isSuccess: false, isError: true })
  );
