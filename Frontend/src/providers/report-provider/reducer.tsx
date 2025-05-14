"use client";
import { handleActions } from "redux-actions";
import { SexualAssaultReportActionEnums } from "./actions";
import { ISexualAssaultReportStateContext, INITIAL_STATE } from "./context";

// Define the reducer for handling report actions
export const SexualAssaultReportReducer = handleActions<
  ISexualAssaultReportStateContext,
  ISexualAssaultReportStateContext
>(
  {
    [SexualAssaultReportActionEnums.createSexualAssaultReportPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SexualAssaultReportActionEnums.createSexualAssaultReportSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SexualAssaultReportActionEnums.createSexualAssaultReportError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SexualAssaultReportActionEnums.updateSexualAssaultReportPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SexualAssaultReportActionEnums.updateSexualAssaultReportSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SexualAssaultReportActionEnums.updateSexualAssaultReportError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
