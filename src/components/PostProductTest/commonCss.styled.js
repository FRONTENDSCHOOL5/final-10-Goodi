import styled from "styled-components";

import PlusIcon from "../../assets/icon_plus_gray.svg";
import addIcon from "../../assets/add_button_gray.svg";
import thumnailBanner from "../../assets/thumnail_banner.svg";

export const PostUiWrap = styled.section`
  width: 80%;
  padding: 40px 60px 60px 60px;
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid var(--gray200-color);
  background-color: #ffffff;

  & > img {
    height: 58px;
  }
  & > p {
    color: var(--gray400-color);
    font-size: 16px;
    margin-top: 4px;
  }
`;

export const UploadWrap = styled.form`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const ImagUploadWrap = styled.fieldset`
  flex-grow: 1;
  flex-basis: 400px;
  display: flex;
  gap: 5%;
`;

export const ContentUploadWrap = styled.fieldset`
  flex-grow: 1;
  button {
    margin-top: 48px;
  }
`;

export const Line = styled.span`
  width: 1px;
  display: inline-block;
  background-color: var(--gray200-color);
  margin: 0 40px;
`;

export const ThumbnailWrap = styled.div`
  width: 70%;
`;

export const ProductImages = styled.div`
  width: 25%;
`;

export const Thumbnail = styled.label`
  cursor: pointer;
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 1px solid var(--gray200-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: var(--gray100-color);
    transition: all 0.3s;
  }

  img {
    width: 100%;
    aspect-ratio: 1/ 1;
    object-fit: cover;
  }

  &::before {
    content: url(${thumnailBanner});
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

export const ProductImage = styled.label`
  cursor: pointer;
  display: block;
  width: 100%;
  aspect-ratio: 1 /1;
  background-color: var(--gray100-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: var(--gray200-color);
    transition: all 0.3s;
  }

  & + & {
    margin-top: 20px;
  }

  img {
    width: 100%;
    aspect-ratio: 1 /1;
    object-fit: cover;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 24px;
  }
`;
export const Label = styled.label`
  font-family: var(--font--Bold);
  margin-bottom: 8px;
`;

export const ErrorMassage = styled.div`
  margin-top: 10px;
  color: red;
  font-size: 14px;
`;

export const LoadingImage = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 40px;
  animation: loading 1s ease 100;

  & .circle1 {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #c5c5c5;
  }

  & .circle2 {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #c5c5c5;
    margin-top: 20px;
  }

  @keyframes loading {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
