"use client";
import { IMedicalCentre } from "./models";
import { IMedicalCentreStateContext } from "./context";
import { createAction } from "redux-actions";

// Define action enums for pending, success, and error states
export enum MedicalCentreActionEnums {
  getMedicalCentrePending = "GET_MEDICAL_CENTRE_PENDING",
  getMedicalCentreSuccess = "GET_MEDICAL_CENTRE_SUCCESS",
  getMedicalCentreError = "GET_MEDICAL_CENTRE_ERROR",
}

// GET Medical Centre Actions
export const getMedicalCentrePending = createAction<IMedicalCentreStateContext>(
  MedicalCentreActionEnums.getMedicalCentrePending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getMedicalCentreSuccess = createAction<
  IMedicalCentreStateContext,
  IMedicalCentre
>(
  MedicalCentreActionEnums.getMedicalCentreSuccess,
  (MedicalCentre: IMedicalCentre) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    MedicalCentre: MedicalCentre,
  })
);

export const getMedicalCentreError = createAction<IMedicalCentreStateContext>(
  MedicalCentreActionEnums.getMedicalCentreError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
