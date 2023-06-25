import React from "react";
import { InputBox } from "./Input";
import styled from "styled-components";

import sendBtn from "../../assets/icon-send-gray.svg";
import sendBtnHover from "../../assets/icon-send-black.svg";
import { useState } from "react";

export default function Form({ hasInput, setHasInput, handleSubmit }) {
  /* input에 값이 들어왔을 때 버튼 색상 변경 */
  // const [hasInput, setHasInput] = useState("");
  // const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (e) => {
    setHasInput(e.target.value);
  };

  return (
    <FormLayout onSubmit={handleSubmit}>
      <FormInput
        type="text"
        placeholder="메시지를 입력해주세요"
        onChange={handleInputChange}
        value={hasInput}
      />
      <FormButton type="submit" hasInput={hasInput} />
    </FormLayout>
  );
}

const FormLayout = styled.form`
  padding: 24px 32px 50px 32px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  border-top: 1px solid var(--gray200-color);
`;

const FormInput = styled.input`
  width: 100%;
  &::placeholder {
    color: var(--gray300-color);
  }
`;

const FormButton = styled.button`
  background: ${({ hasInput }) =>
    hasInput === ""
      ? `url(${sendBtn}) no-repeat center center/contain`
      : `url(${sendBtnHover}) no-repeat center center/contain`};
  width: 32px;
  height: 32px;
  transition: all 0.3s;
  cursor: pointer;
`;
