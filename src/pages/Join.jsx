import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputBox } from "../components/common/Input";
import Button from "../components/common/Button";
import { LeftDiv } from "../components/Carousel";

import JoinTo from "../assets/Join to.svg";

export default function Join() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState([]);
  const [userErrorMessage, setUserErrorMessage] = useState([]);

  const [joinData, setJoinData] = useState({
    user: {
      email: "",
      password: "",
      accountname: "",
      username: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJoinData((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };
  const handleError = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = [];
    if (joinData.user.email === "") {
      errors.push("유효한 이메일을 입력해주세요");
    } else if (!emailRegex.test(joinData.user.email)) {
      errors.push("유효한 이메일을 입력해주세요");
    } else if (joinData.user.password.length < 6) {
      errors.push("비밀번호를 6자리 이상 입력해주세요");
    } else {
      errors.push("");
      navigate("/setprofile", { state: joinData.user });
    }
    setUserErrorMessage(errors);
  };

  return (
    <OuterDiv>
      <LeftDiv />
      <RightDiv>
        <div className="right-inner">
          <H1 className="a11y-hidden">회원가입 페이지</H1>
          <H2>
            <img src={JoinTo} alt="Join to" />
          </H2>
          <InputDiv>
            <Label>이메일</Label>
            <InputBox
              type="email"
              width="432px"
              height="48px"
              padding="15px"
              name="email"
              onChange={handleInputChange}
              value={joinData.user.email}
              placeholder="유효한 이메일을 입력해주세요"
              hasError={userErrorMessage.includes(
                "유효한 이메일을 입력해주세요"
              )}
            />
            {/* email을 입력하지 않은 경우 */}
            {userErrorMessage.includes("유효한 이메일을 입력해주세요") && (
              <ErrorMassage>{userErrorMessage}</ErrorMassage>
            )}
          </InputDiv>
          <InputDiv>
            <Label>비밀번호</Label>
            <InputBox
              type="password"
              width="432px"
              height="48px"
              name="password"
              onChange={handleInputChange}
              value={joinData.user.password}
              placeholder="비밀번호를 입력하세요"
              hasError={userErrorMessage.includes(
                "비밀번호를 6자리 이상 입력해주세요"
              )}
            />
            {/* 비밀번호가 6글자 미만인 경우 */}
            {userErrorMessage.includes(
              "비밀번호를 6자리 이상 입력해주세요"
            ) && (
              <ErrorMassage>비밀번호를 6자리 이상 입력해주세요</ErrorMassage>
            )}
          </InputDiv>
          <ButtonDiv>
            <Button
              text="다음"
              type="submit"
              bg="black"
              width="432px"
              br="none"
              onClick={handleError}
            />
          </ButtonDiv>
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

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
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
  img {
    height: 76px;
  }
`;
const Label = styled.label`
  font-family: var(--font--Bold);
  margin-bottom: 9px;
  font-weight: 700;
`;
const ButtonDiv = styled.div`
  margin-top: 166px;
`;
const ErrorMassage = styled.div`
  margin-top: 10px;
  color: red;
  font-size: 14px;
`;
