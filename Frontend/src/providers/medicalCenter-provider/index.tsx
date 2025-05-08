"use client";
import { IMedicalCentre } from "./models";
import {
  INITIAL_STATE,
  MedicalCentreActionContext,
  MedicalCentreStateContext,
} from "./context";
import { useContext, useReducer } from "react";
import {
  getMedicalCentresPending,
  getMedicalCentresSuccess,
  getMedicalCentresError,
} from "./actions";
import axios from "axios";
import { ILocation } from "../../interfaces/interfaces"; // Import the ILocation interface
import { MedicalCentreReducer } from "./reducer";

// Define the provider component
export const MedicalCentreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(MedicalCentreReducer, INITIAL_STATE);

  //Fetch medical centres based on ILocation
  const getMedicalCentres = async (ILocation: ILocation): Promise<void> => {
    dispatch(getMedicalCentresPending());
    
    // Backend URL (no need to pass radius as it is fixed in the backend)
    const endpoint = `https://localhost:44311/api/services/app/MedicalFacility/GetNearbyFacilitiesAsync?Latitude=-25.740&Longitude=28.218`;
    
    try {
      const response = await axios.get<IMedicalCentre[]>(endpoint);
      dispatch(getMedicalCentresSuccess(response.data)); // Dispatch success with fetched data
    } catch (error) {
      console.error(error);
      dispatch(getMedicalCentresError()); // Dispatch error if request fails
    }
  };
// const getMedicalCentres = async (location: ILocation) => {
//     try {
//       const response = await axios.get(
//         "https://localhost:44311/api/services/app/MedicalFacility/GetNearbyFacilitiesAsync",
//         {
//           params: {
//             Latitude: -25.740,
//             Longitude: 28.218,
//           },
//         }
//       );
  
//       // Dispatch to state/store
//       dispatch({ type: "SET_MEDICAL_CENTRES", payload: response.data.result });
//     } catch (error) {
//       console.error("Failed to fetch medical centres", error);
//     }
//   };
  
  return (
    <MedicalCentreStateContext.Provider value={state}>
      <MedicalCentreActionContext.Provider value={{ getMedicalCentres }}>
        {children}
      </MedicalCentreActionContext.Provider>
    </MedicalCentreStateContext.Provider>
  );
};

export const useMedicalCentreState = () => {
  const context = useContext(MedicalCentreStateContext);
  if (!context) {
    throw new Error(
      "useMedicalCentreState must be used within a MedicalCentreProvider"
    );
  }
  return context;
};

export const useMedicalCentreActions = () => {
  const context = useContext(MedicalCentreActionContext);
  if (!context) {
    throw new Error(
      "useMedicalCentreActions must be used within a MedicalCentreProvider"
    );
  }
  return context;
};
