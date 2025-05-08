"use client";
import { handleActions } from "redux-actions";
import { INITIAL_STATE, IMedicalCentreStateContext } from "./context";
import { MedicalCentreActionEnums } from "./actions";

export const MedicalCentreReducer = handleActions<
  IMedicalCentreStateContext
>(
  {
    [MedicalCentreActionEnums.getMedicalCentresPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MedicalCentreActionEnums.getMedicalCentresSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [MedicalCentreActionEnums.getMedicalCentresError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
