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
  Table,
} from "./styles";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ExamsContext } from "../Context/ExamsContext";

export default function Calendar() {
  const [data, setData] = useState([]);

  const { funciona, day, setDay } = useContext(ExamsContext);

  useEffect(() => {
    function getData() {
      axios
        .get("http://localhost:3001/exames")
        .then((resp) => setData(resp.data));
    }
    getData();
  }, []);

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
            <Table>
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
                              setDay(parseInt(e.target.textContent));
                            }}
                            day={filtro.status}
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
                          <TD
                            onClick={(e) => {
                              setDay(parseInt(e.target.textContent));
                            }}
                            day={filtro.status}
                            status={filtro.status}
                          >
                            {filtro.dia}
                          </TD>
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
                          <TD
                            onClick={(e) => {
                              setDay(parseInt(e.target.textContent));
                            }}
                            day={filtro.status}
                            status={filtro.status}
                          >
                            {filtro.dia}
                          </TD>
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
                          <TD
                            onClick={(e) => {
                              setDay(parseInt(e.target.textContent));
                            }}
                            day={filtro.status}
                            status={filtro.status}
                          >
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
                          <TD
                            onClick={(e) => {
                              setDay(parseInt(e.target.textContent));
                            }}
                            day={filtro.status}
                            status={filtro.status}
                          >
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
            </Table>
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
