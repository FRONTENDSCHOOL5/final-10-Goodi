import ProfileImgDef from "../assets/profile_img_def.svg";
import PlusBtnImg from "../assets/add_button.svg";
import React from "react";
import styled from "styled-components";
import { InputBox } from "../components/common/Input";
import { ButtonDef } from "../components/common/Button";
import SymbolImage from "../assets/symbol.svg";
import LoginImage1 from "../assets/login_1.svg";
import LoginImage2 from "../assets/login_image2.svg";
import LoginImage3 from "../assets/login_image3.svg";
import LoginMent from "../assets/login_ment.svg";
import { useEffect, useState } from "react";

const imageUrls = [LoginImage1, LoginImage2, LoginImage3];
const transitionDuration = 5000;
const fadeInDuration = 1000;
const fadeOutDuration = 1000;

export default function Setprofile() {
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
          <H1 className="a11y-hidden">초기 프로필 설정 페이지</H1>
          <ProfileDiv>
            <button>
              <img className="profile_def_img" src={ProfileImgDef}></img>
            </button>
            <button>
              <img className="add_button_img" src={PlusBtnImg}></img>
            </button>
          </ProfileDiv>
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
          <InputDiv>
            <Label>소개 메세지</Label>
            <textarea placeholder="나를 소개해보세요"></textarea>
          </InputDiv>
          <ButtonDiv>
            <ButtonDef
              type="button"
              bg="black"
              width="432px"
              height="56px"
              br="4px"
            >
              Goodi 시작하기
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
export const ProfileDiv = styled.div`
  position: relative;
  .add_button_img {
    position: absolute;
    top: 67px;
    left: 67px;
  }
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;

  textarea {
    resize: none;
    border: 1px solid var(--gray300-color);
    width: 432px;
    height: 96px;
    border-radius: 4px;
    padding: 15px;
    box-sizing: border-box;
    outline-color: black;
    &::placeholder {
      color: var(--gray300-color);
      font-family: var(--font--Regular);
      font-size: 1rem;
    }
  }
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
