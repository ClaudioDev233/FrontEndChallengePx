import "./App.css";

import { Routes, Route } from "react-router-dom";
import Agendamento from "./Pages/Agendamentos";
import { ExamsProvider } from "./Components/Context/ExamsContext/";
import { TodosAgendamentos } from "./Pages/TodosAgendamentos";
function App() {
  return (
    <>
      <ExamsProvider>
        <Routes>
          <Route path="/" element={<Agendamento />}></Route>
          <Route
            path="/todosAgendamentos"
            element={<TodosAgendamentos />}
          ></Route>
        </Routes>
      </ExamsProvider>
    </>
  );
}

export default App;
