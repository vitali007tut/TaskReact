import styled from "styled-components";

export const Button = styled.button<{ primary?: boolean }>`
  background: ${props => props.primary ? "#BF4F74" : "white"};
  color: ${props => props.primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  opacity: .8;

    &:hover {
    opacity: 1;
  }

  .active & {
    background: #00ff00;
  }
`

export const TomatoButton = styled(Button)`
  background: tomato;
border-color: tomato;
`
