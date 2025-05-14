"use client";
import {
  INITIAL_STATE,
  SexualAssaultReportActionContext,
  SexualAssaultReportStateContext,
} from "./context";
import { useContext, useReducer } from "react";
import {
  createSexualAssaultReportPending,
  createSexualAssaultReportSuccess,
  createSexualAssaultReportError,
  updateSexualAssaultReportPending,
  updateSexualAssaultReportSuccess,
  updateSexualAssaultReportError,
} from "./actions";
import { getAxiosInstance } from "@/utils/axiosInstance";
import { ISexualAssaultReport } from "../../providers/report-provider/models";
import { SexualAssaultReportReducer } from "./reducer";

export const SexualAssaultReportProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    SexualAssaultReportReducer,
    INITIAL_STATE
  );
  const instance = getAxiosInstance();

  const createSexualAssaultReport = async (
    SexualAssaultReport: ISexualAssaultReport
  ) => {
    dispatch(createSexualAssaultReportPending());
    const endpoint = `/api/services/app/SexualAssaultReport/Create`;
    await instance
      .post(endpoint, SexualAssaultReport)
      .then(() => {
        dispatch(createSexualAssaultReportSuccess());
        console.log("its a success..");
      })
      .catch((error) => {
        console.error("Error creating report entry:", error);
        dispatch(createSexualAssaultReportError());
      });
  };
  const updateSexualAssaultReport = async (
    SexualAssaultReport: ISexualAssaultReport
  ) => {
    dispatch(updateSexualAssaultReportPending());
    const endpoint = `/api/services/app/SexualAssaultReport/Update`;
    await instance
      .post(endpoint, SexualAssaultReport)
      .then((response) => {
        dispatch(updateSexualAssaultReportSuccess(response?.data));
      })
      .catch((error) => {
        console.error("Error creating report entry:", error);
        dispatch(updateSexualAssaultReportError());
      });
  };

  return (
    <SexualAssaultReportStateContext.Provider value={state}>
      <SexualAssaultReportActionContext.Provider
        value={{ createSexualAssaultReport, updateSexualAssaultReport }}
      >
        {children}
      </SexualAssaultReportActionContext.Provider>
    </SexualAssaultReportStateContext.Provider>
  );
};

export const useSexualAssaultReportState = () => {
  const context = useContext(SexualAssaultReportStateContext);
  if (!context) {
    throw new Error(
      "useSexualAssaultReportState must be used within a SexualAssaultReportProvider"
    );
  }
  return context;
};

export const useSexualAssaultReportActions = () => {
  const context = useContext(SexualAssaultReportActionContext);
  if (!context) {
    throw new Error(
      "useSexualAssaultReportActions must be used within a SexualAssaultReportProvider"
    );
  }
  return context;
};
