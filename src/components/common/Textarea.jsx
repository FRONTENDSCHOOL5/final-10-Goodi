import React, { useState } from "react";
import styled from "styled-components";

export default function Textarea({ ...props }) {
  return (
    <TextareaBoxWrap>
      <TextareaBox {...props}></TextareaBox>
      <p>
        ({props.value ? props.value.length : 0} /{" "}
        {props.count ? props.count : "100"})
      </p>
    </TextareaBoxWrap>
  );
}
const TextareaBoxWrap = styled.div`
  position: relative;
`;

const TextareaBox = styled.textarea`
  /* position: relative; */
  font-family: var(--font--Regular);
  resize: none;
  font-size: 16px;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#d3d3d3")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 15px;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "4px"};
  &::placeholder {
    color: var(--gray300-color);
  }
  &:focus {
    border-color: black;
    outline: none;
  }

  & + p {
    position: absolute;
    right: 0;
    font-size: 14px;
    color: var(--gray400-color);
    text-align: right;
    margin-top: 8px;
  }
`;
