"use client";
import { ISurvivor } from "./models";
import { ISurvivorStateContext } from "./context";
import { createAction } from "redux-actions";

export enum SurvivorActionEnums {
  getSurvivorsPending = "GET_SURVIVORS_PENDING",
  getSurvivorsSuccess = "GET_SURVIVORS_SUCCESS",
  getSurvivorsError = "GET_SURVIVORS_ERROR",

  getCurrentSurvivorPending = "GET_CURRENTSURVIVOR_PENDING",
  getCurrentSurvivorSuccess = "GET_CURRENTSURVIVOR_SUCCESS",
  getCurrentSurvivorError = "GET_CURRENTSURVIVOR_ERROR",

  getSurvivorPending = "GET_SURVIVOR_PENDING",
  getSurvivorSuccess = "GET_SURVIVOR_SUCCESS",
  getSurvivorError = "GET_SURVIVOR_ERROR",

  registerSurvivorPending = "CREATE_SURVIVOR_PENDING",
  registerSurvivorSuccess = "CREATE_SURVIVOR_SUCCESS",
  registerSurvivorError = "CREATE_SURVIVOR_ERROR",

  updateSurvivorPending = "UPDATE_=SURVIVOR_PENDING",
  updateSurvivorSuccess = "UPDATE_=SURVIVOR_SUCCESS",
  updateSurvivorError = "UPDATE_=SURVIVOR_ERROR",

  deleteSurvivorPending = "DELETE_SURVIVOR_PENDING",
  deleteSurvivorSuccess = "DELETE_SURVIVOR_SUCCESS",
  deleteSurvivorError = "DELETE_SURVIVOR_ERROR",
}
// Get Current Survivor actions
export const getCurrentSurvivorPending = createAction<ISurvivorStateContext>(
  SurvivorActionEnums.getCurrentSurvivorPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getCurrentSurvivorSuccess = createAction<
  ISurvivorStateContext,
  ISurvivor
>(
  SurvivorActionEnums.getCurrentSurvivorSuccess, // Fixed incorrect enum
  (currentSurvivor: ISurvivor) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    currentSurvivor,
  })
);

export const getCurrentSurvivorError = createAction<ISurvivorStateContext>(
  SurvivorActionEnums.getCurrentSurvivorError, // Fixed incorrect enum
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//Get All Paitients
//Multiple Paitients
export const getSurvivorsPending = createAction<ISurvivorStateContext>(
  SurvivorActionEnums.getSurvivorsPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const getSurvivorsSuccess = createAction<
  ISurvivorStateContext,
  ISurvivor[]
>(SurvivorActionEnums.getSurvivorsSuccess, (Survivors: ISurvivor[]) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  Survivors,
}));

export const getSurvivorsError = createAction<ISurvivorStateContext>(
  SurvivorActionEnums.getSurvivorsError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//Get Single Paitient
export const getSurvivorError = createAction<ISurvivorStateContext>(
  SurvivorActionEnums.getSurvivorsError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getSurvivorPending = createAction<ISurvivorStateContext>(
  SurvivorActionEnums.getSurvivorPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getSurvivorSuccess = createAction<ISurvivorStateContext, ISurvivor>(
  SurvivorActionEnums.getSurvivorSuccess,
  (Survivor: ISurvivor) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    Survivor,
  })
);

//Registering The Survivor
export const registerSurvivorPending = createAction<ISurvivorStateContext>(
  SurvivorActionEnums.registerSurvivorPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const registerSurvivorSuccess = createAction<
  ISurvivorStateContext,
  ISurvivor
>(SurvivorActionEnums.registerSurvivorSuccess, (Survivor: ISurvivor) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  Survivor,
}));

export const registerSurvivorError = createAction<ISurvivorStateContext>(
  SurvivorActionEnums.registerSurvivorError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//Update The Survivor
export const updateSurvivorPending = createAction<ISurvivorStateContext>(
  SurvivorActionEnums.updateSurvivorPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const updateSurvivorSuccess = createAction<
  ISurvivorStateContext,
  ISurvivor
>(SurvivorActionEnums.updateSurvivorSuccess, (Survivor: ISurvivor) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  Survivor,
}));

export const updateSurvivorError = createAction<ISurvivorStateContext>(
  SurvivorActionEnums.updateSurvivorError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//Delete Survivor
export const deleteSurvivorPending = createAction<ISurvivorStateContext>(
  SurvivorActionEnums.deleteSurvivorPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const deleteSurvivorSuccess = createAction<
  ISurvivorStateContext,
  ISurvivor
>(SurvivorActionEnums.deleteSurvivorSuccess, (Survivor: ISurvivor) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  Survivor,
}));

export const deleteSurvivorError = createAction<ISurvivorStateContext>(
  SurvivorActionEnums.deleteSurvivorError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
