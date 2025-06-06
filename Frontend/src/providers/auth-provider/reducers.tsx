"use client";
import { handleActions } from "redux-actions";
import { INITIAL_STATE, IAuthStateContext } from "./context";
import { AuthActionEnums } from "./actions";
export const AuthReducer = handleActions<IAuthStateContext, IAuthStateContext>(
  {
    [AuthActionEnums.signInPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.signInSuccess]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    [AuthActionEnums.signInError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.emergencySignInPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.emergencySignInSuccess]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    [AuthActionEnums.emergencySignInError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.signUpImmediateSurvivorError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.signUpImmediateSurvivorSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.signUpImmediateSurvivorPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.signUpPastSurvivorError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.signUpPastSurvivorSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [AuthActionEnums.signUpPastSurvivorPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
