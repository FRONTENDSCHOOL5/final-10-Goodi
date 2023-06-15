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

import loginAPI from "../api/login";
import { useRecoilState } from "recoil";
import { loginCheck } from '../recoil/loginCheck';
import loginToken from "../recoil/loginToken";
import accountname from "../recoil/accountname";

export default function Login() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState([]);
  const [userErrorMessage, setUserErrorMessage] = useState([]);

  const [isloginCheck, setIsLoginCheck] = useRecoilState(loginCheck);
  const [token, setToken] = useRecoilState(loginToken);
  const [isAccountname, setIsAccountname] = useRecoilState(accountname);

  const [loginData, setLoginData] = useState({
    user: {
      email: "",
      password: ""
    }
  })

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

  const handleLogin = async (loginData) => {
    const response = await loginAPI(loginData);

    if (response && response.hasOwnProperty("user")) {
      const newToken = response.user.token;
      const newAccountname = response.user.accountname;
      setIsLoginCheck(true);
      setToken(newToken);
      setIsAccountname(newAccountname);

      console.log(isloginCheck);
      console.log(newToken);
      console.log(newAccountname);

      navigate("/main");
    } else {
      const errorMessage = (response && response.message) ? response.message : handleError();
      setErrorMessage(errorMessage);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleError();
    await handleLogin(loginData);
  }

  const handleError = () => {
    const errors = [];
    if (loginData.user.email === "") {
      errors.push("아이디를 입력해주세요");
    } else if (loginData.user.password === "") {
      errors.push("비밀번호를 입력해주세요");
    } else {
      errors.push("");
    }
    setUserErrorMessage(errors);
  }

  const gotoJoin = () => {
    navigate('/join');
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
          <form onSubmit={handleSubmit}>
            <InputDiv>
              <Label>이메일</Label>
              <InputBox
                type="email"
                width="432px"
                height="48px"
                padding="15px"
                name='email'
                onChange={handleInputChange}
                value={loginData.user.email}
                placeholder="이메일을 입력해주세요"
                hasError={userErrorMessage.includes("아이디를 입력해주세요")}
              />
              {/* email을 입력하지 않은 경우 */}
              {userErrorMessage.includes("아이디를 입력해주세요") && (
                <ErrorMassage>아이디를 입력해주세요</ErrorMassage>
              )}
            </InputDiv>
            <InputDiv>
              <Label>비밀번호</Label>
              <InputBox
                width="432px"
                height="48px"
                onChange={handleInputChange}
                value={loginData.user.password}
                name='password'
                type="password"
                placeholder="비밀번호를 입력하세요"
                hasError={userErrorMessage.includes("비밀번호를 입력해주세요")}
              />
              {/* password을 입력하지 않은 경우 */}
              {userErrorMessage.includes("비밀번호를 입력해주세요") && (
                <ErrorMassage>비밀번호를 입력해주세요</ErrorMassage>
              )}
            </InputDiv>
            {errorMessage && loginData.user.email && loginData.user.password && (
              <ErrorMassage>{errorMessage}</ErrorMassage>
            )}
            <ButtonDiv>
              <Button
                type="submit"
                bg="black"
                width="432px"
                height="56px"
                br="4px"
                text="로그인"
                onClick={handleError}
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
  padding: 40px 0;
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
const ErrorMassage = styled.div`
  margin-top: 10px;
  color: red;
  font-size: 14px;
`