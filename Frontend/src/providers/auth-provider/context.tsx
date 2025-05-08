"use client";
import { createContext } from "react";
import {
  ISignInRequest,
  IAuth,
  ISignInResponse,
  IEmergencySignIn,
  IPastSurvivorRegsister,
} from "./models";
import { ISurvivorRegisteration } from "../survivors-provider/models";

// Context shape interface
export interface IAuthStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  Auth?: IAuth;
}

// Auth action context interface
export interface IAuthActionContext {
  signIn: (SignInRequest: ISignInRequest) => Promise<ISignInResponse>;
  signUpImmediateSurvivor: (Survivor: ISurvivorRegisteration) => void;
  signUpPastSurvivor: (PastSurvivor: IPastSurvivorRegsister) => void;
  signUp: (Auth: IAuth) => void;
  emergencySignIn: (emergencySignIn: IEmergencySignIn) => void;
}

// Initial state with default values
export const INITIAL_STATE: IAuthStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

// Create the state context and the action context
export const AuthStateContext = createContext<IAuthStateContext>(INITIAL_STATE);
export const AuthActionContext = createContext<IAuthActionContext | undefined>(
  undefined
);
