import "./App.css";

import { Routes, Route } from "react-router-dom";
import Agendamento from "./Pages/Agendamentos";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Agendamento />}></Route>
      </Routes>
    </>
  );
}

export default App;
