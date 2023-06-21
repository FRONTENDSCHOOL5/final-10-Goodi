import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import userAPI from "../api/user";
import UploadImage from "../api/UploadImage";

import { InputBox } from "../components/common/Input";
import Button from "../components/common/Button";
import { LeftDiv } from "../components/Carousel";

import ProfileImgDef from "../assets/profile_img_def.svg";
import PlusBtnImg from "../assets/add_button.svg";

export default function Setprofile() {
  const [profileSelectedImage, setProfileSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const [userErrorMessage, setUserErrorMessage] = useState([]);
  

  const navigate = useNavigate();
  const location = useLocation();
  const BASE_URL = "https://api.mandarin.weniv.co.kr/";
  const { email, password } = location.state || { email: "", password: "" };
  const [signUpData, setSignUpData] = useState({
    user: {
      email: email,
      password: password,
      accountname: email.split("@")[0],
      username: "",
      image: BASE_URL + profileSelectedImage,
      intro: "",
    },
  });
  // console.log(signUpData.user.intro);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  const handleLogin = async (signUpData) => {
    const response = await userAPI(signUpData);

    if (response && response.hasOwnProperty("user")) navigate("/login");
    else {
      const errorMessage =
        response && response.message ? response.message : handleError();
      setErrorMessage(errorMessage);
    }
  };

  const handleError = () => {
    const errors = [];
    if (signUpData.user.username === "") {
      errors.push("닉네임을 입력해주세요");
    } else {
      errors.push("");
    }
    setUserErrorMessage(errors);
  };
console.log(signUpData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleError();
    await handleLogin(signUpData);
  };
  
  const handleImageChange = async (e) => {
    const { name, value } = e.target;
    if ("file") {
      const file = e.target.files[0];
      const imgSrc = await UploadImage(file);
      const newImage = imgSrc;
      setProfileSelectedImage(newImage);
      setSignUpData((prevState) => ({
        ...prevState,
        user: {
          ...prevState.user,
          image: newImage,
        },
      }));
    }
  };

  return (
    <OuterDiv>
      <LeftDiv />
      <RightDiv>
        <div className="right-inner">
          <H1 className="a11y-hidden">초기 프로필 설정 페이지</H1>
          <ProfileDiv>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              accept="image/jpeg, image/png, image/svg"
              onChange={handleImageChange}
            />
            <label htmlFor="fileInput">
              <ProfileImgWrap>
                <img
                  src={
                    profileSelectedImage
                      ? BASE_URL + profileSelectedImage
                      : ProfileImgDef
                  }
                  alt="Upload"
                  style={profileSelectedImage ? { width: "100px" } : null}
                />
              </ProfileImgWrap>

              <img
                className="add_button_img"
                src={PlusBtnImg}
                alt="Upload"
                style={{ cursor: "pointer" }}
              />
            </label>
          </ProfileDiv>
          <form onSubmit={handleSubmit}>
            <InputDiv>
              <Label>닉네임</Label>
              <InputBox
                width="432px"
                height="48px"
                padding="15px"
                name="username"
                onChange={handleInputChange}
                value={signUpData.user.username}
                placeholder="Goodi에서 사용할 닉네임을 입력해주세요"
                hasError={userErrorMessage.includes("닉네임을 입력해주세요")}
              />
              {/* email을 입력하지 않은 경우 */}
              {userErrorMessage.includes("닉네임을 입력해주세요") && (
                <ErrorMassage>{userErrorMessage}</ErrorMassage>
              )}
            </InputDiv>
            <InputDiv>
              <Label>소개 메세지</Label>
              <textarea
                placeholder="나를 소개해보세요"
                name="intro"
                onChange={handleInputChange}
                value={signUpData.user.intro}
              ></textarea>
            </InputDiv>
            <ButtonDiv>
              <Button
                text="Goodi 시작하기"
                type="submit"
                bg="black"
                width="432px"
                br="none"
                onClick={handleError}
              />
            </ButtonDiv>
          </form>
        </div>
      </RightDiv>
    </OuterDiv>
  );
}
const OuterDiv = styled.div`
  display: flex;
`;

const RightDiv = styled.div`
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
const ProfileDiv = styled.div`
  position: relative;
  margin-bottom: 30px;
  cursor: pointer;
  .add_button_img {
    position: absolute;
    top: 67px;
    left: 67px;
  }
`;
const ProfileImgWrap = styled.div`
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1 / 1;
  & > img {
    width: 100%;
    aspect-ratio: 1/ 1;
    object-fit: cover;
    cursor: pointer;
    border-radius: 50%;
  }
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  textarea {
    resize: none;
    border: 1px solid var(--gray300-color);
    width: 432px;
    height: 96px;
    border-radius: 4px;
    padding: 15px;
    box-sizing: border-box;
    outline-color: black;
    font-family: var(--font--Regular);
    font-size: 1rem;
    &::placeholder {
      color: var(--gray300-color);
      font-family: var(--font--Regular);
      font-size: 1rem;
    }
  }
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

const Label = styled.label`
  font-family: var(--font--Bold);
  margin-bottom: 9px;
  font-weight: 700;
`;
const ButtonDiv = styled.div`
  margin-top: 100px;
`;
const ErrorMassage = styled.div`
  margin-top: 10px;
  color: red;
  font-size: 14px;
`;
