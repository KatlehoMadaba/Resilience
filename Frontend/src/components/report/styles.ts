import styled from "styled-components";
import { Typography } from "antd";

export const Container = styled.div`
  padding: 24px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const SectionTitle = styled(Typography.Title)`
  color: #9E9AC8 !important;
  margin-bottom: 16px;
  text-align: center;
`;
