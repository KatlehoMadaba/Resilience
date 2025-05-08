"use client";
import { handleActions } from "redux-actions";
import { ReportActionEnums } from "./actions";
import { IReportStateContext, INITIAL_STATE } from "./context";

// Define the reducer for handling report actions
export const ReportReducer = handleActions<IReportStateContext, IReportStateContext>(
  {
    [ReportActionEnums.createReportPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ReportActionEnums.createReportSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ReportActionEnums.createReportError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ReportActionEnums.resetReportState]: () => ({
      ...INITIAL_STATE,
    }),
  },
  INITIAL_STATE
);
