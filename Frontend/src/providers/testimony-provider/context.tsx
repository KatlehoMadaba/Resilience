"use client";
import { createContext } from "react";
import { ITestimony } from "./models";

// Context shape interface
export interface ITestimonyStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  Testimony?: ITestimony;
}

// Testimony action context interface
export interface ITestimonyActionContext {
  createTestimony: (Testimony: ITestimony) => void;
}

// Initial state with default values
export const INITIAL_STATE: ITestimonyStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

// Create the state context and the action context
export const TestimonyStateContext =
  createContext<ITestimonyStateContext>(INITIAL_STATE);
export const TestimonyActionContext = createContext<
  ITestimonyActionContext | undefined
>(undefined);
