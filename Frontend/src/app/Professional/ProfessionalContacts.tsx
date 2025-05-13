import React, { useEffect } from "react";
import {
  useProfessionalActions,
  useProfessionalState,
} from "@/providers/professionals-provider";

interface ProfessionalContactsProps {
  onSelectPerson: (id: string) => void;
}

const ProfessionalContacts: React.FC<ProfessionalContactsProps> = ({
  onSelectPerson,
}) => {
  const { getProfessionals } = useProfessionalActions();
  const { Professionals } = useProfessionalState();

  useEffect(() => {
    if (!Professionals || Professionals.length === 0) {
      getProfessionals();
    }
  }, []);

  return (
    <div>
      {Professionals?.length ? (
        Professionals.map((professional) => (
          <div
            key={professional.id}
            onClick={() => onSelectPerson(professional.id)}
          >
            <h3>{professional.userName}</h3>
            <p>{professional.profession}</p>
          </div>
        ))
      ) : (
        <p>No professionals available.</p>
      )}
    </div>
  );
};

export default ProfessionalContacts;
