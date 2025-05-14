"use client";
import { createContext } from "react";
import { ISexualAssaultReport } from "./models";

// Context shape interface
export interface ISexualAssaultReportStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  report?: ISexualAssaultReport;
}

// SexualAssaultReport action context interface
export interface ISexualAssaultReportActionContext {
  createSexualAssaultReport: (report: ISexualAssaultReport) => void;
  //getSexualAssaultReport: (reportId: string) => void;
  //deleteSexualAssaultReportById: (reportId: string) => void;
  updateSexualAssaultReport: (
    SexualAssaultReport: ISexualAssaultReport
  ) => void;
}

// Initial state with default values
export const INITIAL_STATE: ISexualAssaultReportStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

// Create the state context and the action context
export const SexualAssaultReportStateContext =
  createContext<ISexualAssaultReportStateContext>(INITIAL_STATE);
export const SexualAssaultReportActionContext = createContext<
  ISexualAssaultReportActionContext | undefined
>(undefined);
