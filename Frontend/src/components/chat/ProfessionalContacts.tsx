"use client";
import React, { useEffect} from "react";
import { useProfessionalActions } from "@/providers/professionals-provider";
import { useProfessionalState } from "@/providers/professionals-provider";
import { Spin } from "antd";
const ProfessionalContacts = () => {
  const { getProfessionals } = useProfessionalActions();
  const { Professionals, isPending } = useProfessionalState();
  useEffect(() => {
    if (!Professionals || Professionals.length === 0) {
      getProfessionals();
    }
  }, []);
  return (
    <div>
      {isPending && <Spin tip="loading contacts"/>}
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
