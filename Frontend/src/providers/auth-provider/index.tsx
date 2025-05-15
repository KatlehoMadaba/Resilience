"use client";
//import { getAxiosInstace } from "../../utils/axiosInstance";
import {
  ISignInResponse,
  ISignInRequest,
  IEmergencySignIn,
  ISurvivorRegisteration,
  IPastSurvivorRegsister,
} from "./models";
import { INITIAL_STATE, AuthActionContext, AuthStateContext } from "./context";
import { AuthReducer } from "./reducers";
import { useContext, useReducer } from "react";
import {
  signInError,
  signInPending,
  signInSuccess,
  signUpPastSurvivorPending,
  signUpPastSurvivorSuccess,
  signUpPastSurvivorError,
  signUpImmediateSurvivorSuccess,
  signUpImmediateSurvivorPending,
  signUpImmediateSurvivorError,
} from "./actions";
import { getAxiosInstance } from "@/utils/axiosInstance";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const instance = getAxiosInstance();

  const signUpImmediateSurvivor = async (Survivor: ISurvivorRegisteration) => {
    dispatch(signUpImmediateSurvivorPending());
    const endpoint = `/api/services/app/ImdSurvivor/Create`;
    instance
      .post(endpoint, Survivor)
      .then(() => {
        dispatch(signUpImmediateSurvivorSuccess());
      })
      .catch((error) => {
        dispatch(signUpImmediateSurvivorError());
        const backendMessage = error.response?.data?.error?.message;
        console.error(error);
        throw new Error(backendMessage);
      });
  };

  const signUpPastSurvivor = async (Survivor: IPastSurvivorRegsister) => {
    dispatch(signUpPastSurvivorPending());
    const endpoint = `/api/services/app/PastSurvivor/Create`;
    await instance
      .post(endpoint, Survivor)
      .then(() => {
        dispatch(signUpPastSurvivorSuccess());
      })
      .catch((error) => {
        dispatch(signUpPastSurvivorError());
        console.error(error);
      });
  };

  const signIn = async (
    SignInRequest: ISignInRequest
  ): Promise<ISignInResponse> => {
    dispatch(signInPending());
    const endpoint = `/api/TokenAuth/Authenticate`;
    return instance
      .post(endpoint, SignInRequest)
      .then((response) => {
        const token = response?.data?.result.accessToken;
        if (token) {
          sessionStorage.setItem("jwt", token);
          dispatch(signInSuccess(token));
          return response.data;
        } else {
          throw new Error("There is no response");
        }
      })
      .catch((error) => {
        console.error(
          "Error during signIn:",
          error.response?.data?.message || error
        );
        dispatch(signInError());
        throw error;
      });
  };

  const emergencySignIn = async (emergencySignIn: IEmergencySignIn) => {
    dispatch(signInPending());
    const endpoint = "";
    return instance
      .post(endpoint, emergencySignIn)
      .then((response) => {
        const token = response?.data.result.accessToken;
        if (token) {
          sessionStorage.setItem("jwt", token);
          dispatch(signInSuccess(token));
          return response?.data;
        } else {
          throw new Error("There is no response");
        }
      })
      .catch((error) => {
        console.error(
          "Error during signIn:",
          error.response?.data?.message || error
        );
        dispatch(signInError());
        throw error;
      });
  };
  return (
    <AuthStateContext.Provider value={state}>
      <AuthActionContext.Provider
        value={{
          signIn,
          signUpImmediateSurvivor,
          signUpPastSurvivor,
          emergencySignIn,
        }}
      >
        {children}
      </AuthActionContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
};

export const useAuthActions = () => {
  const context = useContext(AuthActionContext);
  if (!context) {
    throw new Error("useAuthActions must be used within a AuthProvider");
  }
  return context;
};
