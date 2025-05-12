"use client";

import { useEffect, useRef, useState } from "react";
import { Input, Button, Spin } from "antd";
import MessageBubble from "./MessageBubble";
import styles from "./ChatInterface.module.css";
import { fetchMessagesWith, sendMessage } from "@/utils/chat-api";
import { ChatMessage } from "./ChatMessage";
import { IPersonId } from "@/providers/users-providers/models";

export default function ChatInterface({ personId }: IPersonId) {
  //const { } = useUserState();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const loadMessages = async () => {
    setLoading(true);
    try {
      const data = await fetchMessagesWith(personId);
      setMessages(data);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    await sendMessage(personId, input);
    setInput("");
    await loadMessages();
  };

  useEffect(() => {
    loadMessages();
  }, [personId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={styles.chatWrapper}>
      <div className={styles.chatBox}>
        <div className={styles.messagesArea}>
          {loading ? (
            <Spin />
          ) : (
            messages?.map((msg) => (
              <MessageBubble
                key={msg.id}
                content={msg.content}
                isOwn={
                  msg.senderPersonId === personId
                }
              />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className={styles.inputArea}>
          <Input.TextArea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            rows={2}
          />
          <Button type="primary" onClick={handleSend}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
