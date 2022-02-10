import {
  TemplateMenu,
  TemplateContainer,
  Button,
  CalendarIcon,
  ActivityIcon,
  TemplateHeader,
  ChatIcon,
  NotificationIcon,
  SettingsIcon,
  HeaderMenu,
  Placeholder,
  ChildrenContainer,
  IconBox,
  TemplateArea,
} from "./styles";

import SearchBar from "../SearchInput/index";

import Logo from "../../Assets/Images/logo.png";

export default function Template({ children }) {
  return (
    <>
      <TemplateContainer>
        <nav>
          <TemplateMenu>
            <section>
              <img src={Logo} alt="Logo"></img>
            </section>
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

        <TemplateArea>
          <TemplateHeader>
            <p>Agendamento</p>

            <SearchBar type="text" placeholder="Coiso"></SearchBar>

            <HeaderMenu>
              <IconBox>
                <ChatIcon />
              </IconBox>

              <IconBox>
                <NotificationIcon />
              </IconBox>

              <IconBox>
                <SettingsIcon />
              </IconBox>

              <Placeholder></Placeholder>
            </HeaderMenu>
          </TemplateHeader>

          <ChildrenContainer>{children}</ChildrenContainer>
        </TemplateArea>
      </TemplateContainer>
    </>
  );
}
