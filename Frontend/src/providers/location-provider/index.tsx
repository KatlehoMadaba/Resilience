"use client";
import {
  INITIAL_LOCATION_STATE,
  LocationActionContext,
  LocationStateContext,
} from "./context";
import { LocationReducer } from "./reducers";
import {
  getLocationPending,
  getLocationSuccess,
  getLocationError,
} from "./actions";
import { useContext, useReducer } from "react";

export const LocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(LocationReducer, INITIAL_LOCATION_STATE);

  const getLocation = async (): Promise<void> => {
    dispatch(getLocationPending());

    if ("geolocation" in navigator) {
      // Using the browser's geolocation API
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Successfully retrieved location
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          dispatch(getLocationSuccess(location)); // Dispatch success with coordinates
        },
        (error) => {
          console.error(error);
          dispatch(getLocationError()); // Dispatch error if permission denied or other issue
        }
      );
    } else {
      // Geolocation is not supported by the browser
      console.error("Geolocation is not supported by this browser.");
      dispatch(getLocationError()); // Dispatch error if geolocation is not available
    }
  };

  return (
    <LocationStateContext.Provider value={state}>
      <LocationActionContext.Provider value={{ getLocation }}>
        {children}
      </LocationActionContext.Provider>
    </LocationStateContext.Provider>
  );
};

export const useLocationState = () => {
  const context = useContext(LocationStateContext);
  if (!context) {
    throw new Error("useLocationState must be used within a LocationProvider");
  }
  return context;
};

export const useLocationActions = () => {
  const context = useContext(LocationActionContext);
  if (!context) {
    throw new Error(
      "useLocationActions must be used within a LocationProvider"
    );
  }
  return context;
};
