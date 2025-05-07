import { handleActions } from "redux-actions";
import { INITIAL_STATE, ISurvivorStateContext } from "./context";
import { SurvivorActionEnums } from "./actions";

export const SurvivorReducer = handleActions<
  ISurvivorStateContext,
  ISurvivorStateContext
>(
  {
    [SurvivorActionEnums.getCurrentSurvivorPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.getCurrentSurvivorSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.getCurrentSurvivorError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.getSurvivorsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.getSurvivorsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.getSurvivorsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.getSurvivorPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.getSurvivorSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.getSurvivorError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.registerSurvivorPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.registerSurvivorSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.registerSurvivorError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.updateSurvivorPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.updateSurvivorSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.updateSurvivorError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.deleteSurvivorPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.deleteSurvivorSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SurvivorActionEnums.deleteSurvivorError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
