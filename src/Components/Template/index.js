import {
  TemplateMenu,
  TemplateContainer,
  Button,
  CalendarIcon,
  ActivityIcon,
  TemplateHeader,
  MagnifyingIcon,
  ChatIcon,
  NotificationIcon,
  SettingsIcon,
} from "./styles";
import Logo from "../../Assets/Images/logo.png";

export default function Template() {
  return (
    <>
      <TemplateContainer>
        <nav>
          <section>
            <img src={Logo} alt="Logo"></img>
          </section>
          <TemplateMenu>
            <ul>
              <li>
                <Button>
                  <CalendarIcon></CalendarIcon>
                  <p>Agendamento</p>
                </Button>
              </li>
              <li>
                <Button>
                  <ActivityIcon></ActivityIcon>
                  <p>Todos os Agendamentos</p>
                </Button>
              </li>
            </ul>
          </TemplateMenu>
        </nav>
        <TemplateHeader>
          <p>Agendamento</p>
          <div>
            <MagnifyingIcon></MagnifyingIcon> <input type="text"></input>
            <div>
              <ChatIcon></ChatIcon> <NotificationIcon></NotificationIcon>
              <SettingsIcon></SettingsIcon>
            </div>
          </div>
        </TemplateHeader>
      </TemplateContainer>
    </>
  );
}
