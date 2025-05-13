"use client";
import {
  INITIAL_STATE,
  MoodEntryActionContext,
  MoodEntryStateContext,
} from "./context";
import { useContext, useReducer } from "react";
import {
  createMoodEntryPending,
  createMoodEntrySuccess,
  createMoodEntryError,
  getMoodEntriesByPersonIdPending,
  getMoodEntriesByPersonIdSuccess,
  getMoodEntriesByPersonIdError,
} from "./actions";
import { getAxiosInstace } from "@/utils/axiosInstance";
import { IMoodEntry } from "../../providers/mood-provider/models";
import { MoodEntryReducer } from "./reducer";

export const MoodEntryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(MoodEntryReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const createMoodEntry = async (MoodEntry: IMoodEntry) => {
    dispatch(createMoodEntryPending());
    const endpoint = `/api/services/app/MoodEntry/Create`;
    await instance
      .post(endpoint, MoodEntry)
      .then((response) => {
        dispatch(createMoodEntrySuccess(response?.data?.result));
      })
      .catch((error) => {
        console.error("creating entry:", error);
        dispatch(createMoodEntryError());
      });
  };
  const getMoodEntriesByPersonId = async (PersonId: string) => {
    dispatch(getMoodEntriesByPersonIdPending());
    const endpoint = `/api/services/app/MoodEntry/GetMoodEntryByPersonId?personId=${PersonId}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getMoodEntriesByPersonIdSuccess(response?.data?.result));
        console.log(response?.data?.result);
      })
      .catch((error) => {
        console.error("getting entries:", error);
        dispatch(getMoodEntriesByPersonIdError());
      });
  };

  return (
    <MoodEntryStateContext.Provider value={state}>
      <MoodEntryActionContext.Provider
        value={{ createMoodEntry, getMoodEntriesByPersonId }}
      >
        {children}
      </MoodEntryActionContext.Provider>
    </MoodEntryStateContext.Provider>
  );
};

export const useMoodEntryState = () => {
  const context = useContext(MoodEntryStateContext);
  if (!context) {
    throw new Error(
      "useMoodEntryState must be used within a MoodEntryProvider"
    );
  }
  return context;
};

export const useMoodEntryActions = () => {
  const context = useContext(MoodEntryActionContext);
  if (!context) {
    throw new Error(
      "useMoodEntryActions must be used within a MoodEntryProvider"
    );
  }
  return context;
};
