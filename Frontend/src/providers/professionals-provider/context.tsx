"use client";
import { createContext } from "react";
import { IProfessional, IProfessionalRegister } from "./models";

// Context shape interface
export interface IProfessionalStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  currentProfessional?: IProfessional; // Changed for naming consistency
  Professional?: IProfessional;
  Professionals?: IProfessional[]; // Array of Professionals
  personId?: string;
}

// Professional action context interface
export interface IProfessionalActionContext {
  getCurrentProfessional: () => Promise<IProfessional>;
  getProfessionals: () => void; // Fetch all Professionals
  getProfessional: (id: string) => void; // Fetch a single Professional
  createProfessional: (Professional: IProfessionalRegister) => void; // Create a new Professional
  updateProfessional: (Professional: IProfessional) => void; // Update an existing Professional
  deleteProfessional: (id: string) => void; // Delete a Professional
}

// Initial state with default values
export const INITIAL_STATE: IProfessionalStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  Professionals: [],
};

// Create the state context and the action context
export const ProfessionalStateContext =
  createContext<IProfessionalStateContext>(INITIAL_STATE);
export const ProfessionalActionContext = createContext<
  IProfessionalActionContext | undefined
>(undefined);
