import ChatInterface from "@/components/chat/ChatInterface";

interface Props {
  params: {
    personId: string;
  };
}

export default function ChatPage({ params }: Props) {
  return <ChatInterface personId={params.personId} />;
}
