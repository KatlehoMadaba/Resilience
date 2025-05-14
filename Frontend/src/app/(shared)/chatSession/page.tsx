"use client";
import ChatInterface from "@/components/chat/ChatInterface";
import ProfessionalContacts from "@/components/chat/ProfessionalContacts";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

// interface Props {
//   params: {
//     personId: string;
//   };
// }

// export default function ChatPage({ params }: Props) {
//   return <ChatInterface personId={params.personId} />;
// }

import React from "react";

const ChatSession = () => {
  return (
    <LayoutWrapper>
      <div>
        <ChatInterface />
        <ProfessionalContacts />
      </div>
    </LayoutWrapper>
  );
};

export default ChatSession;
