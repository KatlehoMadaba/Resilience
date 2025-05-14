"use client";
import {
  INITIAL_STATE,
  JournalEntryActionContext,
  JournalEntryStateContext,
} from "./context";
import { useContext, useReducer } from "react";
import {
  createJournalEntryPending,
  createJournalEntrySuccess,
  createJournalEntryError,
  getJournalEntriesByPersonIdPending,
  getJournalEntriesByPersonIdSuccess,
} from "./actions";
import { getAxiosInstance } from "@/utils/axiosInstance";
import { IJournalEntry } from "../../providers/journal-provider/models";
import { JournalEntryReducer } from "./reducer";

export const JournalEntryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(JournalEntryReducer, INITIAL_STATE);
  const instance = getAxiosInstance();

  const createJournalEntry = async (JournalEntry: IJournalEntry) => {
    dispatch(createJournalEntryPending());
    const endpoint = `/api/services/app/JournalEntry/Create`;
    await instance
      .post(endpoint, JournalEntry)
      .then((response) => {
        dispatch(createJournalEntrySuccess(response?.data));
      })
      .catch((error) => {
        console.error("Error fetching medical centres:", error);
        dispatch(createJournalEntryError());
      });
  };
  const getJournalEntriesByPersonId = async (PersonId: string) => {
    dispatch(getJournalEntriesByPersonIdPending());
    const endpoint = `/api/services/app/PersonService/GetCurrentPersonId?=${PersonId}`;
    await instance.get(endpoint).then((response) => {
      dispatch(getJournalEntriesByPersonIdSuccess(response?.data));
    });
  };

  return (
    <JournalEntryStateContext.Provider value={state}>
      <JournalEntryActionContext.Provider
        value={{ createJournalEntry, getJournalEntriesByPersonId }}
      >
        {children}
      </JournalEntryActionContext.Provider>
    </JournalEntryStateContext.Provider>
  );
};

export const useJournalEntryState = () => {
  const context = useContext(JournalEntryStateContext);
  if (!context) {
    throw new Error(
      "useJournalEntryState must be used within a JournalEntryProvider"
    );
  }
  return context;
};

export const useJournalEntryActions = () => {
  const context = useContext(JournalEntryActionContext);
  if (!context) {
    throw new Error(
      "useJournalEntryActions must be used within a JournalEntryProvider"
    );
  }
  return context;
};
