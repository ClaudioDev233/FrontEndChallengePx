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

export default function Cards({ color, title, percentage, size }) {
  return (
    <>
      <Card>
        <Percent color={color}>
          <Percentage>{percentage}%</Percentage>
        </Percent>
        <Progress>
          <Title>{title}</Title>
          <ProgressBar>
            <Bar color={color} size={size}></Bar>
          </ProgressBar>
        </Progress>
        <Chavron color={color}> &gt; </Chavron>
      </Card>
    </>
  );
}
