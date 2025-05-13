"use client";
import { createContext } from "react";
import { IMoodEntry } from "./models";
export interface IMoodEntryStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  MoodEntry?: IMoodEntry;
  moodEntries?: IMoodEntry[];
}
export interface IMoodEntryActionContext {
  createMoodEntry: (MoodEntry: IMoodEntry) => void;
  getMoodEntriesByPersonId: (personId: string) => void;
}
export const INITIAL_STATE: IMoodEntryStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  moodEntries: [],
};

export const MoodEntryStateContext =
  createContext<IMoodEntryStateContext>(INITIAL_STATE);
export const MoodEntryActionContext = createContext<
  IMoodEntryActionContext | undefined
>(undefined);
