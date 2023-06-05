import React from "react";
import styled from "styled-components";
import { InputBox } from "../components/common/Input";
import { ButtonDef } from "../components/common/Button";
import SymbolImage from "../assets/symbol.svg";

export default function Login() {
  return (
    <LayoutDiv>
      <H1>로그인 페이지</H1>
      <H2>Welcome to
      <img src={SymbolImage} alt="Symbol" />
      </H2>
      <InputDiv>
        <Label>이메일</Label>
        <InputBox 
          width="432px" 
          height="48px" 
          padding="15px"
          onChange={() => {}}
          className="inputBox"
          placeholder="이메일을 입력해주세요"
        />
        </InputDiv>
        <InputDiv>
        <Label>비밀번호</Label>
        <InputBox 
          width="432px" 
          height="48px" 
          padding="15px"
          onChange={() => {}}
          type="password"
          className="inputBox"
          placeholder="비밀번호를 입력하세요"
        />
      </InputDiv>
      <div style={{margin: "55px"}}>
        <ButtonDef 
          type="button" 
          width="432px" 
          height="56px" 
          br="4px">로그인</ButtonDef>
      </div>
    </LayoutDiv>
  );
}

export const LayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 81px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:24px;
`;

export const H1 = styled.h1`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`

export const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
`

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 700;
`