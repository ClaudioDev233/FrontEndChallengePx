import styled from "styled-components";
import { CalendarFill } from "@styled-icons/bootstrap/CalendarFill";
import { Clock } from "@styled-icons/fluentui-system-filled/Clock";

export const SheduleCard = styled.div`
  display: flex;
  align-items: center;
  width: 722px;
  height: 96px;
  background-color: #ffffff;
  border-radius: 16px;
  gap: 20px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
`;

export const CardTitle = styled.div`
  display: flex;
  gap: 50px;
`;

export const CardDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #a098ae;
`;

export const CardColor = styled.div`
  width: 16px;
  height: 96px;
  border-radius: 16px 0 0 16px;
  background-color: ${(props) =>
    props.color === "C"
      ? "#4cbc9a"
      : props.color === "B"
      ? "#FEC64F"
      : "#FC6B57"};
`;

export const Chevron = styled.span`
  font-size: 30px;
  color: ${(props) =>
    props.color === "C"
      ? "#4cbc9a"
      : props.color === "B"
      ? "#FEC64F"
      : "#FC6B57"};

  margin-left: 30px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
export const Dates = styled.p`
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #a098ae;
`;
export const Hours = styled.p`
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #a098ae;
`;

export const CalendarIcon = styled(CalendarFill)`
  height: 15px;
  width: 15px;
`;

export const ClockIcon = styled(Clock)`
  height: 15px;
  width: 15px;
`;
