"use client";
import { createContext } from "react";
import { IPoliceStation } from "./models";// Import Location from the locationModel file
import { ILocation } from "@/interfaces/interfaces";

// Define state structure for managing medical centres
export interface IPoliceStationStateContext {
  readonly isPending: boolean;
  readonly isSuccess: boolean;
  readonly isError: boolean;
  readonly PoliceStations?: IPoliceStation[]; // Store fetched medical centres
}

// Initialize the state
export const INITIAL_STATE: IPoliceStationStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  PoliceStations: [], // Start with an empty list
};

// Define action context interface for handling functions like getPoliceStations
export interface IPoliceStationActionContext {
  getPoliceStations: (location: ILocation) => Promise<void>;
}

// Create state context for providing state
export const PoliceStationStateContext = createContext<IPoliceStationStateContext>(INITIAL_STATE);

// Create action context for handling actions
export const PoliceStationActionContext = createContext<IPoliceStationActionContext | undefined>(undefined);
