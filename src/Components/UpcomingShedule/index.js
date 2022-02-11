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

export default function UpcomingShedule({ serverName }) {
  return (
    <>
      <SheduleCard>
        <CardColor color={serverName} />
        <CardContent>
          <CardTitle>
            <Title>Exames do servidor {serverName}</Title>
            <Dates>
              <CalendarIcon />5 de Janeiro de 2021
            </Dates>
            <Hours>
              <ClockIcon />
              10H - 15H
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
