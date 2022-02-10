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
 align-items: center;
  width: 345px
  height:100%;
  gap: 50px;
  flex-direction: column;

  ul {
    list-style-type: none;
  }

  li {
    margin: 20px;
  }
`;

export const TemplateHeader = styled.header`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: space-evenly;
  align-items: center;

  font-size: 36px;
  font-weight: bold;
`;

export const SearchBar = styled.div`
  width: 513px;
  height: 60px;
  border-radius: 16px;
  padding: 2px 32px 2px 24px;
  background-color: #fafafa;
  input {
    border: none;
    outline: none;
    background-color: #fafafa;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a098ae;
`;

export const TemplateArea = styled.section`
  display: flex;
  width: fit-content;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const ChildrenContainer = styled.section`
  background-color: #e5e5e5;
  width: 100%;
  height: 100%;
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
  height: 32px;
  width: 32px;
  color: #4cbc9a;
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

export const Placeholder = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background-color: #a098ae;
`;

export const IconBox = styled.div`
  width: 60px;
  height: 60px;
`;
