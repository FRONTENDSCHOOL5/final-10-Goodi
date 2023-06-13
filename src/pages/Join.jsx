import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import { InputBox } from "../components/common/Input";
import Button from "../components/common/Button";
import { LeftDiv } from "../components/Carousel";

import SymbolImage from "../assets/symbol.svg";

export default function Join() {
  return (
    <OuterDiv>
      <LeftDiv />
      <RightDiv>
        <div className="right-inner">
          <H1 className="a11y-hidden">회원가입 페이지</H1>
          <H2>
            Join to
            <img src={SymbolImage} alt="Symbol" />
          </H2>
          <InputDiv>
            <Label>이메일</Label>
            <InputBox
              width="432px"
              height="48px"
              padding="15px"
              onChange={() => {}}
              placeholder="이메일을 입력해주세요"
            />
          </InputDiv>
          <InputDiv>
            <Label>비밀번호</Label>
            <InputBox
              width="432px"
              height="48px"
              onChange={() => {}}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </InputDiv>
          <ButtonDiv>
          <Button	
              text="다음"	
              type="button"	
              bg="black"	
              width="432px"	
              br="none"	
            />
          </ButtonDiv>
        </div>
      </RightDiv>
    </OuterDiv>
  );
}
export const OuterDiv = styled.div`
  display: flex;
`;

export const RightDiv = styled.div`
  width: 57%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-sizing: border-box;
  margin: 0 auto;

  .right-inner {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
  }
  p {
    font-size: 1rem;
    color: var(--gray500-color);
    display: inline;
    margin-right: 17px;
  }
  .join_button {
    font-size: 1.25rem;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
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
`;

export const H2 = styled.div`
  font-size: 2.5rem;
  margin-bottom: 48px;
  font-family: var(--font--en);
  font-weight: 900;
  display: inline;

  img {
    vertical-align: text-bottom;
  }
`;
export const Label = styled.label`
  font-family: var(--font--Bold);
  margin-bottom: 9px;
  font-weight: 700;
`;
export const ButtonDiv = styled.div`
  margin-top: 166px;
`;
