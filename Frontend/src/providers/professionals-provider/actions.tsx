"use client";
import { IProfessional } from "./models";
import { IProfessionalStateContext } from "./context";
import { createAction } from "redux-actions";

export enum ProfessionalActionEnums {
  getProfessionalsPending = "GET_ProfessionalS_PENDING",
  getProfessionalsSuccess = "GET_ProfessionalS_SUCCESS",
  getProfessionalsError = "GET_ProfessionalS_ERROR",

  getProfessionalPending = "GET_Professional_PENDING",
  getProfessionalSuccess = "GET_Professional_SUCCESS",
  getProfessionalError = "GET_Professional_ERROR",

  getCurrentProfessionalPending = "GET_CURRENTProfessional_PENDING",
  getCurrentProfessionalSuccess = "GET_CURRENTProfessional_SUCCESS",
  getCurrentProfessionalError = "GET_CURRENTProfessional_ERROR",

  getCurrentPersonIdPending = "GET_CURRENTPERSONID_PENDING",
  getCurrentPersonIdSuccess = "GET_CURRENTPERSONID_SUCCESS",
  getCurrentPersonIdError = "GET_CURRENTPERSONID_ERROR",

  createProfessionalPending = "CREATE_Professional_PENDING",
  createProfessionalSuccess = "CREATE_Professional_SUCCESS",
  createProfessionalError = "CREATE_Professional_ERROR",

  updateProfessionalPending = "UPDATE_Professional_PENDING",
  updateProfessionalSuccess = "UPDATE_Professional_SUCCESS",
  updateProfessionalError = "UPDATE_Professional_ERROR",

  deleteProfessionalPending = "DELETE_Professional_PENDING",
  deleteProfessionalSuccess = "DELETE_Professional_SUCCESS",
  deleteProfessionalError = "DELETE_Professional_ERROR",
}

// Get Professionals
export const getProfessionalsPending = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.getProfessionalsPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getProfessionalsSuccess = createAction<IProfessionalStateContext, IProfessional[]>(
  ProfessionalActionEnums.getProfessionalsSuccess,
  (Professionals) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    Professionals,
  })
);

export const getProfessionalsError = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.getProfessionalsError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

// Get Single Professional
export const getProfessionalPending = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.getProfessionalPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getProfessionalSuccess = createAction<IProfessionalStateContext, IProfessional>(
  ProfessionalActionEnums.getProfessionalSuccess,
  (Professional) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    Professional,
  })
);

export const getProfessionalError = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.getProfessionalError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//Get Current Professional
export const getCurrentProfessionalPending = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.getCurrentProfessionalPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getCurrentProfessionalSuccess = createAction<IProfessionalStateContext, IProfessional>(
  ProfessionalActionEnums.getCurrentProfessionalSuccess,
  (currentProfessional) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    currentProfessional,
  })
);

export const getCurrentProfessionalError = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.getCurrentProfessionalError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);


export const getCurrentPersonIdPending = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.getCurrentPersonIdPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getCurrentPersonIdSuccess = createAction<IProfessionalStateContext,string>(
  ProfessionalActionEnums.getCurrentPersonIdSuccess,
  (personId) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    personId,
  })
);

export const getCurrentPersonIdError = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.getCurrentPersonIdError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);


// Create Professional
export const createProfessionalPending = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.createProfessionalPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createProfessionalSuccess = createAction<IProfessionalStateContext, IProfessional>(
  ProfessionalActionEnums.createProfessionalSuccess,
  (Professional) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    Professional,
  })
);

export const createProfessionalError = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.createProfessionalError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//Update Professional
export const updateProfessionalPending = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.updateProfessionalPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const updateProfessionalSuccess = createAction<IProfessionalStateContext, IProfessional>(
  ProfessionalActionEnums.updateProfessionalSuccess,
  (Professional) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    Professional,
  })
);

export const updateProfessionalError = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.updateProfessionalError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const deleteProfessionalPending = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.deleteProfessionalPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const deleteProfessionalSuccess = createAction<IProfessionalStateContext, IProfessional>(
  ProfessionalActionEnums.deleteProfessionalSuccess,
  (Professional) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    Professional,
  })
);

export const deleteProfessionalError = createAction<IProfessionalStateContext>(
  ProfessionalActionEnums.deleteProfessionalError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
