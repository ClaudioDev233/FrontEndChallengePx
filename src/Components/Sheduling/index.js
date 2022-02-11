import Cards from "../Cards";
import UpcomingShedule from "../UpcomingShedule";

export default function Shedule() {
  return (
    <>
      <div>
        Div flex normal pra separar tudo
        <div>
          Div com flex colunm
          <p>Tres Componentes</p>
          <p>Exames Concluidos/Andamento</p>
          <Cards></Cards>
          <UpcomingShedule></UpcomingShedule>
        </div>
      </div>
    </>
  );
}
