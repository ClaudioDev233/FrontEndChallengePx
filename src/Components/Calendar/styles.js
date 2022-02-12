import styled from "styled-components";

export const CalendarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 40px 30px 40px;
  background-color: #ffffff;
  border-radius: 18px;
  margin: 20px;
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

export const TD = styled.td`
  font-size: 18px;
  border-radius: 16px;
  text-align: center;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  padding: 5px;
  color: ${(props) =>
    props.day === "Sunday"
      ? "#FC6B57"
      : props.day === "OtherMonth"
      ? "#A098AE"
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
