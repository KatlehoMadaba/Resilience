"use client";
import { createContext } from "react";
import { ISexualAssaultReport } from "./models";

// Context shape interface
export interface IReportStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  report?: ISexualAssaultReport;
}

// Report action context interface
export interface IReportActionContext {
  createReport: (report: ISexualAssaultReport) => Promise<void>;
  resetReportStatus: () => void;
}

// Initial state with default values
export const INITIAL_STATE: IReportStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

// Create the state context and the action context
export const ReportStateContext = createContext<IReportStateContext>(INITIAL_STATE);
export const ReportActionContext = createContext<IReportActionContext | undefined>(undefined);
