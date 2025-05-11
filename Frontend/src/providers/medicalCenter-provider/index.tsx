"use client";
import {
  INITIAL_STATE,
  MedicalCentreActionContext,
  MedicalCentreStateContext,
} from "./context";
import { useContext, useReducer } from "react";
import {
  getMedicalCentresPending,
  getMedicalCentresSuccess,
  getMedicalCentresError,
} from "./actions";
import { getAxiosInstace } from "@/utils/axiosInstance";
import { ILocation } from "../../providers/location-provider/models";
import { MedicalCentreReducer } from "./reducer";

export const MedicalCentreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(MedicalCentreReducer, INITIAL_STATE);
  const instance = getAxiosInstace();
  const getMedicalCentres = async (Location: ILocation): Promise<void> => {
    dispatch(getMedicalCentresPending());

    const endpoint = `/api/services/app/MedicalFacility/GetNearbyFacilities?Latitude=${Location.latitude}&Longitude=${Location.longitude}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getMedicalCentresSuccess(response?.data.result));
      })
      .catch((error) => {
        console.error("Error fetching medical centres:", error);
        dispatch(getMedicalCentresError());
      });
  };

  return (
    <MedicalCentreStateContext.Provider value={state}>
      <MedicalCentreActionContext.Provider value={{ getMedicalCentres }}>
        {children}
      </MedicalCentreActionContext.Provider>
    </MedicalCentreStateContext.Provider>
  );
};

export const useMedicalCentreState = () => {
  const context = useContext(MedicalCentreStateContext);
  if (!context) {
    throw new Error(
      "useMedicalCentreState must be used within a MedicalCentreProvider"
    );
  }
  return context;
};

export const useMedicalCentreActions = () => {
  const context = useContext(MedicalCentreActionContext);
  if (!context) {
    throw new Error(
      "useMedicalCentreActions must be used within a MedicalCentreProvider"
    );
  }
  return context;
};
