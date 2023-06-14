import React, { useEffect } from "react";
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

import { useLogin } from "../hook/useLogin";

export default function Login() {
  const navigate = useNavigate();

  // const [loginData, setLoginData] = useState({
  //   user: {
  //     email: "",
  //     password: ""
  //   }
  // })

  // async function handleLogin() {
  //   const { email, password } = loginData.user;

  //   if (!email || !password) {
  //     console.log("이메일과 비밀번호를 입력해주세요.");
  //     return;
  //   }

  //   try {
  //     const response = await fetchData(loginData.user);
  //     // 로그인 성공 처리
  //     console.log(response); // API 응답 확인

  //     // 서버에서 검사한 결과를 받아서 처리
  //     if (response.success) {
  //       console.log("로그인 성공");
  //       navigate('/main');
  //     } else {
  //       console.log("이메일 또는 비밀번호가 일치하지 않습니다.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setLoginData(prevState => ({
  //     ...prevState,
  //     user: {
  //       ...prevState.user,
  //       [name]: value
  //     }
  //   }));
  // };

  const { loginResult, errorResult, callMutate } = useLogin();

  useEffect(() => {
    if (loginResult !== null) {
      console.log("[TEST]", loginResult)
    }
  }, [loginResult])

  useEffect(() => {
    if (errorResult !== null)
      window.alert(errorResult.message)
  }, [errorResult])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function gotoJoin() {
    navigate('/join');
  }

  const mainNavigate = () => {
    callMutate({
      email,
      password
    })

    if (loginResult !== null || loginResult === "") {
      navigate('/main')
    }
  }

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
          <form action="">
            <InputDiv>
              <Label>이메일</Label>
              <InputBox
                width="432px"
                height="48px"
                padding="15px"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                name='email'
                placeholder="이메일을 입력해주세요"
              />
            </InputDiv>
            <InputDiv>
              <Label>비밀번호</Label>
              <InputBox
                width="432px"
                height="48px"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                name='password'
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
            </InputDiv>
            <ButtonDiv>
              <Button
                type="button"
                bg="black"
                width="432px"
                height="56px"
                br="4px"
                text="로그인"
                onClick={mainNavigate}
              />
            </ButtonDiv>
          </form>
          <Span>SNS 로그인</Span>
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
            <button type="button" className="join_button" onClick={gotoJoin}>
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
    margin-right: 17px;
  }
  button {
    border-bottom: 2px solid black;
  }
  .join_button {
    font-size: 20px;
    font-family: var(--font--Bold);
    cursor: pointer;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const H1 = styled.h1`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

const H2 = styled.div`
  font-size: 40px;
  font-family: "Montserrat";
  font-weight: 900;
  display: inline;
  margin-bottom: 30px;
  img {
    vertical-align: text-bottom;
  }
`;
const Label = styled.label`
  font-family: var(--font--Bold);
  margin-bottom: 8px;
`;
const ButtonDiv = styled.div`
  padding: 55px 0 40px;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--gray200-color);
    position: absolute;
    bottom: -19px;
    left: 0;
  }
`;
const Span = styled.span`
  margin-bottom: 20px;
  background-color: white;
  padding: 10px;
  color: var(--gray200-color);
  z-index: 1;
`;
const SnsDiv = styled.div`
  display: flex;
  gap: 24px;
  padding: 4px 0 81px;
`;
const SnsBg = styled.div`
  background-color: ${(props) => props.bg};
  width: 56px;
  height: 56px;
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
