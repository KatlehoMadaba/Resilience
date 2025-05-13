"use client";
import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 16px;
  background-color: #f0f2f5;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 16px;
`;

export const MessageWrapper = styled.div<{ align: "left" | "right" }>`
  align-self: ${(props) =>
    props.align === "right" ? "flex-end" : "flex-start"};
  max-width: 75%;
  display: flex;
  flex-direction: column;
  text-align: ${(props) => props.align};
`;

export const MessageBubble = styled.div<{ isSender: boolean }>`
  padding: 10px 14px;
  border-radius: 16px;
  background-color: ${(props) => (props.isSender ? "#a5d5e8" : "#9e9ac8")};
  color: ${(props) => (props.isSender ? "#333" : "white")};
  font-size: 14px;
  word-wrap: break-word;
`;

export const Timestamp = styled.div`
  font-size: 10px;
  margin-top: 4px;
  opacity: 0.6;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #e8e8f0;
  background-color: white;

  textarea {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

export const Spinner = styled.div`
  text-align: center;
  padding-top: 50px;
`;
