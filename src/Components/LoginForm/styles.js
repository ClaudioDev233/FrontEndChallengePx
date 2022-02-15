import styled from "styled-components";
import { Email } from "@styled-icons/material/Email";
import { LockPassword } from "@styled-icons/remix-fill/LockPassword";
export const Form = styled.form`
  width: 30%;
  height: 30%;
  display: flex;
  padding: 20px;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Label = styled.label`
  display: flex;
  height: 50px;
  padding: 10px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  input {
    background-color: #ffffff;
    border: none;

    outline: none;
  }
`;

export const EmailIcon = styled(Email)`
  height: 20px;
  width: 20px;
`;
export const PasswordIcon = styled(LockPassword)`
  height: 20px;
  width: 20px;
`;

/* export const Button = styled.input`
  display: flex;
  height: 50px;
  width: 130px;
  padding: 0;
  gap: 5px;
  text-align: center;
  align-items: center;

  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: rgb(101, 65, 225);
  background: linear-gradient(
    90deg,
    rgba(101, 65, 225, 1) 0%,
    rgba(79, 200, 235, 1) 33%,
    rgba(34, 188, 159, 1) 100%
  );

  border: none;
  cursor: pointer;
`;
 */

export const Button = styled.div`
  display: flex;
  height: 50px;
  width: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 15px;
  font-size: 18px;
  background: rgb(101, 65, 225);
  background: linear-gradient(
    90deg,
    rgba(101, 65, 225, 1) 0%,
    rgba(79, 200, 235, 1) 33%,
    rgba(34, 188, 159, 1) 100%
  );

  input {
    border: none;
    font-size: 24px;
    color: #ffffff;
    font-weight: 500;
    width: 90%;
    height: 90%;
    background-color: transparent;
    cursor: pointer;
  }
`;
