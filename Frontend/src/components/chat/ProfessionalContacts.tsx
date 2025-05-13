"use client"
import React, { useEffect } from "react";
import { useProfessionalActions } from "@/providers/professionals-provider";
import { useProfessionalState } from "@/providers/professionals-provider";
const ProfessionalContacts = () => {
  const { getProfessionals } = useProfessionalActions();
  const {
    getProfessionalsSuccess,
    getProfessionalsError,
    getCurrentProfessionalPending,
    Professionals,
  } = useProfessionalState();
  useEffect(() => {
    if (!Professionals || Professionals.length === 0) {
      getProfessionals();
    }
  }, []);
  return (
    <div>
      {Professionals && Professionals.length > 0 ? (
        Professionals.map((professional, index) => (
          <div key={index}>
            <h3>{professional.userName || "untitled"}</h3>
            <p>{professional.isActive || "no content avail"}</p>
            <p>{professional.organization || "no content avail"}</p>
            <p>{professional.profession || "no content avail"}</p>
            <p>{professional.sex || "no content avail"}</p>
          </div>
        ))
      ) : (
        <p>No Professionals available.</p>
      )}
    </div>
  );
};

export default ProfessionalContacts;
