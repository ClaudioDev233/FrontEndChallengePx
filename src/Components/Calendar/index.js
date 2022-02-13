import {
  CalendarContent,
  CalendarHeader,
  CalendarBody,
  TD,
  TH,
  Title,
  Arrow,
  Bar,
  Progress,
  ProgressBar,
  Percentage,
  ArrowUp,
  InsideProgress,
  CalendarAndMonitoring,
  MonitoringSection,
  MonitoringText,
  MonitoringStatus,
  Circle,
} from "./styles";

import { useState, useEffect } from "react";
import axios from "axios";
export default function Calendar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function getData() {
      axios
        .get("http://localhost:3001/exames")
        .then((resp) => setData(resp.data));
    }
    getData();
  }, []);

  //isso aqui vai para o contexto e meu evento onClick no calendario recebe a funcao setter do meu dia que vem do contexto
  function handleExams(e) {
    //validações pra ver se o exame de determinado tipo existe, se nao existir nao faz a parada

    const exams = data[e].examesDia;

    if (exams.length > 0) {
      exams[0].tipoA
        ? exams[0].tipoA.map((exames) =>
            console.log(
              "o exame A foi " + exames.status + " no horario " + exames.horario
            )
          )
        : console.log("nada do A");

      exams[0].tipoB
        ? exams[0].tipoB.map((exames) =>
            console.log(
              "o exame B foi " + exames.status + " no horario " + exames.horario
            )
          )
        : console.log("nada do B ");

      exams[0].tipoC
        ? exams[0].tipoC.map((exames) =>
            console.log(
              "o exame C foi " + exames.status + " no horario " + exames.horario
            )
          )
        : console.log("nada do C ");

      /* data[e].examesDia[0].tipoB.map((exames) => console.log(exames.status)); */
    } else console.log("nãoe xistem examess nesse dia");
  }
  return (
    <>
      <CalendarAndMonitoring>
        <CalendarContent>
          <CalendarHeader>
            <Arrow> &lt; </Arrow>
            <Title>Fevereiro</Title>
            <Arrow> &gt; </Arrow>
          </CalendarHeader>
          <CalendarBody>
            <table>
              <thead>
                <tr>
                  <TH>S</TH>
                  <TH>T</TH>
                  <TH>Q</TH>
                  <TH>Q</TH>
                  <TH>S</TH>
                  <TH>S</TH>
                  <TH day="Sunday">D</TH>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <TD day="OtherMonth">31</TD>
                  {data
                    .filter((datas, index) => index >= 0 && index < 5)
                    .map((filtro) => {
                      return (
                        <>
                          <TD
                            onClick={(e) => {
                              handleExams(parseInt(e.target.textContent) - 1);
                            }}
                            status={filtro.status}
                          >
                            {filtro.dia}
                          </TD>
                        </>
                      );
                    })}

                  <TD day="Sunday">6</TD>
                </tr>
                <tr>
                  {data
                    .filter((datas, index) => index > 5 && index < 12)
                    .map((filtro) => {
                      return (
                        <>
                          <TD status={filtro.status}>{filtro.dia}</TD>
                        </>
                      );
                    })}

                  <TD day="Sunday">13</TD>
                </tr>
                <tr>
                  {data
                    .filter((datas, index) => index > 12 && index < 19)
                    .map((filtro) => {
                      return (
                        <>
                          <TD status={filtro.status}>{filtro.dia}</TD>
                        </>
                      );
                    })}

                  <TD day="Sunday">20</TD>
                </tr>

                <tr>
                  {data
                    .filter((datas, index) => index > 19 && index < 26)
                    .map((filtro) => {
                      return (
                        <>
                          <TD day={filtro.status} status={filtro.status}>
                            {filtro.dia}
                          </TD>
                        </>
                      );
                    })}

                  <TD day="Sunday">27</TD>
                </tr>
                <tr>
                  {data
                    .filter((datas, index) => index === 27)
                    .map((filtro) => {
                      return (
                        <>
                          <TD day={filtro.status} status={filtro.status}>
                            {filtro.dia}
                          </TD>
                        </>
                      );
                    })}
                  <TD day="OtherMonth">1</TD>
                  <TD day="OtherMonth">2</TD>
                  <TD day="OtherMonth">3</TD>
                  <TD day="OtherMonth">4</TD>
                  <TD day="OtherMonth">5</TD>
                  <TD day="Sunday">6</TD>
                </tr>
              </tbody>
            </table>
          </CalendarBody>
        </CalendarContent>
        <MonitoringSection>
          <MonitoringText>Monitoramento do Storage</MonitoringText>
          <ProgressBar>
            <Bar>
              <Progress></Progress>
            </Bar>
            <InsideProgress>
              <ArrowUp />
              <Percentage>25%</Percentage>
            </InsideProgress>
          </ProgressBar>
          <MonitoringText>
            Aqui é possível visualizar o total em disco do servidor na nuvem
          </MonitoringText>
          <MonitoringStatus>
            <div>
              <p>
                <Circle color="#4CBC9A" /> Normal
              </p>
              <p>
                <Circle color="#FEC64F" />
                Alerta
              </p>
            </div>

            <div>
              <p>
                <Circle color="#FFBABF" /> Atenção
              </p>
              <p>
                <Circle color="#FC6B57" /> Critico
              </p>
            </div>
          </MonitoringStatus>
        </MonitoringSection>
      </CalendarAndMonitoring>
    </>
  );
}
