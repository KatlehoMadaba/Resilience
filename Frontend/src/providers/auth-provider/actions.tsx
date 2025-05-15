"use client";
import { IAuthStateContext } from "./context";
import { createAction } from "redux-actions";
//make enums defining the actions that can be dispatched

export enum AuthActionEnums {
  // define 3 states for each action (pending , success, error)
  signInPending = "SIGN_IN_PENDING",
  signInSuccess = "SIGN_IN_SUCCESS",
  signInError = "SIGN_IN_ERROR",

  emergencySignInPending = "EMERGENCY_IN_PENDING",
  emergencySignInSuccess = "EMERGENCY_IN_SUCCESS",
  emergencySignInError = "EMERGENCY_IN_ERROR",

  signUpImmediateSurvivorPending = "SIGN_UP_IMMEDIATESURVIVOR_PENDING",
  signUpImmediateSurvivorSuccess = "SIGN_UP_IMMEDIATESURVIVOR_SUCCESS",
  signUpImmediateSurvivorError = "SIGN_UP_IMMEDIATESURVIVOR_ERROR",

  signOutPending = "SIGN_OUT_PENDING",
  signOutSuccess = "SIGN_OUT_SUCCESS",
  signOutError = "SIGN_OUT_ERROR",

  signUpPastSurvivorPending = "SIGN__UP_PAST_SURVIVOR_PENDING",
  signUpPastSurvivorSuccess = "SIGN__UP_PAST_SURVIVOR_SUCCESS",
  signUpPastSurvivorError = "SIGN__UP_PAST_SURVIVOR_ERROR",
}

export const signUpImmediateSurvivorPending = createAction<IAuthStateContext>(
  AuthActionEnums.signUpImmediateSurvivorPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const signUpImmediateSurvivorSuccess = createAction<IAuthStateContext>(
  AuthActionEnums.signUpImmediateSurvivorSuccess,
  () => ({
    isPending: false,
    isSuccess: true,
    isError: false,
  })
);

export const signUpImmediateSurvivorError = createAction<IAuthStateContext>(
  AuthActionEnums.signUpImmediateSurvivorError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const signUpPastSurvivorPending = createAction<IAuthStateContext>(
  AuthActionEnums.signUpPastSurvivorPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const signUpPastSurvivorSuccess = createAction<IAuthStateContext>(
  AuthActionEnums.signUpPastSurvivorSuccess,
  () => ({
    isPending: false,
    isSuccess: true,
    isError: false,
  })
);

export const signUpPastSurvivorError = createAction<IAuthStateContext>(
  AuthActionEnums.signUpPastSurvivorError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

//SIGN IN ACTIONS
export const signInPending = createAction<IAuthStateContext>(
  AuthActionEnums.signInPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const signInSuccess = createAction<IAuthStateContext, string>(
  AuthActionEnums.signInSuccess,
  (token: string) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    token: token,
  })
);
export const signInError = createAction<IAuthStateContext>(
  AuthActionEnums.signInError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
export const emergencySignInPending = createAction<IAuthStateContext>(
  AuthActionEnums.signInPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const emergencySignInSuccess = createAction<IAuthStateContext, string>(
  AuthActionEnums.signInSuccess,
  () => ({
    isPending: false,
    isSuccess: true,
    isError: false,
  })
);
export const emergencySignInError = createAction<IAuthStateContext>(
  AuthActionEnums.signInError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
