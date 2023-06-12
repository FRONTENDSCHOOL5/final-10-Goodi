import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

import { InputBox } from "../components/common/Input";
import { ButtonDef } from "../components/common/Button";

import SymbolImage from "../assets/symbol.svg";
import LoginImage1 from "../assets/login_1.svg";
import LoginImage2 from "../assets/login_image5.svg";
import LoginImage3 from "../assets/login_image2.svg";
import LoginMent from "../assets/login_logo.svg";
import GoogleIcon from "../assets/google.svg";
import FacebookIcon from "../assets/facebook.svg";
import KakaoIcon from "../assets/kakao.svg";


const imageUrls = [LoginImage1, LoginImage2, LoginImage3];
const transitionDuration = 5000;
const fadeInDuration = 1000;
const fadeOutDuration = 1000;

export default function Login() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
        );
        setFadeOut(false);
        setFadeIn(true);
        setTimeout(() => {
          setFadeIn(false);
        }, fadeInDuration);
      }, fadeOutDuration);
    }, transitionDuration);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const getCurrentImageUrl = () => {
    return imageUrls[currentImageIndex];
  };

  return (
    <OuterDiv>
      <LeftDiv>
        <div>
          <ImageContainer
            imageLoaded={imageLoaded}
            fadeIn={fadeIn}
            fadeOut={fadeOut}
            fadeInDuration={fadeInDuration}
            fadeOutDuration={fadeOutDuration}
          >
            <img
              src={getCurrentImageUrl()}
              alt="carousel"
              onLoad={handleImageLoad}
            />
          </ImageContainer>
          <img className="login-ment" src={LoginMent} alt="Login Ment" />
        </div>
      </LeftDiv>
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
export const LeftDiv = styled.div`
  background-color: black;
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
const ImageContainer = styled.div`
  opacity: ${({ imageLoaded, fadeIn, fadeOut }) =>
    imageLoaded ? (fadeIn ? 1 : fadeOut ? 0 : 1) : 0};
  transition: opacity
    ${({ imageLoaded, fadeIn, fadeOut, fadeInDuration, fadeOutDuration }) =>
      imageLoaded ? (fadeIn || fadeOut ? "1s" : "1s") : "1s"}
    ease-in-out;
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
    cursor: pointer;
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
  display: inline;
  margin-bottom: 30px;
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
  position: relative;
  cursor: pointer;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
