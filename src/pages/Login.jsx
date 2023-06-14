import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useState } from "react";

import { InputBox } from "../components/common/Input";
import Button from "../components/common/Button";
import { LeftDiv } from "../components/Carousel";

import SymbolImage from "../assets/symbol.svg";
import GoogleIcon from "../assets/google.svg";
import FacebookIcon from "../assets/facebook.svg";
import KakaoIcon from "../assets/kakao.svg";

import fetchData from "../api/login";

export default function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    user: {
      email: "",
      password: ""
    }
  })

  async function handleLogin() {
    const { email, password } = loginData.user;

    if (!email || !password) {
      console.log("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await fetchData(loginData.user);
      // 로그인 성공 처리
      console.log(response); // API 응답 확인

      // 서버에서 검사한 결과를 받아서 처리
      if (response.success) {
        console.log("로그인 성공");
        navigate('/main');
      } else {
        console.log("이메일 또는 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  };

  return (
    <OuterDiv>
      <LeftDiv />
      <RightDiv>
        <div className="right-inner">
          <H1 className="a11y-hidden">로그인 페이지</H1>
          <H2>
            Welcome to
            <img src={SymbolImage} alt="Symbol" />
          </H2>
          <InputDiv>
            <Label>이메일</Label>
            <InputBox
              width="27rem"
              height="3rem"
              padding=".9375rem"
              onChange={handleInputChange}
              name='email'
              placeholder="이메일을 입력해주세요"
            />
          </InputDiv>
          <InputDiv>
            <Label>비밀번호</Label>
            <InputBox
              width="27rem"
              height="3rem"
              onChange={handleInputChange}
              name='password'
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </InputDiv>
          <ButtonDiv>
            <Button
              type="button"
              bg="black"
              width="27rem"
              height="3.5rem"
              br=".25rem"
              text="로그인"
              onClick={handleLogin}
            />
            <span>SNS 로그인</span>
          </ButtonDiv>
          <SnsDiv>
            <SnsBg bg="#FAE64D">
              <img src={KakaoIcon} alt="카카오로 로그인하기" />
            </SnsBg>
            <SnsBg bg="var(--gray100-color)">
              <img src={GoogleIcon} alt="구글로 로그인하기" />
            </SnsBg>
            <SnsBg bg="#5693FF">
              <img src={FacebookIcon} alt="페이스북으로 로그인하기" />
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
  }
  p {
    font-size: 16px;
    color: var(--gray500-color);
    display: inline;
    margin-right: 1.0625rem;
  }
  button {
    border-bottom: .125rem solid black;
  }
  .join_button {
    font-size: 20px;
    font-family: var(--font--Bold);
    cursor: pointer;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

export const H1 = styled.h1`
  clip: rect(.0625rem, .0625rem, .0625rem, .0625rem);
  clip-path: inset(50%);
  width: .0625rem;
  height: .0625rem;
  margin: -0.0625rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

export const H2 = styled.div`
  font-size: 40px;
  font-family: "Montserrat";
  font-weight: 900;
  display: inline;
  margin-bottom: 1.875rem;
  img {
    vertical-align: text-bottom;
  }
`;
export const Label = styled.label`
  font-family: var(--font--Bold);
  margin-bottom: .5rem;
`;
export const ButtonDiv = styled.div`
  padding: 3.4375rem 0;
  border-bottom: .0625rem solid var(--gray200-color);
  position: relative;
  span {
    background-color: white;
    padding: .625rem;
    color: var(--gray200-color);
    position: absolute;
    top: 91%;
    left: 50%;
    transform: translate(-50%);
  }
`;
export const SnsDiv = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2.75rem 0rem 5.0625rem;
`;
export const SnsBg = styled.div`
  background-color: ${(props) => props.bg};
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
