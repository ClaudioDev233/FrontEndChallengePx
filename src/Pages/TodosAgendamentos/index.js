import { useState, useEffect, useContext, Children } from "react";
import Template from "../../Components/Template";
import UpcomingShedule from "../../Components/UpcomingShedule";
import axios from "axios";
import { ExamsContext } from "../../Components/Context/ExamsContext";

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

      {Children.toArray(
        data.map((todos) =>
          todos.examesDia.map((todos) => {
            return (
              <>
                <UpcomingShedule
                  serverName={todos.tipo}
                  horario={todos.horario}
                  date={day}
                />
              </>
            );
          })
        )
      )}
    </Template>
  );
}
