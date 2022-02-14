import Calendar from "../Calendar";
import Cards from "../Cards";
import UpcomingShedule from "../UpcomingShedule";
import { useContext, useState, useEffect } from "react";
import { ExamsContext } from "../Context/ExamsContext";
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
import axios from "axios";
export default function Shedule() {
  const { day, handleExams } = useContext(ExamsContext);

  const [dailyExams, setDailyExams] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    function getData() {
      if (day) {
        axios
          .get(`http://localhost:3001/exames?dia=${day}`)
          .then((resp) => setData(resp.data[0].examesDia));
      }
    }

    getData();
  }, [day]);

  /* function handleDays() {
    data !== undefined ? console.log(data) : console.log("nao tem");
  } */
  /* useEffect(() => {
    data !== undefined ? console.log(data) : console.log("nao tem");
    console.log(day);
  }, [day]); */

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
            <p>Aparece aqui embaixo ; dias {data.dia}</p>
            {console.log(data)}
            {data.map((coisos) => {
              return (
                <>
                  <UpcomingShedule
                    serverName={coisos.tipo}
                    horario={coisos.horario}
                    date={day}
                  ></UpcomingShedule>
                </>
              );
            })}
            {/* esses cards serão gerados pelo contexto, tanto geral quanto do dia, logo esse componente também recebera informações do contexto */}
            {/* <UpcomingShedule serverName="C"></UpcomingShedule>
            <UpcomingShedule serverName="B"></UpcomingShedule>
            <UpcomingShedule serverName="A"></UpcomingShedule> */}
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
