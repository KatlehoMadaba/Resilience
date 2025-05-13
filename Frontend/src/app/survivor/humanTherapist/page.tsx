import ChatInterface from "@/components/chat/ChatInterface";
import ProfessionalContacts from "@/components/chat/ProfessionalContacts";

// interface Props {
//   params: {
//     personId: string;
//   };
// }

// export default function ChatPage({ params }: Props) {
//   return <ChatInterface personId={params.personId} />;
// }

import React from "react";

const HumanTherapist = () => {
  return (
    <div>
      <ChatInterface />
      <ProfessionalContacts />
    </div>
  );
};

export default HumanTherapist;
