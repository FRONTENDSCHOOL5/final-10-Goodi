import React from "react";
import styled from "styled-components";

import { InputBox } from "../components/common/Input";
import { ButtonDef } from "../components/common/Button";
import Button from "../components/common/Button";

import SymbolImage from "../assets/symbol.svg";
import LoginImage1 from "../assets/login_1.svg";
import LoginImage2 from "../assets/login_image5.svg";
import LoginImage3 from "../assets/login_image2.svg";
import LoginMent from "../assets/login_logo.svg";

import { useEffect, useState } from "react";


const imageUrls = [LoginImage1, LoginImage2, LoginImage3];
const transitionDuration = 5000;
const fadeInDuration = 1000;
const fadeOutDuration = 1000;

export default function Join() {
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
            <ButtonDef
              type="button"
              bg="black"
              width="432px"
              height="56px"
              br="4px"
            >
              다음
            </ButtonDef>
          </ButtonDiv>
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
    margin-top: -50px;
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
    padding: 6px 0px;
  }
  .join_button {
    font-size: 1.25rem;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
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
  margin-bottom: 10%;
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
  margin-top: 16%;
`;
