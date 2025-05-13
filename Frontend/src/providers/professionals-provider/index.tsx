"use client";
import {
  INITIAL_STATE,
  ProfessionalActionContext,
  ProfessionalStateContext,
} from "./context";
import { useContext, useReducer } from "react";
import {
  createProfessionalPending,
  createProfessionalSuccess,
  createProfessionalError,
  getProfessionalsPending,
  getProfessionalsSuccess,
  getProfessionalsError,
  updateProfessionalPending,
  updateProfessionalSuccess,
  updateProfessionalError,
  deleteProfessionalPending,
  deleteProfessionalSuccess,
  deleteProfessionalError,
  getProfessionalPending,
  getProfessionalSuccess,
  getProfessionalError,
  getCurrentProfessionalPending,
  getCurrentProfessionalSuccess,
  getCurrentProfessionalError,
} from "./actions";
import { getAxiosInstace } from "@/utils/axiosInstance";
import {
  IProfessional,
  IProfessionalRegister,
} from "../../providers/professionals-provider/models";
import { ProfessionalReducer } from "./reducer";

export const ProfessionalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ProfessionalReducer, INITIAL_STATE);
  const instance = getAxiosInstace();

  const createProfessional = async (Professional: IProfessionalRegister) => {
    dispatch(createProfessionalPending());
    const endpoint = `/api/services/app/Professional/Create`;
    await instance
      .post(endpoint, Professional)
      .then((response) => {
        dispatch(createProfessionalSuccess(response?.data?.result));
      })
      .catch((error) => {
        console.error("Error fetching medical centres:", error);
        dispatch(createProfessionalError());
      });
  };
  const getProfessionals = async () => {
    dispatch(getProfessionalsPending());
    const endpoint = `/api/services/app/Professional/GetAll`;
    await instance
      .get(endpoint)
      .then((response) => {
          dispatch(getProfessionalsSuccess(response?.data?.result?.items));
          console.log("profs",response.data)
      })
      .catch((error) => {
          console.error("Error fetching Professionals:", error);
          console.log("profs not getting");
          
        dispatch(getProfessionalsError());
      });
  };

  // Update a user
  const updateProfessional = async (user: IProfessional) => {
    dispatch(updateProfessionalPending());
    const endpoint = `/api/services/app/Professional/Update`;

    return instance
      .put(endpoint, user)
      .then((response) => {
        dispatch(updateProfessionalSuccess(response?.data?.result));
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        dispatch(updateProfessionalError());
      });
  };

  // Delete a user
  const deleteProfessional = (id: string) => {
    dispatch(deleteProfessionalPending());
    const endpoint = `/api/services/app/Professional/Delete?input=${id}`;

    return instance
      .delete(endpoint)
      .then((response) => {
        dispatch(deleteProfessionalSuccess(response?.data?.result));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        dispatch(deleteProfessionalError());
      });
  };

  // Get a specific user
  const getProfessional = async (id: string) => {
    dispatch(getProfessionalPending());
    const endpoint = `/api/services/app/Professional/Get?input=${id}`;
    return instance
      .get(endpoint)
      .then((response) => {
        dispatch(getProfessionalSuccess(response?.data?.result));
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        dispatch(getProfessionalError());
      });
  };
  const getCurrentProfessional = async (
    token: string
  ): Promise<IProfessional | null> => {
    dispatch(getCurrentProfessionalPending());
    const endpoint = `/api/services/app/Session/GetCurrentLoginInformations`;
    return instance
      .get(endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response?.data?.result) {
          dispatch(getCurrentProfessionalSuccess(response?.data?.result?.user));
          return response?.data?.result?.user;
        } else {
          console.warn("No user data found in response");
          dispatch(getCurrentProfessionalError());
          return null;
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
        dispatch(getCurrentProfessionalError());
        return null;
      });
  };
  return (
    <ProfessionalStateContext.Provider value={state}>
      <ProfessionalActionContext.Provider
        value={{
          createProfessional,
          getProfessionals,
          updateProfessional,
          getCurrentProfessional,
          getProfessional,
          deleteProfessional,
        }}
      >
        {children}
      </ProfessionalActionContext.Provider>
    </ProfessionalStateContext.Provider>
  );
};

export const useProfessionalState = () => {
  const context = useContext(ProfessionalStateContext);
  if (!context) {
    throw new Error(
      "useProfessionalState must be used within a ProfessionalProvider"
    );
  }
  return context;
};

export const useProfessionalActions = () => {
  const context = useContext(ProfessionalActionContext);
  if (!context) {
    throw new Error(
      "useProfessionalActions must be used within a ProfessionalProvider"
    );
  }
  return context;
};
