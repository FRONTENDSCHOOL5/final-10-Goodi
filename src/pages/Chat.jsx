import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";

// 이미지
import edgeChat from "../../src/assets/point-edge-chat.svg";
import sampleChat from "../../src/assets/sample-img/sampleChat.png";

// 컴포넌트
import Form from "../components/common/Form";

// API
import profileAPI from "../api/profile";
import followingAPI from "../api/following";

// Recoil
import loginToken from "../recoil/loginToken";
import accountname from "../recoil/accountname";

// Mock Data
import chatDummy from "../mock/chatDummy";

export default function Chat(reduceTop) {
  const token = useRecoilValue(loginToken);
  const accountName = useRecoilValue(accountname);

  const [profileData, setProfileData] = useState("");
  const [followingList, setFollowingList] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await profileAPI(token);
        const followingData = await followingAPI(accountName, token);
        setProfileData(response.user);
        setFollowingList(followingData);
      } catch (error) {
        console.log("api에러", error);
      }
    };

    fetchProfileData();
  }, []);

  console.log(chatDummy);

  return (
    <Layout reduceTop={reduceTop}>
      <ChatWrap>
        <ChatWrapLeft>
          {followingList.map((el, i) => {
            return <ChatUser key={el._id}>{chatDummy[i]}</ChatUser>;
          })}
        </ChatWrapLeft>

        <ChatWrapRight>
          <ChatProfile>
            <ProileTextWrap>
              <strong>{profileData.username}</strong>
              <p>{profileData.accountname}</p>
            </ProileTextWrap>
            <ExitButton>채팅 나가기</ExitButton>
          </ChatProfile>

          <ChatContents>
            <DefaultChat>안녕하세요</DefaultChat>
          </ChatContents>

          <Chatting>
            <Form />
          </Chatting>
        </ChatWrapRight>
      </ChatWrap>
    </Layout>
  );
}

const ChatWrap = styled.div`
  position: relative;
  display: flex;
  min-height: 100%;
`;

const ChatWrapLeft = styled.section`
  width: 50%;
  padding: 0 60px 60px 80px;
  border-right: 1px solid var(--gray200-color);
  box-sizing: border-box;

  h2 {
    margin: 60px 0 30px;
    position: relative;

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: -35px;
      left: -45px;
      width: 130px;
      height: 40px;
      background: url(${edgeChat}) no-repeat center/contain;
      vertical-align: bottom;
    }
  }
`;

const ChatUser = styled.section``;

const ChatWrapRight = styled.section`
  width: 50%;
  background-color: #fafafa;
`;

const ChatProfile = styled.div`
  width: 48%;
  background-color: white;
  padding: 20px 32px;
  border-bottom: 1px solid var(--gray200-color);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 0.5;

  button {
    z-index: 1;
  }
`;

const ProileTextWrap = styled.div`
  strong {
    font-size: 20px;
    font-family: var(--font--Bold);
  }

  p {
    margin-top: 6px;
    font-size: 15px;
    font-family: var(--font--Regular);
    color: var(--gray400-color);
  }
`;

const ExitButton = styled.button`
  color: var(--gray400-color);
  border-radius: 50px;
  border: 1px solid var(--gray200-color);
  padding: 8px 16px;
  font-size: 14px;

  &:hover {
    background-color: var(--gray50-color);
  }
`;

const ChatContents = styled.div`
  margin-top: 120px;
  height: 500px;
  padding: 0 32px;
  /* background-color: violet; */
  overflow: scroll;
`;

const DefaultChat = styled.section`
  background-color: white;
  display: inline-block;
  padding: 16px 18px;
  border-radius: 8px 8px 8px 0;
  border: 1px solid var(--gray200-color);
`;

const Chatting = styled.div`
  width: 50%;
  background-color: white;
  position: absolute;
  bottom: 0;
`;
