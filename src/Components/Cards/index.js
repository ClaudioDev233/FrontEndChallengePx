import { Bar, Card, Percent, Progress, ProgressBar } from "./style";

export default function Cards() {
  return (
    <>
      <Card>
        <Percent color="Complete">
          <span>75%</span>
        </Percent>
        <Progress>
          <p>Concluido</p>
          <ProgressBar>
            <Bar color="Complete"></Bar>
          </ProgressBar>
        </Progress>
        <span> &gt; </span>
      </Card>

      <Card>
        <Percent>
          <span>75%</span>
        </Percent>
        <Progress>
          <p>Concluido</p>
          <ProgressBar>
            <Bar></Bar>
          </ProgressBar>
        </Progress>
        <span> &gt; </span>
      </Card>
    </>
  );
}
