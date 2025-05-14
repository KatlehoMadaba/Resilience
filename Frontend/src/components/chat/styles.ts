import styled from "styled-components";
import { Button } from "antd";

export const ChatWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const ChatContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  border: 1px solid #d9d9e6;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 70vh;
  
  @media (min-width: 768px) {
    max-width: 30%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: 60vh;
  padding-right: 4px;
`;

export const MessageBubble = styled.div<{ $isOwn: boolean }>`
  background-color: ${({ $isOwn }) => ($isOwn ? "#F0F2F5" : "#A5D5E8")};
  border-radius: 12px;
  padding: 10px;
  margin: 8px 0;
  max-width: 80%;
  word-break: break-word;
`;

export const SendButton = styled(Button)`
  align-self: flex-end;
  margin-top: 0.5rem;
`;