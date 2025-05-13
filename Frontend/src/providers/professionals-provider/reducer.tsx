"use client";
import { handleActions } from "redux-actions";
import { INITIAL_STATE, IProfessionalStateContext } from "./context";
import { ProfessionalActionEnums } from "./actions";

export const ProfessionalReducer = handleActions<IProfessionalStateContext>(
  {
    [ProfessionalActionEnums.getProfessionalsPending]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.getProfessionalsSuccess]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.getProfessionalsError]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),

    [ProfessionalActionEnums.getProfessionalPending]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.getProfessionalSuccess]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.getProfessionalError]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),

    [ProfessionalActionEnums.getCurrentProfessionalPending]: (
      state,
      action
    ) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.getCurrentProfessionalSuccess]: (
      state,
      action
    ) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.getCurrentProfessionalError]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),

    [ProfessionalActionEnums.createProfessionalPending]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.createProfessionalSuccess]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.createProfessionalError]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),

    [ProfessionalActionEnums.updateProfessionalPending]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.updateProfessionalSuccess]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.updateProfessionalError]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),

    [ProfessionalActionEnums.deleteProfessionalPending]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.deleteProfessionalSuccess]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.deleteProfessionalError]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),

    [ProfessionalActionEnums.getCurrentPersonIdPending]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.getCurrentPersonIdSuccess]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
    [ProfessionalActionEnums.getCurrentPersonIdError]: (state, action) => ({
      ...state,
      ...(action.payload ?? {}),
    }),
  },
  INITIAL_STATE
);
