import ChatInterface from "@/components/chat/ChatInterface";
import ProfessionalContacts from "@/components/chat/ProfessionalContacts";
import SurviorContacts from "@/components/chat/SurviorContacts";
import React from "react";
import { useSurvivorActions } from "@/providers/survivors-provider/index";
import { useSurvivorState } from "@/providers/survivors-provider/index";
import { useSurvState } from '@/providers/professionals-provider';
import { useState } from "react";

const HumanTherapist = () => {
  const { Survivor } = useSurvivorState();
  const { getCurrentSurvivor } = useSurvivorActions();
  const [loggedInUser,setLoggedinUser]=useState("professional")

  return (
    <div>
      <ChatInterface />
      <ProfessionalContacts />
      <SurviorContacts/>
    </div>
  );
};

export default HumanTherapist;
