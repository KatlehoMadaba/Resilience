"use client";

import React, { useEffect, useState } from "react";
import ChatInterface from "@/components/chat/ChatInterface";
import ProfessionalContacts from "@/components/chat/ProfessionalContacts";
import SurvivorContacts from "@/components/chat/SurviorContacts";
import { getRole } from "@/utils/decoder";

const ChatSession = () => {
  const [userRole, setUserRole] = useState("");
  const [selectedPersonId, setSelectedPersonId] = useState<string | null>(null);

  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("jwt") : null;

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const role = await getRole(token);
        setUserRole(role);
      } catch (error) {
        console.error("Error getting user role:", error);
        setUserRole("survivor");
      }
    };

    fetchUserRole();
  }, [token]);

  return (
    <>
      {/* Chat UI */}
      {selectedPersonId ? (
        <ChatInterface personId={selectedPersonId} />
      ) : (
        <p>Select a contact to begin chatting.</p>
      )}

      {/* Contacts */}
      {userRole === "professional" ? (
        <SurvivorContacts onSelect={setSelectedPersonId} />
      ) : (
        <ProfessionalContacts onSelect={setSelectedPersonId} />
      )}
    </>
  );
};

export default ChatSession;
