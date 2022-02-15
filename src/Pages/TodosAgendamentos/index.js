import { useState, useEffect, useContext, Children } from "react";
import { ExamsContext } from "../../Components/Context/ExamsContext";
import Template from "../../Components/Template";
import UpcomingShedule from "../../Components/UpcomingShedule";
import { AllAppointmentsSection } from "./styles";
import axios from "axios";

export function TodosAgendamentos() {
  const { day } = useContext(ExamsContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    function getData() {
      axios
        .get("http://localhost:3001/exames")
        .then((resp) => setData(resp.data));
    }
    getData();
  }, []);
  return (
    <Template height="fit" title="Todos os Agendamentos">
      {/* essa função vai para a pagina de listar todos */}
      <AllAppointmentsSection>
        {Children.toArray(
          data.map((todos) =>
            todos.examesDia.map((dia) => {
              return (
                <>
                  <UpcomingShedule
                    serverName={dia.tipo}
                    horario={dia.horario}
                    date={todos.dia}
                  />
                </>
              );
            })
          )
        )}
      </AllAppointmentsSection>
    </Template>
  );
}
