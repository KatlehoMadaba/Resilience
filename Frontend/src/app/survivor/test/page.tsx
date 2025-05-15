// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { startConnection, onReceiveTaxiUpdate } from "../../lib/signalr";
import { IChatMessage } from "@/providers/chat-provider/models";

export default function HomePage() {
  const [messages, setMessages] = useState<IChatMessage[]>([]);

  useEffect(() => {
    const init = async () => {
      await startConnection();

      onReceiveTaxiUpdate((chatDto) => {
        console.log("Taxi Update Received:", chatDto);
        setMessages((prev) => [...prev, chatDto]);
      });
    };

    init();
  }, []);

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Live Taxi Updates</h1>
      <div style={{ marginBottom: "1rem" }}>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.receiverPersonId}:</strong> {msg.content}
          </div>
        ))}
      </div>
    </main>
  );
}
