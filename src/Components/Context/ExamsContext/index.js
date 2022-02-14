import { useEffect, useState, createContext } from "react";
import axios from "axios";
export const ExamsContext = createContext([]);

export function ExamsProvider({ children }) {
  const [day, setDay] = useState(7);

  /* const [data, setData] = useState(); */

  /* useEffect(() => {
    function getData() {
      if (day) {
        axios
          .get(`http://localhost:3001/exames?dia=${day}`)
          .then((resp) => setData(resp.data));
      }
    }
    getData();
  }, [day]); */

  //isso aqui vai para o contexto e meu evento onClick no calendario recebe a funcao setter do meu dia que vem do contexto
  //validações pra ver se o exame de determinado tipo existe, se nao existir nao faz a parada

  /* const exams = data.examesDia;
    return console.log(exams); */
  function handleExams() {
    /*  console.log(exams[0]) */
    /* if (exams.length > 0) {
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
    } else console.log("nãoe xistem examess nesse dia"); */
  }

  return (
    <ExamsContext.Provider
      value={{
        funciona: "Oie",
        setDay: setDay,
        day: day,
        /* handleExams: handleExams,
        data: data, */
      }}
    >
      {children}
    </ExamsContext.Provider>
  );
}
