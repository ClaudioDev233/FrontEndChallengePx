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

export default function UpcomingShedule({ tipo, date, horario, status }) {
  return (
    <>
      <SheduleCard>
        <CardColor color={status} />
        <CardContent>
          <CardTitle>
            <Title>Exame Tipo {tipo}</Title>
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
            <p>Esse agendamento contém um exame do tipo {tipo}</p>
          </CardDescription>
        </CardContent>
        <Chevron color={status}> &gt; </Chevron>
      </SheduleCard>
    </>
  );
}
