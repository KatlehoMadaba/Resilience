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
import axios from "axios";
import { ILocation } from "../../interfaces/interfaces"; // Import the ILocation interface
import { MedicalCentreReducer } from "./reducer";

// Define the provider component
export const MedicalCentreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(MedicalCentreReducer, INITIAL_STATE);
  const getMedicalCentres = async (Location: ILocation): Promise<void> => {
    dispatch(getMedicalCentresPending());
    // Backend URL with fixed radius; using actual coordinates from ILocation

    const endpoint = `https://localhost:44311/api/services/app/MedicalFacility/GetNearbyFacilities?Latitude=${Location.latitude}&Longitude=${Location.longitude}`;
    //const endpoint = `https://localhost:44311/api/services/app/MedicalFacility/GetNearbyFacilities?Latitude=-25.740&Longitude=28.18`;
   
    await axios
      .get(endpoint)
      .then((response) => {
        dispatch(getMedicalCentresSuccess(response?.data.result));
         console.log("this is the location in medical", location);
        console.log("medicalcenters", response?.data);
      
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
