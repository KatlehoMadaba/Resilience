"use client";
import { IMedicalCentre } from "./models";
import {
  INITIAL_STATE,
  MedicalCentreActionContext,
  MedicalCentreStateContext,
} from "./context";
import { MedicalCentreReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  getMedicalCentrePending,
  getMedicalCentreSuccess,
  getMedicalCentreError,
} from "./actions";
import axios from "axios";

export const MedicalCentreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(MedicalCentreReducer, INITIAL_STATE);

  const getMedicalCentres = async (): Promise<void> => {
    dispatch(getMedicalCentrePending());
    const endpoint = `https://localhost:44311/api/services/app/MedicalFacility/GetAll`;
    await axios
      .get<IMedicalCentre>(endpoint)
      .then((response) => {
        dispatch(getMedicalCentreSuccess(response.data));
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
        dispatch(getMedicalCentreError());
      });
  };

  return (
    <MedicalCentreStateContext.Provider value={state}>
      <MedicalCentreActionContext.Provider value={{ getMedicalCentres}}>
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
