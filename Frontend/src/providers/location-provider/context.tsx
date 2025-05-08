"use client";
import { ILocation } from "@/interfaces/interfaces";
import { createContext } from "react";

export interface ILocationStateContext {
  readonly isPending: boolean;
  readonly isSuccess: boolean;
  readonly isError: boolean;
  readonly location?: ILocation;
}

export const INITIAL_LOCATION_STATE: ILocationStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

export interface ILocationActionContext {
  getLocation: () => Promise<void>;
}

export const LocationStateContext = createContext<ILocationStateContext>(
  INITIAL_LOCATION_STATE
);

export const LocationActionContext = createContext<
  ILocationActionContext | undefined
>(undefined);
