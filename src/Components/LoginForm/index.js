import { Form, Label, EmailIcon, PasswordIcon, Button } from "./styles";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Images/logo.png";
export default function LoginForm() {
  const redirect = useNavigate();

  function teste(e) {
    e.preventDefault();
    alert("Seja Bem Vindo");
    redirect("/Agendamentos");
  }
  return (
    <Form
      onSubmit={(e) => {
        teste(e);
      }}
    >
      <img src={Logo} alt="logoPixeon"></img>
      <Label>
        <EmailIcon />
        <input type="text" placeholder="Email"></input>
      </Label>
      <Label>
        <PasswordIcon />
        <input type="password" placeholder="Senha"></input>
      </Label>
      <Button>
        <input type="submit" value="Entrar"></input>
      </Button>
    </Form>
  );
}
