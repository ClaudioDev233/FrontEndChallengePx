import {
  SheduleCard,
  CardContent,
  CardTitle,
  CardDescription,
  CardColor,
} from "./styles";

export default function UpcomingShedule() {
  return (
    <>
      <p>Listagem de Agendamentos</p>

      <SheduleCard>
        <CardColor />
        <CardContent>
          <CardTitle>
            <p>Exames do servidor C</p>
            <p>5 de Janeiro de, 2021 </p>
            <p>10-15hs</p>
          </CardTitle>
          <CardDescription>
            <p>Nesse Agendamento contém todos os exames do tipo C</p>
          </CardDescription>
        </CardContent>
        <span> &gt; </span>
      </SheduleCard>
    </>
  );
}
