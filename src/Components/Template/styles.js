import styled from "styled-components";
import { CalendarFill } from "@styled-icons/bootstrap/CalendarFill";
import activity from "../../Assets/Images/activity.png";
export const TemplateContainer = styled.section`
  display: flex;
  flex-direction: row;
`;

export const TemplateMenu = styled.section`
  display: flex;
  flex-direction: column;
  ul {
    list-style-type: none;
  }

  li {
    margin: 20px;
  }
`;

export const TemplateHeader = styled.header`
  font-size: 30px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 252px;
  height: 64px;
  border-radius: 20px;

  background-color: #4cbc9a;
  color: white;
`;

export const CalendarIcon = styled(CalendarFill)`
  height: 32px;
  width: 32px;
`;

export const ActivityIcon = styled(activity)`
  height: 32px;
  width: 32px;
`;
