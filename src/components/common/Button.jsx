import React from 'react'
import styled from "styled-components";

export default function Button() {
  return (
    <div>Button</div>
  )
}

export const ButtonDef = styled.button`
  background-color: ${ props => props.bg};
  width: ${ props => props.width};
  height: ${ props => props.height};
  padding: ${ props => props.padding};
  border-radius: ${ props => props.br};
  color: ${props => props.gb == 'white' ? 'black' : 'white'};
  font-size: 1.13rem;
  box-sizing: border-box;
  text-align: center;
`