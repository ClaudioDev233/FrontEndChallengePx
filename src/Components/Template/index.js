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
  SearchBar,
  HeaderMenu,
  Placeholder,
  ChildrenContainer,
  IconBox,
  TemplateArea,
} from "./styles";
import Logo from "../../Assets/Images/logo.png";

export default function Template({ children }) {
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

        <TemplateArea>
          <TemplateHeader>
            <p>Agendamento</p>

            <SearchBar>
              <MagnifyingIcon></MagnifyingIcon> <input type="text"></input>
            </SearchBar>

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
