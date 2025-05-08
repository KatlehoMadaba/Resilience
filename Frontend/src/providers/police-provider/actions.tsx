"use client";
import { IPoliceStation } from "./models";
import { IPoliceStationStateContext } from "./context";
import { createAction } from "redux-actions";

// Enum defining the type of actions for getting medical centres
export enum PoliceStationActionEnums {
  getPoliceStationsPending = "GET_POLICE_STATIONS_PENDING",
  getPoliceStationsSuccess = "GET_POLICE_STATIONS_SUCCESS",
  getPoliceStationsError = "GET_POLICE_STATIONS_ERROR",
}

// Get All Medical Centres Actions
export const getPoliceStationsPending = createAction<IPoliceStationStateContext>(
  PoliceStationActionEnums.getPoliceStationsPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getPoliceStationsSuccess = createAction<
  IPoliceStationStateContext,
  IPoliceStation[]
>(
  PoliceStationActionEnums.getPoliceStationsSuccess,
  (PoliceStations: IPoliceStation[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    PoliceStations,
  })
);

export const getPoliceStationsError = createAction<IPoliceStationStateContext>(
  PoliceStationActionEnums.getPoliceStationsError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
