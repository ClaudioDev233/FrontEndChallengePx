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
  Placeholder,
} from "./styles";

export default function UpcomingShedule({ serverName, date, horario }) {
  return (
    <>
      <SheduleCard>
        <CardColor color={serverName} />
        <CardContent>
          <CardTitle>
            <Title>
              Exames do servidor {serverName === "A" ? "Snge" : "resto"}{" "}
              {/* mudar o nome dos exames */}
            </Title>
            <Dates>
              <CalendarIcon />
              {date} de Fevereiro, 2022
            </Dates>
            <Hours>
              <ClockIcon />
              {horario}
            </Hours>
          </CardTitle>
          <CardDescription>
            <Placeholder></Placeholder>
            <p>Nesse Agendamento contém todos os exames do tipo {serverName}</p>
          </CardDescription>
        </CardContent>
        <Chevron color={serverName}> &gt; </Chevron>
      </SheduleCard>
    </>
  );
}
