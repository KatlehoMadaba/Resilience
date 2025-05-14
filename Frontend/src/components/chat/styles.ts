import styled from "styled-components";
import { Typography, Button, List } from "antd";

export const ChatContainer = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(158, 154, 200, 0.15);
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;

export const Title = styled(Typography.Title)`
  && {
    margin-bottom: 0;
    color: #333340;
  }
`;

export const SendButton = styled(Button)`
  align-self: flex-end;
  margin-top: 8px;
`;

interface MessageProps {
    $isOwn?: boolean;
}

export const MessageBubble = styled(List.Item) <MessageProps>`
  background-color: ${(props) => (props.$isOwn ? "#F5F3FF" : "#F0F2F5")};
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;
