"use client";
import { createAction } from "redux-actions";
import { ISexualAssaultReportStateContext } from "./context";
import { ISexualAssaultReport } from "./models";

// Enum defining the actions for creating a report
export enum SexualAssaultReportActionEnums {
  createSexualAssaultReportPending = "CREATE_REPORT_PENDING",
  createSexualAssaultReportSuccess = "CREATE_REPORT_SUCCESS",
  createSexualAssaultReportError = "CREATE_REPORT_ERROR",
  updateSexualAssaultReportPending = "UPDATE_REPORT_PENDING",
  updateSexualAssaultReportSuccess = "UPDATE_REPORT_SUCCESS",
  updateSexualAssaultReportError = "UPDATE_REPORT_ERROR",
}

// CREATE REPORT ACTIONS
export const createSexualAssaultReportPending = createAction<ISexualAssaultReportStateContext>(
  SexualAssaultReportActionEnums.createSexualAssaultReportPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createSexualAssaultReportSuccess = createAction<
  ISexualAssaultReportStateContext
>(SexualAssaultReportActionEnums.createSexualAssaultReportSuccess, () => ({
  isPending: false,
  isSuccess: true,
  isError: false,
}));

export const createSexualAssaultReportError = createAction<ISexualAssaultReportStateContext>(
  SexualAssaultReportActionEnums.createSexualAssaultReportError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const updateSexualAssaultReportPending = createAction<ISexualAssaultReportStateContext>(
  SexualAssaultReportActionEnums.createSexualAssaultReportPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const updateSexualAssaultReportSuccess = createAction<
  ISexualAssaultReportStateContext,
  ISexualAssaultReport
>(SexualAssaultReportActionEnums.createSexualAssaultReportSuccess, (report: ISexualAssaultReport) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  report,
}));

export const updateSexualAssaultReportError = createAction<ISexualAssaultReportStateContext>(
  SexualAssaultReportActionEnums.createSexualAssaultReportError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
