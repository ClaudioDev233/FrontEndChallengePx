import styled from "styled-components";
import { CalendarFill } from "@styled-icons/bootstrap/CalendarFill";
import { Activity } from "@styled-icons/evaicons-solid/Activity";
import { MagnifyingGlass } from "@styled-icons/foundation/MagnifyingGlass";
import { Notifications } from "@styled-icons/ionicons-solid/Notifications";
import { ChatTextFill } from "@styled-icons/bootstrap/ChatTextFill";
import { Settings } from "@styled-icons/fluentui-system-filled/Settings";

export const TemplateContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  color: #374557;
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
  width: 100%;
  display: flex;
  font-size: 36px;
  font-weight: bold;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 252px;
  height: 64px;
  font-size: 18px;
  color: #a098ae;
  border-radius: 20px;

  cursor: pointer;

  span {
    width: 30px;
    margin-left: 10px;
    align-items: center;
  }
  p {
    width: 150px;
  }
  &:hover {
    color: #ffffff;
    background-color: #4cbc9a;
  }
`;

export const CalendarIcon = styled(CalendarFill)`
  height: 32px;
  width: 32px;
`;

export const ActivityIcon = styled(Activity)`
  height: 32px;
  width: 32px;
`;

export const MagnifyingIcon = styled(MagnifyingGlass)`
  height: 24px;
  width: 24px;
`;

export const ChatIcon = styled(ChatTextFill)`
  height: 24px;
  width: 24px;
`;

export const NotificationIcon = styled(Notifications)`
  height: 24px;
  width: 24px;
`;

export const SettingsIcon = styled(Settings)`
  height: 24px;
  width: 24px;
`;
