"use client";
import { createAction } from "redux-actions";
import { ITestimonyStateContext } from "./context";
import { ITestimony } from "./models";

// Enum defining the actions for creating a Testimony
export enum TestimonyActionEnums {
  createTestimonyPending = "CREATE_Testimony_PENDING",
  createTestimonySuccess = "CREATE_Testimony_SUCCESS",
  createTestimonyError = "CREATE_Testimony_ERROR",
  getTestimoniesPending = "GET_Testimonies_PENDING",
  getTestimoniesSuccess = "GET_Testimonies_SUCCESS",
  getTestimoniesError = "GET_Testimonies_ERROR",
}

// CREATE Testimony ACTIONS
export const createTestimonyPending = createAction<ITestimonyStateContext>(
  TestimonyActionEnums.createTestimonyPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createTestimonySuccess = createAction<
  ITestimonyStateContext,
  ITestimony
>(TestimonyActionEnums.createTestimonySuccess, (Testimony: ITestimony) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  Testimony,
}));

export const createTestimonyError = createAction<ITestimonyStateContext>(
  TestimonyActionEnums.createTestimonyError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
export const getTestimoniesPending = createAction<ITestimonyStateContext>(
  TestimonyActionEnums.createTestimonyPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getTestimoniesSuccess = createAction<
  ITestimonyStateContext,
  ITestimony[]
>(TestimonyActionEnums.getTestimoniesSuccess, (testimonies: ITestimony[]) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  testimonies,
}));

export const getTestimoniesError = createAction<ITestimonyStateContext>(
  TestimonyActionEnums.createTestimonyError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
