"use client";
import { createAction } from "redux-actions";
import { IReportStateContext } from "./context";
import { ISexualAssaultReport } from "./models";

// Enum defining the actions for creating a report
export enum ReportActionEnums {
  createReportPending = "CREATE_REPORT_PENDING",
  createReportSuccess = "CREATE_REPORT_SUCCESS",
  createReportError = "CREATE_REPORT_ERROR",
  resetReportState = "RESET_REPORT_STATE",
}

// CREATE REPORT ACTIONS
export const createReportPending = createAction<IReportStateContext>(
  ReportActionEnums.createReportPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createReportSuccess = createAction<IReportStateContext, ISexualAssaultReport>(
  ReportActionEnums.createReportSuccess,
  (report: ISexualAssaultReport) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    report,
  })
);

export const createReportError = createAction<IReportStateContext>(
  ReportActionEnums.createReportError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const resetReportState = createAction<IReportStateContext>(
  ReportActionEnums.resetReportState,
  () => ({ isPending: false, isSuccess: false, isError: false })
);
