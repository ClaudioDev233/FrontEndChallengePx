import { NoSheduleCard, ThumbIcon, AttentionDiv } from "./styles";
export default function NoShedule({ day }) {
  return (
    <NoSheduleCard>
      <ThumbIcon />
      <AttentionDiv>
        <h1>Atenção!</h1>
        <p>Não existem agendamentos para o dia {day} de Fevereiro, 2022.</p>
      </AttentionDiv>
    </NoSheduleCard>
  );
}
