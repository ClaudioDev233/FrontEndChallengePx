import "./App.css";

import { Routes, Route } from "react-router-dom";
import Agendamento from "./Pages/Agendamentos";
import { ExamsProvider } from "./Components/Context/ExamsContext/";
function App() {
  return (
    <>
      <ExamsProvider>
        <Routes>
          <Route path="/" element={<Agendamento />}></Route>
        </Routes>
      </ExamsProvider>
    </>
  );
}

export default App;
