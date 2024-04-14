import styled from "styled-components";

// export const Input = styled.input`
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   display: inline-block;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   box-sizing: border-box;
// `;

export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: gray;
`;