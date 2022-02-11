import {
  Bar,
  Card,
  Percent,
  Percentage,
  Progress,
  ProgressBar,
  Chavron,
  Title,
} from "./style";

export default function Cards({ color, title }) {
  return (
    <>
      <Card>
        <Percent color={color}>
          <Percentage>75%</Percentage>
        </Percent>
        <Progress>
          <Title>{title}</Title>
          <ProgressBar>
            <Bar color={color}></Bar>
          </ProgressBar>
        </Progress>
        <Chavron color={color}> &gt; </Chavron>
      </Card>
    </>
  );
}
