import React from 'react'
import { InputBox } from './Input'
import styled from 'styled-components'

import sendBtn from "../../assets/send_button.svg";
import sendBtnHover from "../../assets/send_button_hover.svg";
import { useState } from 'react';

export default function Form() {
  /* input에 값이 들어왔을 때 버튼 색상 변경 */
  const [hasInput, setHasInput] = useState(false);

  return (
    <FormStyle>
      <InputBox
        type="text"
        width="100%"
        height="60px"
        backgroundColor="white"
        placeholder='메시지를 입력해주세요'
      />
      <FormButton />
    </FormStyle>
  )
}

const FormStyle = styled.form`
  position: relative;
`

const FormButton = styled.button`
  position: absolute;
  right: 15px;
  top: 10px;
  background: url(${sendBtn}) no-repeat center center/contain;
  width: 40px;
  height: 40px;
  transition: all 0.3s;

  /* input에 값이 들어왔을 때 버튼 색상 변경 */
  &:hover {
    background: url(${sendBtnHover}) no-repeat center center/contain;
  }
`