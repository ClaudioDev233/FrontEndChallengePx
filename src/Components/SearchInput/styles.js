import styled from "styled-components";
import { MagnifyingGlass } from "@styled-icons/foundation/MagnifyingGlass";

export const Search = styled.div`
  width: 513px;
  height: 60px;
  border-radius: 16px;
  padding: 2px 32px 2px 24px;
  background-color: #fafafa;
  input {
    border: none;
    outline: none;
    background-color: #fafafa;
  }
`;

export const MagnifyingIcon = styled(MagnifyingGlass)`
  height: 32px;
  width: 32px;
  color: #4cbc9a;
`;
