import { NoSheduleCard, ThumbIcon, AttentionDiv } from "./styles";
export default function NoShedule({ date }) {
  return (
    <NoSheduleCard>
      <ThumbIcon />
      <AttentionDiv>
        <h1>Atenção!</h1>
        <p>Não existem agendamentos para o dia {date} de Fevereiro, 2022.</p>
      </AttentionDiv>
    </NoSheduleCard>
  );
}
