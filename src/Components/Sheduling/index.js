import Calendar from "../Calendar";
import Cards from "../Cards";
import UpcomingShedule from "../UpcomingShedule";
import NoShedule from "../NoShedule";
import { ExamsContext } from "../Context/ExamsContext";
import { useContext, useState, useEffect } from "react";

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
import { Link } from "react-router-dom";
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

  return (
    <>
      <SheduleContent>
        <SheduleLeft>
          <SheduleLeftContent>
            <Title>Exames Concluídos/Andamento</Title>

            <SheduleCards>
              <Cards
                color="Complete"
                title="Concluído"
                percentage="75"
                size="Complete"
              ></Cards>
              <Cards title="Em Andamento" percentage="25"></Cards>
            </SheduleCards>
          </SheduleLeftContent>

          <SheduleList>
            <SheduleListHeader>
              <Title>Listagem de Agendamentos</Title>

              <SeeAll>
                <Link
                  to={{
                    pathname: "/todosAgendamentos",
                  }}
                >
                  Visualizar Todos &gt;
                </Link>
              </SeeAll>
            </SheduleListHeader>

            {data.length > 0 ? (
              data
                .filter((datas, index) => index <= 4)
                .map((dia) => {
                  return (
                    <>
                      <UpcomingShedule
                        tipo={dia.tipo}
                        status={dia.status}
                        horario={dia.horario}
                        date={day}
                      ></UpcomingShedule>
                    </>
                  );
                })
            ) : (
              <NoShedule date={day}></NoShedule>
            )}
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

/* data.map((coisos) => {
  return (
    <>
      <UpcomingShedule
        serverName={coisos.tipo}
        horario={coisos.horario}
        date={day}
      ></UpcomingShedule>
    </>
  ); */
