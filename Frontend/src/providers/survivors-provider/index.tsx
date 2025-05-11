"use client";
import { getAxiosInstace } from "../../utils/axiosInstance";
import { ISurvivor, ISurvivorRegisteration, UpdateSurvivorDto } from "./models";
import {
  INITIAL_STATE,
  SurvivorActionContext,
  SurvivorStateContext,
} from "./context";
import { SurvivorReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  getCurrentSurvivorPending,
  getCurrentSurvivorSuccess,
  getCurrentSurvivorError,
  registerSurvivorPending,
  registerSurvivorError,
  registerSurvivorSuccess,
  getSurvivorPending,
  getSurvivorsPending,
  getSurvivorsSuccess,
  getSurvivorsError,
  getSurvivorError,
  updateSurvivorPending,
  updateSurvivorSuccess,
  updateSurvivorError,
  deleteSurvivorPending,
  deleteSurvivorSuccess,
} from "./actions";

export const SurvivorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(SurvivorReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  // Get current Survivor
  // const getCurrentSurvivor = async (
  //   userId: number
  // ): Promise<ISurvivor | null> => {
  //   dispatch(getCurrentSurvivorPending());
  //   const endpoint = `/ImdSurvivor/GetCurrentSurvivor?userId=${userId}`;
  //   return instance
  //     .get(endpoint)
  //     .then((response) => {
  //       if (response?.data?.result) {
  //         dispatch(getCurrentSurvivorSuccess(response.data.result));
  //         return response.data.result;
  //       } else {
  //         console.warn("No Survivor data found in response");
  //         dispatch(getCurrentSurvivorError());
  //         return null;
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching current Survivor:", error);
  //       dispatch(getCurrentSurvivorError());
  //       return null;
  //     });
  // };
const getCurrentSurvivor = async (
  userId: number
): Promise<ISurvivor | null> => {
  dispatch(getCurrentSurvivorPending());
  const endpoint = `/api/services/app/ImdSurvivor/GetCurrentSurvivor?userId=${userId}`;
  try {
    const response = await instance.get(endpoint);
    if (response?.data?.result) {
      dispatch(getCurrentSurvivorSuccess(response?.data?.result));
      return response.data.result;
    } else {
      console.warn("No Survivor data found in response");
      dispatch(getCurrentSurvivorError());
      return null;
    }
  } catch (error) {
    console.error("Error fetching current Survivor:", error);
    dispatch(getCurrentSurvivorError());
    return null;
  }
};
  // Get Survivor
  const getSurvivor = async (SurvivorId: string): Promise<ISurvivor | null> => {
    dispatch(getSurvivorPending());
    const endpoint = `/api/services/app/Survivor/Get?Id=${SurvivorId}`;
    return instance
      .get(endpoint)
      .then((response) => {
        dispatch(getSurvivorsSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        dispatch(getSurvivorError());
        return null;
      });
  };
  // Register the Survivor
  const registerSurvivor = async (Survivor: ISurvivorRegisteration) => {
    dispatch(registerSurvivorPending());
    const endpoint = `/api/services/app/Survivor/Create`;
    await instance
      .post(endpoint, Survivor)
      .then((response) => {
        dispatch(registerSurvivorSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(registerSurvivorError());
      });
  };

  // Get All Survivors
  const getSurvivors = async () => {
    dispatch(getSurvivorsPending());
    const endpoint = `/api/services/app/Survivor/GetAll`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getSurvivorsSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getSurvivorsError());
      });
  };

  const updateSurvivor = async (
    SurvivorId: string,
    SurvivorData: UpdateSurvivorDto
  ) => {
    dispatch(updateSurvivorPending());
    const payload = {
      ...SurvivorData,
      id: SurvivorId,
    };
    const endpoint = `/api/services/app/Survivor/UpdateSurvivor`;
    await instance
      .put(endpoint, payload)
      .then((response) => {
        dispatch(updateSurvivorSuccess(response.data));
      })
      .catch((error) => {
        console.error("Update error:", error.response?.data || error.message);
        dispatch(updateSurvivorError());
      });
  };

  // Delete Survivor
  const deleteSurvivorbyId = async (SurvivorId: string) => {
    dispatch(deleteSurvivorPending());
    const endpoint = `/api/services/app/Survivor/Delete?Id=${SurvivorId}`;
    await instance
      .delete(endpoint)
      .then((response) => {
        dispatch(deleteSurvivorSuccess(response.data));
      })
      .catch((error) => {
        console.error("Error deleting Survivor:", error);
        dispatch(deleteSurvivorSuccess(error.data));
      });
  };

  return (
    <SurvivorStateContext.Provider value={state}>
      <SurvivorActionContext.Provider
        value={{
          getCurrentSurvivor,
          registerSurvivor,
          getSurvivors,
          getSurvivor,
          updateSurvivor,
          deleteSurvivorbyId,
        }}
      >
        {children}
      </SurvivorActionContext.Provider>
    </SurvivorStateContext.Provider>
  );
};

export const useSurvivorState = () => {
  const context = useContext(SurvivorStateContext);
  if (!context) {
    throw new Error("useSurvivorState must be used within a SurvivorProvider");
  }
  return context;
};

export const useSurvivorActions = () => {
  const context = useContext(SurvivorActionContext);
  if (!context) {
    throw new Error(
      "SurvivorActionContext must be used within a SurvivorProvider"
    );
  }
  return context;
};
