"use client"
import ChatInterface from "@/components/chat/ChatInterface";
import ProfessionalContacts from "@/components/chat/ProfessionalContacts";
import SurviorContacts from "@/components/chat/SurviorContacts";
import React, { useEffect, useState } from "react";
import { getRole } from "@/utils/decoder";
const HumanTherapist = () => {
  const token = sessionStorage.getItem("jwt");
  const [userRole, setUserRole] = useState("");

  //showing contacts based on role of the user
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
      <ChatInterface />
      {/* {rendering contacts based on the role} */}
      {userRole === "professional" ? (
        <SurviorContacts />
      ) : (
        <ProfessionalContacts />
      )}
    </>
  );
};

export default HumanTherapist;
