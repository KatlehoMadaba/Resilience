"use client";
import { handleActions } from "redux-actions";
import { INITIAL_STATE, IMedicalCentreStateContext } from "./context";
import { MedicalCentreActionEnums } from "./actions";

export const MedicalCentreReducer = handleActions<
  IMedicalCentreStateContext,
  IMedicalCentreStateContext
>(
  {
    [MedicalCentreActionEnums.getMedicalCentrePending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MedicalCentreActionEnums.getMedicalCentreSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MedicalCentreActionEnums.getMedicalCentreError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
