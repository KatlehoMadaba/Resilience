"use client"
import { useState } from "react";
import ChatInterface from "@/components/chat/ChatInterface";
import ProfessionalContacts from "@/components/chat/ProfessionalContacts";

const HumanTherapist = () => {
  const [selectedPersonId, setSelectedPersonId] = useState<string>("");

  return (
    <div>
      {selectedPersonId && <ChatInterface personId={selectedPersonId} />}
      <ProfessionalContacts onSelectPerson={setSelectedPersonId} />
    </div>
  );
};

export default HumanTherapist;
