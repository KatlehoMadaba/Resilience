"use client";
//import { getAxiosInstace } from "../../utils/axiosInstance";
import {
  IAuth,
  ISignInResponse,
  ISignInRequest,
  IEmergencySignIn,
  ISurvivorRegisteration,
} from "./models";
import { INITIAL_STATE, AuthActionContext, AuthStateContext } from "./context";
import { AuthReducer } from "./reducers";
import { useContext, useReducer } from "react";
import {
  signInError,
  signInPending,
  signInSuccess,
  signUpPending,
  signUpSuccess,
  signUpError,
  signUpSurvivorSuccess,
  signUpSurvivorPending,
  signUpSurvivorError,
} from "./actions";
import { getAxiosInstace } from "@/utils/axiosInstance";
import axios from "axios";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const instance = getAxiosInstace();
  const signUp = async (Auth: IAuth): Promise<void> => {
    dispatch(signUpPending());
    const endpoint =
      Auth.role === "PASTSURVIVOR"
        ? `services/app/PastSurvivor/Create`
        : Auth.role === "GENERALSUPPORTER"
        ? `services/app/GeneralSupporter/Create`
        : `services/app/Professional/Create`;

    await instance
      .post<IAuth>(endpoint, Auth)
      .then((response) => {
        dispatch(signUpSuccess(response?.data));
      })
      .catch((error) => {
        dispatch(signUpError());
        console.error(error);
      });
  };

  const signUpImmediateSurvivor = async (Survivor: ISurvivorRegisteration) => {
    debugger;
    dispatch(signUpSurvivorPending());
    const endpoint = `https://localhost:44311/api/services/app/ImdSurvivor/Create`;
    await axios
      .post(endpoint, Survivor)
      .then(() => {
        dispatch(signUpSurvivorSuccess());
        console.log(Survivor, "survivor");
      })
      .catch((error) => {
        dispatch(signUpSurvivorError());
        console.error(error);
      });
  };

  const signUpPastSurvivor = async (Survivor: ISurvivorRegisteration) => {
    dispatch(signUpSurvivorPending());
    const endpoint = `services/app/ImdSurvivor/Create`;
    await instance
      .post(endpoint, Survivor)
      .then(() => {
        dispatch(signUpSurvivorSuccess());
      })
      .catch((error) => {
        dispatch(signUpSurvivorError());
        console.error(error);
      });
  };

  const signIn = async (
    SignInRequest: ISignInRequest
  ): Promise<ISignInResponse> => {
    dispatch(signInPending());
    const endpoint = `TokenAuth/Authenticate`;
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
          signUp,
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
