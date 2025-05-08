"use client";
import { handleActions } from "redux-actions";
import { INITIAL_LOCATION_STATE, ILocationStateContext } from "./context";
import { LocationActionEnums } from "./actions";

export const LocationReducer = handleActions<
  ILocationStateContext,
  ILocationStateContext
>(
  {
    [LocationActionEnums.getLocationPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [LocationActionEnums.getLocationSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [LocationActionEnums.getLocationError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_LOCATION_STATE
);
