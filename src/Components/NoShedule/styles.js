import styled from "styled-components";
import { ThumbUp } from "@styled-icons/material/ThumbUp";
export const NoSheduleCard = styled.div`
  display: flex;
  align-items: center;
  width: 722px;
  height: 96px;
  background-color: #fc6b57;
  color: #ffffff;
  border-radius: 16px;
  gap: 20px;
`;

export const AttentionDiv = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 0.5px;
  gap: 5px;
  h1 {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
  }
`;

export const ThumbIcon = styled(ThumbUp)`
  margin: 20px;
  width: 45px;
  height: 45px;
`;
