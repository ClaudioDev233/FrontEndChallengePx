import styled from "styled-components";

export const Card = styled.div`
  width: 353px;
  height: 127px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  gap: 10px;
`;

export const Percent = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  background-color: ${(props) =>
    props.color === "Complete"
      ? "rgba(76, 188, 154, 0.1)"
      : "rgba(254, 198, 79, 0.1)"};
  span {
    color: #374557;
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ProgressBar = styled.div`
  width: 170px;
  height: 16px;
  background-color: #ccc;
  border-radius: 6px;
`;

export const Bar = styled.div`
  width: ${(props) => (props.size === "Complete" ? "127px" : "42.5px")};
  height: 16px;
  border-radius: 6px;
  background-color: ${(props) =>
    props.color === "Complete" ? "rgba(76, 188, 154)" : "rgba(254, 198, 79)"};
`;

export const Chavron = styled.span`
  color: ${(props) =>
    props.color === "Complete" ? "rgba(76, 188, 154)" : "rgba(254, 198, 79)"};
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
