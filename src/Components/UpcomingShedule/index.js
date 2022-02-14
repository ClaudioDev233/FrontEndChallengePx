import {
  SheduleCard,
  CardContent,
  CardTitle,
  CardDescription,
  CardColor,
  Chevron,
  CalendarIcon,
  ClockIcon,
  Title,
  Dates,
  Hours,
} from "./styles";

export default function UpcomingShedule({ serverName, date, horario }) {
  return (
    <>
      <SheduleCard>
        <CardColor color={serverName} />
        <CardContent>
          <CardTitle>
            <Title>Exames do servidor {serverName}</Title>
            <Dates>
              <CalendarIcon />
              {date} de Fevereiro de 2022
            </Dates>
            <Hours>
              <ClockIcon />
              {horario}
            </Hours>
          </CardTitle>
          <CardDescription>
            <p>Nesse Agendamento contém todos os exames do tipo {serverName}</p>
          </CardDescription>
        </CardContent>
        <Chevron color={serverName}> &gt; </Chevron>
      </SheduleCard>
    </>
  );
}
