import { useState, useEffect, useContext, Children } from "react";
import { ExamsContext } from "../../Components/Context/ExamsContext";
import Template from "../../Components/Template";
import UpcomingShedule from "../../Components/UpcomingShedule";
import { AllAppointmentsSection } from "./styles";
import axios from "axios";
import { AllAppointments } from "../../Components/AllAppointments";

export function TodosAgendamentos() {
  return (
    <Template height="fill" title="Agendamentos">
      <AllAppointments></AllAppointments>
    </Template>
  );
}
