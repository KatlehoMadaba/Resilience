"use client";
import { ISurvivor, ISurvivorRegisteration, UpdateSurvivorDto } from "./models";
import { createContext } from "react";

// Context shape
export interface ISurvivorStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  currentSurvivor?: ISurvivor;
  errorMessage?: string;
  Survivor?: ISurvivor;
  Survivors?: ISurvivor[]; // Array of Survivors
}

// Actions that will be performed on Survivorss
  export interface ISurvivorActionContext {
    getSurvivors: () => void;
    getSurvivor: (id: string) => Promise<ISurvivor>;
    registerSurvivor: (Survivor: ISurvivorRegisteration) => Promise<void>;
    updateSurvivor: (SurvivorId: string, SurvivorData: UpdateSurvivorDto) => void;
    deleteSurvivorbyId: (SurvivorId: string) => void; //letting user delete their own profile
    getCurrentSurvivor: (userId: number) => Promise<ISurvivor>; // Fixed camelCase name
  }
// Initial state with default values
export const INITIAL_STATE: ISurvivorStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  Survivors: [],
};

// Create the state context and the action context
export const SurvivorStateContext =
  createContext<ISurvivorStateContext>(INITIAL_STATE);

export const SurvivorActionContext =
  createContext<ISurvivorActionContext>(undefined);
