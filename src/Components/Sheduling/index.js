import Calendar from "../Calendar";
import Cards from "../Cards";
import UpcomingShedule from "../UpcomingShedule";
import {
  SheduleContent,
  SheduleLeft,
  SheduleCards,
  SheduleLeftContent,
  SheduleList,
  SheduleListHeader,
  Title,
  SeeAll,
  SheduleRight,
} from "./styles";
export default function Shedule() {
  return (
    <>
      <SheduleContent>
        <SheduleLeft>
          <SheduleLeftContent>
            <Title>Exames Concluídos/Andamento</Title>

            <SheduleCards>
              <Cards color="Complete" title="Concluído" percentage="75"></Cards>
              <Cards title="Em Andamento" percentage="25"></Cards>
            </SheduleCards>
          </SheduleLeftContent>

          <SheduleList>
            <SheduleListHeader>
              <Title>Listagem de Agendamentos</Title>

              <SeeAll>Visualizar Todos &gt;</SeeAll>
            </SheduleListHeader>

            <UpcomingShedule serverName="C"></UpcomingShedule>
            <UpcomingShedule serverName="B"></UpcomingShedule>
            <UpcomingShedule serverName="A"></UpcomingShedule>
          </SheduleList>
        </SheduleLeft>
        <SheduleRight>
          <Title>Calendário</Title>
          <Calendar></Calendar>
        </SheduleRight>
      </SheduleContent>
    </>
  );
}
