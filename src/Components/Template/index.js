import {
  TemplateMenu,
  TemplateContainer,
  Button,
  CalendarIcon,
  ActivityIcon,
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
                  <p>Todos os Agendamentos</p>
                </Button>
              </li>
            </ul>
          </TemplateMenu>
        </nav>
        <header>
          <p>Agendamento</p>
        </header>
      </TemplateContainer>
    </>
  );
}
