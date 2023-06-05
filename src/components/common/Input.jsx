import React from "react";
import styled from "styled-components";

export default function Input() {
  return <div>input</div>;
}

export const InputBox = styled.input`
  border: 1px solid black;
  width: ${ props => props.width};
  height: ${ props => props.height};
  padding: ${ props => props.padding};
  box-sizing: border-box;
  border-radius: 4px;
`;
