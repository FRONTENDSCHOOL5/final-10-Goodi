import React from "react";
import styled, { css } from "styled-components";

export default function Button({ text, ...props }) {
  return <ButtonDef {...props}>{text}</ButtonDef>;
}

const ButtonDef = styled.button`
  background-color: black;
  background-color: ${(props) => props.bg || "var(--black-color)"};
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "18px 0"};
  border-radius: 4px;
  border: ${(props) => props.br || "1px solid var(--gray300-color)"};
  color: ${(props) => props.color || "white"};
  font-size: 1.13rem;
  font-family: var(--font--Bold);
  box-sizing: border-box;
  text-align: center;
  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--gray300-color);
    `}

  ${(props) =>
    props.noCursor &&
    css`
      cursor: default;
    `}
`;