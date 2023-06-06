import React from "react";
import styled from "styled-components";

export default function Input() {
  return <div>input</div>;
}

export const InputBox = styled.input`
  border: 1px solid #d3d3d3;
  width: ${ props => props.width};
  height: ${ props => props.height};
  padding: 15px;
  box-sizing: border-box;
  border-radius: 4px;
  &::placeholder {
    color: var(--gray300-color);
  }
  &:focus {
    border-color: black;
  }
`;
