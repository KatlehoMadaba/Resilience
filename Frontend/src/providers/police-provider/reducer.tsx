"use client";
import { handleActions } from "redux-actions";
import { INITIAL_STATE, IPoliceStationStateContext } from "./context";
import { PoliceStationActionEnums } from "./actions";

export const PoliceStationReducer = handleActions<IPoliceStationStateContext>(
  {
    [PoliceStationActionEnums.getPoliceStationsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [PoliceStationActionEnums.getPoliceStationsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [PoliceStationActionEnums.getPoliceStationsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
