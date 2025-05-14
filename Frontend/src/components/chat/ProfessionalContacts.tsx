
"use client";
import React, { useEffect } from "react";
import {
  useProfessionalActions,
  useProfessionalState,
} from "@/providers/professionals-provider";
import { Spin, Card } from "antd";

interface Props {
  onSelect: (id: string) => void;
}

const ProfessionalContacts: React.FC<Props> = ({ onSelect }) => {
  const { getProfessionals } = useProfessionalActions();
  const { Professionals, isPending } = useProfessionalState();

  useEffect(() => {
    if (!Professionals || Professionals.length === 0) {
      getProfessionals();
    }
  }, []);

  return (
    <div>
      <h3>Select a Professional</h3>
      {isPending && <Spin />}
      {Professionals && Professionals.length > 0 ? (
        Professionals.map((professional) => (
          <Card
            key={professional.id}
            onClick={() => onSelect(professional.id)}
            hoverable
            style={{ marginBottom: 8 }}
          >
            <h4>{professional.userName || "untitled"}</h4>
            <p>{professional.profession}</p>
            <p>{professional.organization}</p>
          </Card>
        ))
      ) : (
        <p>No Professionals available.</p>
      )}
    </div>
  );
};

export default ProfessionalContacts;
