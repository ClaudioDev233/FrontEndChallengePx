import Cards from "../Cards";
import UpcomingShedule from "../UpcomingShedule";
import { SheduleContent, SheduleLeft } from "./styles";
export default function Shedule() {
  return (
    <>
      <SheduleContent>
        <SheduleLeft>
          <SheduleLeftCards>
            <p>Exames Concluidos/Andamento</p>
            <Cards></Cards>
          </SheduleLeftCards>
          <div>
            <p>Listagem de Agendamentos</p> <p>Visualizar Todos &gt;</p>
            <UpcomingShedule serverName="C"></UpcomingShedule>
            <UpcomingShedule serverName="B"></UpcomingShedule>
            <UpcomingShedule serverName="A"></UpcomingShedule>
          </div>
        </SheduleLeft>
      </SheduleContent>
    </>
  );
}
