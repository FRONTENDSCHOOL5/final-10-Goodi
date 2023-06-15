import React from "react";
import styled from "styled-components";

export default function Input() {
  return;
}

export const InputBox = styled.input`
  border: 1px solid ${(props) => (props.hasError ? 'red' : '#d3d3d3')};
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 15px;
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor};
  border-radius:  ${props => props.borderRadius ? props.borderRadius : "4px"};
  &::placeholder {
    color: var(--gray300-color);
  }
  &:focus {
    border-color: black;
  }
`;
