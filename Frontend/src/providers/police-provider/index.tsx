"use client";
import {
  INITIAL_STATE,
  PoliceStationActionContext,
  PoliceStationStateContext,
} from "./context";
import { useContext, useReducer } from "react";
import {
  getPoliceStationsPending,
  getPoliceStationsSuccess,
  getPoliceStationsError,
} from "./actions";
import { getAxiosInstace } from "@/utils/axiosInstance";
import { ILocation } from "../../interfaces/interfaces"; // Import the ILocation interface
import { PoliceStationReducer } from "./reducer";

// Define the provider component
export const PoliceStationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(PoliceStationReducer, INITIAL_STATE);
  const instance = getAxiosInstace();
  const getPoliceStations = async (Location: ILocation): Promise<void> => {
    dispatch(getPoliceStationsPending());
    const endpoint = `/api/services/app/PoliceStation/GetNearbyPoliceStations?Latitude=${Location.latitude}&Longitude=${Location.longitude}`;
    await instance
      .get(endpoint)

      .then((response) => {
        dispatch(getPoliceStationsSuccess(response?.data.result));
      })
      .catch((error) => {
        console.error("Error fetching police station:", error);
        dispatch(getPoliceStationsError());
      });
  };

  return (
    <PoliceStationStateContext.Provider value={state}>
      <PoliceStationActionContext.Provider value={{ getPoliceStations }}>
        {children}
      </PoliceStationActionContext.Provider>
    </PoliceStationStateContext.Provider>
  );
};

export const usePoliceStationState = () => {
  const context = useContext(PoliceStationStateContext);
  if (!context) {
    throw new Error(
      "usePoliceStationState must be used within a PoliceStationProvider"
    );
  }
  return context;
};

export const usePoliceStationActions = () => {
  const context = useContext(PoliceStationActionContext);
  if (!context) {
    throw new Error(
      "usePoliceStationActions must be used within a PoliceStationProvider"
    );
  }
  return context;
};
