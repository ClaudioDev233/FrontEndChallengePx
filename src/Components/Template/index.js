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

import { Link } from "react-router-dom";
export default function Template({ children, title }) {
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
                <Link
                  to={{
                    pathname: "/",
                  }}
                >
                  <Button>
                    <CalendarIcon></CalendarIcon>
                    <p>Agendamento</p>
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/todosAgendamentos",
                  }}
                >
                  <Button>
                    <ActivityIcon></ActivityIcon>
                    <p>Todos os Agendamentos</p>
                  </Button>
                </Link>
              </li>
            </ul>
          </TemplateMenu>
        </nav>

        <TemplateArea>
          <TemplateHeader>
            <p>{title}</p>

            <SearchBar
              type="text"
              placeholder="Digite para pesquisar ..."
            ></SearchBar>

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
