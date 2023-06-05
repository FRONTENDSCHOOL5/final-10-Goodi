import React from 'react'
import styled from "styled-components";

export default function Button() {
  return (
    <div>Button</div>
  )
}

export const ButtonDef = styled.button`
  background-color: black;
  width: ${ props => props.width};
  height: ${ props => props.height};
  padding: ${ props => props.padding};
  border-radius: ${ props => props.br};
  font-size: 1.13rem;
  color: white;
  box-sizing: border-box;
  text-align: center;
`