"use client";
import {
  INITIAL_STATE,
  TestimonyActionContext,
  TestimonyStateContext,
} from "./context";
import { useContext, useReducer } from "react";
import {
  createTestimonyPending,
  createTestimonySuccess,
  createTestimonyError,
} from "./actions";
import { getAxiosInstace } from "@/utils/axiosInstance";
import { ITestimony } from "../../providers/testimony-provider/models";
import { TestimonyReducer } from "./reducer";

export const TestimonyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(TestimonyReducer, INITIAL_STATE);
  const instance = getAxiosInstace();
  const createTestimony = async (Testimony: ITestimony) => {
    dispatch(createTestimonyPending());
    const endpoint = `services/app/Testimony/Create`;
    await instance
      .post(endpoint, Testimony)
      .then((response) => {
        dispatch(createTestimonySuccess(response?.data));
      })
      .catch((error) => {
        console.error("Error fetching medical centres:", error);
        dispatch(createTestimonyError());
      });
  };

  return (
    <TestimonyStateContext.Provider value={state}>
      <TestimonyActionContext.Provider value={{ createTestimony }}>
        {children}
      </TestimonyActionContext.Provider>
    </TestimonyStateContext.Provider>
  );
};

export const useTestimonyState = () => {
  const context = useContext(TestimonyStateContext);
  if (!context) {
    throw new Error(
      "useTestimonyState must be used within a TestimonyProvider"
    );
  }
  return context;
};

export const useTestimonyActions = () => {
  const context = useContext(TestimonyActionContext);
  if (!context) {
    throw new Error(
      "useTestimonyActions must be used within a TestimonyProvider"
    );
  }
  return context;
};
