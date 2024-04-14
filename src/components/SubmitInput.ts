import styled from "styled-components";
import { Input } from "./Input";

export const SubmitInput = styled(Input).attrs({ type: 'submit' })`
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
  background-color: #45a049;
  }
`