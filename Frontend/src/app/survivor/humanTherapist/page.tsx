import ChatInterface from "@/components/chat/ChatInterface";

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
  return <div><ChatInterface/></div>;
};

export default HumanTherapist;
