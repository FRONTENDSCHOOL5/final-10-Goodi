import React from "react";
import styled from "styled-components";
import { InputBox } from "../components/common/Input";
import { ButtonDef } from "../components/common/Button";
import SymbolImage from "../assets/symbol.svg";
import LoginImage1 from "../assets/login_1.svg";
import LoginMent from "../assets/login_ment.svg";

export default function Login() {
  return (
    <OuterDiv>
      <LeftDiv>
        <div>
          <img className="login-img" src={LoginImage1}></img>
          <img className="login-ment" src={LoginMent}></img>
        </div>
      </LeftDiv>
      <RightDiv>
        <div className="right-inner">
          <H1 className="a11y-hidden">로그인 페이지</H1>
          <div>
            <H2>
              Welcome to
              <img src={SymbolImage} alt="Symbol" />
            </H2>
          </div>
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
            <ButtonDef
              type="button"
              bg="black"
              width="432px"
              height="56px"
              br="4px"
            >
              로그인
            </ButtonDef>
            <span>SNS 로그인</span>
          </ButtonDiv>
          <SnsDiv>
            <SnsBg bg="#FAE64D">
              <img src="" alt="" />
            </SnsBg>
            <SnsBg bg="var(--gray100-color)">
              <img src="" alt="" />
            </SnsBg>
            <SnsBg bg="#5693FF">
              <img src="" alt="" />
            </SnsBg>
          </SnsDiv>
          <div>
            <p>아직 구디 회원이 아니세요?</p>
            <button type="button" className="join_button">
              회원가입 하기
            </button>
          </div>
        </div>
      </RightDiv>
    </OuterDiv>
  );
}

export function Setprofile() {
  return (
    <InputDiv>
      <Label>닉네임</Label>
      <InputBox
        width="432px"
        height="48px"
        padding="15px"
        onChange={() => {}}
        placeholder="이메일을 입력해주세요"
      />
    </InputDiv>
  );
}
export const OuterDiv = styled.div`
  display: flex;
`;
export const LeftDiv = styled.div`
  max-width: 43%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .login-ment {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
  }
  p {
    font-size: 1rem;
    color: var(--gray500-color);
    display: inline;
    margin-right: 17px;
  }
  button {
    font-family: var(--font--Bold);
    display: inline;
    border-bottom: 2px solid black;
    padding: 6px 0px;
  }
  .join_button {
    font-size: 1.25rem;
    font-family: var(--font--Bold);
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
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
  font-family: "Montserrat";
  font-weight: 900;
  margin-bottom: 16px;
  display: inline;

  img {
    vertical-align: text-bottom;
  }
`;
export const Label = styled.label`
  font-family: var(--font--Bold);
  margin-bottom: 8px;
`;
export const ButtonDiv = styled.div`
  padding: 55px 0;
  border-bottom: 1px solid var(--gray200-color);
  position: relative;
  span {
    background-color: white;
    padding: 10px;
    color: var(--gray200-color);
    position: absolute;
    top: 91%;
    left: 50%;
    transform: translate(-50%);
  }
`;
export const SnsDiv = styled.div`
  display: flex;
  gap: 24px;
  padding: 44px 0px 81px;
`;
export const SnsBg = styled.div`
  background-color: ${(props) => props.bg};
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;
