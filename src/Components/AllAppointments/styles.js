import styled from "styled-components";

export const AllAppointmentsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  gap: 30px;
`;

export const ButtonSection = styled.section`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  display: flex;
  height: 40px;
  width: 130px;
  padding: 0;
  gap: 5px;
  align-items: center;

  font-size: 14px;
  font-weight: 600;
  color: #374557;
  background-color: #ffffff;

  border: none;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }
`;

export const Icon = styled.div`
  width: 10px;
  height: 40px;
  border-radius: 12px 0 0 12px;

  background-color: ${(props) =>
    props.color === "done"
      ? "#4CBC9A"
      : props.color === "onGoing"
      ? "#FEC64F"
      : "#FC6B57"};
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
