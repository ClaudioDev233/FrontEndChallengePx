import { useState, useEffect, useContext, Children } from "react";

import UpcomingShedule from "../../Components/UpcomingShedule";
import {
  AllAppointmentsSection,
  Button,
  ButtonSection,
  Icon,
  Title,
} from "./styles";
import axios from "axios";

export function AllAppointments() {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState();
  const [filteredData, setFilteredData] = useState([]); // esse filtro talvez vá para o contexto

  useEffect(() => {
    function getData() {
      axios
        .get("http://localhost:3001/exames")
        .then((resp) => setData(resp.data));
    }
    getData();
  }, []);

  useEffect(() => {
    function handleFilter() {
      const dataFiltrada = [];
      data.map((exams) =>
        exams.examesDia.filter((exames) =>
          exames.status === search ? (
            dataFiltrada.push({
              exames: exames,
              dia: exams.dia,
            })
          ) : (
            <></>
          )
        )
      );

      setFilteredData(dataFiltrada);
    }
    handleFilter();
  }, [search]);

  return (
    <AllAppointmentsSection>
      <Title>Filtrar por:</Title>
      <ButtonSection>
        <Button
          onClick={() => {
            setSearch("doneWithErrors");
          }}
        >
          <Icon />
          <p>Concluídos com Erro</p>
        </Button>

        <Button
          onClick={() => {
            setSearch("onGoing");
          }}
        >
          <Icon color="onGoing" />
          <p>Em Andamento</p>
        </Button>

        <Button
          onClick={() => {
            setSearch("done");
          }}
        >
          <Icon color="done" />
          <p>Concluídos</p>
        </Button>
      </ButtonSection>
      {filteredData.length < 1 || filteredData === undefined
        ? Children.toArray(
            data.map((todos) =>
              Children.toArray(
                todos.examesDia.map((dia) => {
                  return (
                    <>
                      <UpcomingShedule
                        tipo={dia.tipo}
                        status={dia.status}
                        horario={dia.horario}
                        date={todos.dia}
                      />
                    </>
                  );
                })
              )
            )
          )
        : Children.toArray(
            filteredData.map((filtered) => {
              return (
                <>
                  <UpcomingShedule
                    tipo={filtered.exames.tipo}
                    status={filtered.exames.status}
                    horario={filtered.exames.horario}
                    date={filtered.dia}
                  />
                </>
              );
            })
          )}
    </AllAppointmentsSection>
  );
}
