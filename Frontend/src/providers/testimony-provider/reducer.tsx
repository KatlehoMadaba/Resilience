"use client";
import { handleActions } from "redux-actions";
import { TestimonyActionEnums } from "./actions";
import { ITestimonyStateContext, INITIAL_STATE } from "./context";

// Define the reducer for handling Testimony actions
export const TestimonyReducer = handleActions<
  ITestimonyStateContext,
  ITestimonyStateContext
>(
  {
    [TestimonyActionEnums.createTestimonyPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [TestimonyActionEnums.createTestimonySuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [TestimonyActionEnums.createTestimonyError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [TestimonyActionEnums.getTestimoniesPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [TestimonyActionEnums.getTestimoniesSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [TestimonyActionEnums.getTestimoniesError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
