import styled from "styled-components";
import { ArrowCircleUp } from "@styled-icons/evaicons-solid/ArrowCircleUp";
import { RadioCircle } from "@styled-icons/boxicons-regular/RadioCircle";
export const CalendarAndMonitoring = styled.section`
  display: flex;
  padding: 30px 40px 30px 40px;
  background-color: #ffffff;
  border-radius: 18px;

  gap: 20px;
  justify-content: center;
`;

export const CalendarContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const CalendarHeader = styled.div`
  display: flex;
  gap: 30px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

export const Arrow = styled.span`
  color: #a098ae;
  font-size: 24px;
`;

export const CalendarBody = styled.div`
  display: flex;
`;

export const Table = styled.table`
  border-spacing: 5px;
  border-collapse: separate;
`;

export const TR = styled.tr`
  display: flex;
  gap: 10px;
`;
export const TD = styled.td`
  font-size: 18px;
  border-radius: 9px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  width: 80px;
  height: 40px;

  color: ${(props) =>
    props.day === "Sunday"
      ? "#FC6B57"
      : props.day === "OtherMonth"
      ? "#A098AE"
      : props.day === "onGoing"
      ? "#ffffff"
      : props.day === "done"
      ? "#ffffff"
      : "#374557"};

  background-color: ${(props) =>
    props.status === "done"
      ? "#4CBC9A"
      : props.status === "onGoing"
      ? "#FEC64F"
      : ""};
`;

export const TH = styled.th`
  font-size: 18px;
  text-align: center;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  color: ${(props) => (props.day === "Sunday" ? "#FC6B57" : "#A098AE")};
`;

export const MonitoringSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const MonitoringText = styled.p`
  font-size: 14px;
  color: #a098ae;
  text-align: center;
`;

export const MonitoringStatus = styled.div`
  width: 260px;
  display: flex;
  justify-content: space-around;
  gap: 5px;
`;

export const ProgressBar = styled.div`
  text-align: center;
`;

export const Bar = styled.div`
  width: 260px;
  height: 130px;
  overflow: hidden;
  margin-bottom: -50px;
`;

export const Progress = styled.div`
  width: 260px;
  height: 260px;
  border: 30px solid #ccc;
  box-sizing: border-box;
  border-radius: 50%;
  border-left-color: #4cbc9a;
`;

export const InsideProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Percentage = styled.span`
  font-size: 36px;
  font-weight: 600;
`;

export const ArrowUp = styled(ArrowCircleUp)`
  width: 25px;
  height: 25px;
  color: #4cbc9a;
`;

export const Circle = styled(RadioCircle)`
  height: 15px;
  width: 15px;
  font-weight: bold;
  color: ${(props) => props.color};
`;
