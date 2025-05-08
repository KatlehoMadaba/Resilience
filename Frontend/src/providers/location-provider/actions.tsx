"use client";
import { ILocation } from "../../interfaces/interfaces";
import { ILocationStateContext } from "./context";
import { createAction } from "redux-actions";

// Define action enums for pending, success, and error states
export enum LocationActionEnums {
  getLocationPending = "GET_LOCATION_PENDING",
  getLocationSuccess = "GET_LOCATION_SUCCESS",
  getLocationError = "GET_LOCATION_ERROR",
}

// GET Location Actions
export const getLocationPending = createAction<ILocationStateContext>(
  LocationActionEnums.getLocationPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getLocationSuccess = createAction<
  ILocationStateContext,
  ILocation
>(LocationActionEnums.getLocationSuccess, (location: ILocation) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  location,
}));

export const getLocationError = createAction<ILocationStateContext>(
  LocationActionEnums.getLocationError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
