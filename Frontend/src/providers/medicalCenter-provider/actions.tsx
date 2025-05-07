"use client";
import { IMedicalCentre } from "./models";
import { IMedicalCentreStateContext } from "./context";
import { createAction } from "redux-actions";

// Enum defining the type of actions for getting medical centres
export enum MedicalCentreActionEnums {
  getMedicalCentresPending = "GET_MEDICAL_CENTRES_PENDING",
  getMedicalCentresSuccess = "GET_MEDICAL_CENTRES_SUCCESS",
  getMedicalCentresError = "GET_MEDICAL_CENTRES_ERROR",
}

// Get All Medical Centres Actions
export const getMedicalCentresPending = createAction<IMedicalCentreStateContext>(
  MedicalCentreActionEnums.getMedicalCentresPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getMedicalCentresSuccess = createAction<
  IMedicalCentreStateContext,
  IMedicalCentre[]
>(
  MedicalCentreActionEnums.getMedicalCentresSuccess,
  (medicalCentres: IMedicalCentre[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    medicalCentres,
  })
);

export const getMedicalCentresError = createAction<IMedicalCentreStateContext>(
  MedicalCentreActionEnums.getMedicalCentresError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
