"use client";
import { createContext } from "react";
import { IMedicalCentre } from "./models";// Import Location from the locationModel file
import { ILocation } from "@/interfaces/interfaces";

// Define state structure for managing medical centres
export interface IMedicalCentreStateContext {
  readonly isPending: boolean;
  readonly isSuccess: boolean;
  readonly isError: boolean;
  readonly medicalCentres?: IMedicalCentre[]; // Store fetched medical centres
}

// Initialize the state
export const INITIAL_STATE: IMedicalCentreStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  medicalCentres: [], // Start with an empty list
};

// Define action context interface for handling functions like getMedicalCentres
export interface IMedicalCentreActionContext {
  getMedicalCentres: (location: ILocation) => void;
}

// Create state context for providing state
export const MedicalCentreStateContext = createContext<IMedicalCentreStateContext>(INITIAL_STATE);

// Create action context for handling actions
export const MedicalCentreActionContext = createContext<IMedicalCentreActionContext | undefined>(undefined);
