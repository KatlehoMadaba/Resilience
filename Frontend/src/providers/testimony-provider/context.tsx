"use client";
import { createContext } from "react";
import { ITestimony, ITestimonyResponse } from "./models";

// Context shape interface
export interface ITestimonyStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  Testimony?: ITestimony;
  testimonies?: ITestimonyResponse[];
}

// Testimony action context interface
export interface ITestimonyActionContext {
  createTestimony: (Testimony: ITestimony) => void;
  getAllTestimonies: () => Promise<void>;
}

// Initial state with default values
export const INITIAL_STATE: ITestimonyStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  testimonies: [],
};

// Create the state context and the action context
export const TestimonyStateContext =
  createContext<ITestimonyStateContext>(INITIAL_STATE);
export const TestimonyActionContext = createContext<
  ITestimonyActionContext | undefined
>(undefined);
