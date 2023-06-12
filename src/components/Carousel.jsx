import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoginMent from "../assets/login_logo.svg";
import LoginImage1 from "../assets/login_1.svg";
import LoginImage2 from "../assets/login_image5.svg";
import LoginImage3 from "../assets/login_image2.svg";

export function LeftDiv () {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const imageUrls = [LoginImage1, LoginImage2, LoginImage3];
  const transitionDuration = 5000;
  const fadeInDuration = 1000;
  const fadeOutDuration = 1000;

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
    <Container>
      <ImageContainer
        imageLoaded={imageLoaded}
        fadeIn={fadeIn}
        fadeOut={fadeOut}
        fadeInDuration={fadeInDuration}
        fadeOutDuration={fadeOutDuration}
      >
        <img src={getCurrentImageUrl()} alt="carousel" onLoad={handleImageLoad} />
      </ImageContainer>
      <img className="login-ment" src={LoginMent} alt="Login Ment" />
    </Container>
  );
};

const Container = styled.div`
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

export default LeftDiv;