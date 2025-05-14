"use client";

import React, { useEffect, useState } from "react";
import ChatInterface from "@/components/chat/ChatInterface";
import ProfessionalContacts from "@/components/chat/ProfessionalContacts";
import SurvivorContacts from "@/components/chat/SurviorContacts";
import { getRole } from "@/utils/decoder";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { Row, Col, Card, Typography } from "antd";

const { Text } = Typography;

interface Contact {
  id: string;
  displayName?: string;
  name?: string;
  surname?: string;
}

const ChatSession = () => {
  const [userRole, setUserRole] = useState("");
  const [selectedPersonId, setSelectedPersonId] = useState<string | null>(null);
  const [selectedPersonName, setSelectedPersonName] = useState<
    string | undefined
  >(undefined);

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

  const handleSelectContact = (person: Contact) => {
    setSelectedPersonId(person.id);
    const name =
      person.displayName ||
      `${person.name ?? ""} ${person.surname ?? ""}`.trim();
    setSelectedPersonName(name || "Unnamed");
  };

  return (
    <LayoutWrapper>
      <Row gutter={24} style={{ padding: 24 }}>
        <Col xs={24} sm={8} md={6} lg={6}>
          <Card
            title="Contacts"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            {userRole === "professional" ? (
              <SurvivorContacts onSelect={handleSelectContact} />
            ) : (
              <ProfessionalContacts onSelect={handleSelectContact} />
            )}
          </Card>
        </Col>

        <Col xs={24} sm={16} md={18} lg={18}>
          <Card title="Chat">
            {selectedPersonId ? (
              <ChatInterface
                personId={selectedPersonId}
                personName={selectedPersonName}
              />
            ) : (
              <Text type="secondary">Select a contact to begin chatting.</Text>
            )}
          </Card>
        </Col>
      </Row>
    </LayoutWrapper>
  );
};

export default ChatSession;
