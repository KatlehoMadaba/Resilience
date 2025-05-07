"use client";
import { createContext } from "react";
import { IMedicalCentre } from "./models";

export interface IMedicalCentreStateContext {
  readonly isPending: boolean;
  readonly isSuccess: boolean;
  readonly isError: boolean;
  readonly medicalCentre?: IMedicalCentre;
  readonly medicalCentres?: IMedicalCentre[];
}

export const INITIAL_STATE: IMedicalCentreStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  medicalCentres:[]
};

export interface IMedicalCentreActionContext {
  getMedicalCentres: () => void;
}

export const MedicalCentreStateContext =
  createContext<IMedicalCentreStateContext>(INITIAL_STATE);

export const MedicalCentreActionContext = createContext<
  IMedicalCentreActionContext | undefined
>(undefined);
