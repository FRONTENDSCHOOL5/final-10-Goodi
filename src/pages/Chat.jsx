import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import styled, { keyframes } from "styled-components";
import { useRecoilValue } from "recoil";

// 이미지
import edgeChat from "../../src/assets/point-edge-chat.svg";
import chatTitle from "../assets/Chat_title.svg";
import chatDefImage from "../assets/profile_img_def.svg";
import userDefImage from "../assets/caht-img-def.svg";

// 컴포넌트
import Form from "../components/common/Form";
import ChatSkeleton from "../style/skeletonUI/skeletonPage/ChatSkeleton";
import Toast from "../components/common/Toast";

// API
import { profileAPI } from "../api/profile";
import followingAPI from "../api/following";

// Recoil
import loginToken from "../recoil/loginToken";
import accountname from "../recoil/accountname";

// Mock Data
import chatDummy from "../mock/chatDummy";
import checkImageUrl from "../components/common/checkImageUrl";

export default function Chat(reduceTop) {
  const token = useRecoilValue(loginToken);
  const accountName = useRecoilValue(accountname);

  const [toast, setToast] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState("");
  const [followingList, setFollowingList] = useState("");

  // 활성화하여 채팅할 상대 팔로잉 유저 ID 로 구별
  const [isActive, setIsActive] = useState("");

  // 상대방이 보낸 채팅 내용 화면에 노출
  const [chatContnet, setChatContent] = useState("");

  // 인풋창에 현재 입력하고 있는 값
  const [hasInput, setHasInput] = useState("");
  const [userImage, setUserImage] = useState("");

  // 내가 보내는 채팅 내용 화면에 노출
  const [submitChat, setSubmitChat] = useState([]);

  // 채팅 내용 활성화
  const [isChat, setIsChat] = useState(false);

  // 클릭한 해당 유저 정보가져오기
  const handleChat = (e) => {
    const dummyChat = e.currentTarget.dataset.dummyChat;
    const id = e.currentTarget.dataset.id;
    const image = e.currentTarget.dataset.image;
    setSubmitChat([]);
    setIsActive(id);
    setChatContent(dummyChat);
    setUserImage(image);
    setIsChat(true);
  };

  // 채팅을 전송하면 화면에 노출
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitChat((prevArray) => [...prevArray, hasInput]);
    setHasInput("");
  };

  console.log(followingList.length === 0);

  // 프로필, 팔로잉 데이터 가져오기
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await profileAPI(token);
        const followingData = await followingAPI(accountName, token);
        setProfileData(response.user);
        setFollowingList(followingData);
        setLoading(false);
      } catch (error) {
        console.log("api에러", error);
      }
    };

    fetchProfileData();
  }, []);

  // 채팅을 나가면 해당 채팅 유저 나가짐
  const handleExit = () => {
    setFollowingList(followingList.filter((el) => el._id !== isActive));
    setIsChat(false);
    setToast(true);
  };

  return (
    <Layout reduceTop={reduceTop}>
      {toast && <Toast setToast={setToast} text="채팅을 나갔습니다." />}
      <ChatWrap>
        {loading ? (
          <ChatSkeleton />
        ) : (
          <ChatWrapLeft>
            <h2>
              <img src={chatTitle} alt="채팅 페이지" />
            </h2>
            {followingList.length === 0 ? (
              <ChatUserNull>
                <img src={userDefImage} alt="채팅할 상대가 없을시 이미지" />
                <p>현재 진행중인 채팅이 없어요</p>
              </ChatUserNull>
            ) : (
              <div>
                {followingList?.map((el, i) => {
                  {
                    console.log(chatDummy[i]?.text);
                  }
                  return (
                    <ChatUser
                      className={isActive === el._id ? "active" : ""}
                      key={el._id}
                      onClick={handleChat}
                      data-dummy-chat={chatDummy[i]?.text}
                      data-id={el._id}
                      data-image={el.image}
                    >
                      <img
                        src={checkImageUrl(el.image, 'profile')}
                        alt="유저 이미지"
                      />
                      <ChatText>
                        <div>
                          <strong>{el.username}</strong>
                          <p>{chatDummy[i]?.date}</p>
                        </div>
                        <p className="dummy_chat">{chatDummy[i]?.text}</p>
                      </ChatText>
                    </ChatUser>
                  );
                })}
              </div>
            )}
          </ChatWrapLeft>
        )}
        <ChatWrapRight>
          <ChatProfile>
            <ProileTextWrap>
              <strong>{profileData.username}</strong>
              <p>{profileData.accountname}</p>
            </ProileTextWrap>
            {isChat && (
              <ExitButton onClick={handleExit}>채팅 나가기</ExitButton>
            )}
          </ChatProfile>

          {isChat ? (
            <ChatContents>
              <DefaultChat>
                {chatContnet && (
                  <img
                    src={
                      checkImageUrl(userImage, 'profile')
                    }
                    alt="채팅 상대 이미지"
                  />
                )}
                {chatContnet && <div>{chatContnet}</div>}
              </DefaultChat>
              {submitChat &&
                submitChat.map((el, i) => {
                  return (
                    <SubmitChatWrap>
                      <SubmitChat key={i}>{el}</SubmitChat>
                    </SubmitChatWrap>
                  );
                })}
            </ChatContents>
          ) : (
            <ChatContentsNull>
              <img src={chatDefImage} alt="기본 이미지" />
              <p>채팅할 유저를 선택해주세요!</p>
            </ChatContentsNull>
          )}

          <Chatting>
            <Form
              hasInput={hasInput}
              setHasInput={setHasInput}
              handleSubmit={handleSubmit}
            />
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
  border-right: 1px solid var(--gray200-color);
  box-sizing: border-box;

  h2 {
    width: 140px;
    margin: 60px 0 20px 80px;
    position: relative;
    background: url(${chatTitle}) no-repeat cover;

    & img {
      width: 100%;
    }

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

  & > div {
    height: 500px;
    overflow: scroll;

    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    &::-webkit-scrollbar {
      display: none; /* 크롬, 사파리, 오페라, 엣지 */
    }
  }
`;

const ChatUser = styled.section`
  padding: 28px 60px 28px 80px;
  display: flex;
  border-bottom: 1px solid var(--gray200-color);
  align-items: center;
  gap: 24px;
  transition: all 0.3s;

  &.active {
    background-color: #f0ffed;
  }

  &:hover {
    background-color: #f0ffed;
  }

  & img {
    width: 56px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50px;
  }
`;

const ChatText = styled.div`
  width: 100%;
  overflow: hidden;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & div strong {
    font-family: var(--font--Bold);
    font-size: 18px;
  }

  & div p {
    color: var(--gray300-color);
    font-size: 12px;
  }

  & > p {
    width: 100%;
    margin-top: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--gray500-color);
  }
`;

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
  z-index: 1;

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

const ChatContentsNull = styled.div`
  margin-top: 200px;
  text-align: center;

  & img {
    width: 80px;
  }

  & p {
    color: var(--gray300-color);
    margin-top: 24px;
  }
`;

const ChatUserNull = styled.div`
  margin-top: 120px;
  text-align: center;

  & img {
    width: 80px;
  }

  & p {
    color: var(--gray300-color);
    margin-top: 24px;
  }
`;

const ChatContents = styled.div`
  margin-top: 120px;
  height: 350px;
  padding: 0 32px 50px 32px;
  overflow: scroll;
  position: relative;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const DefaultChat = styled.section`
  margin-bottom: 48px;
  display: flex;
  gap: 16px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50px;
    /* aspect-ratio: 1 / 1; */
    object-fit: cover;
  }

  & div {
    max-width: 70%;
    background-color: white;
    display: inline-block;
    padding: 16px 18px;
    border-radius: 8px 8px 8px 0;
    border: 1px solid var(--gray200-color);
    line-height: 1.5;
  }
`;

const SubmitChatWrap = styled.section`
  flex-direction: row-reverse;
  display: flex;
  position: relative;
  transform: translateX(1000px);
  animation: translate ease 0.6s forwards;

  & + & {
    margin-top: 16px;
  }

  @keyframes translate {
    from {
      transform: translateY(1000px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const SubmitChat = styled.div`
  max-width: 70%;
  background-color: var(--dark-sub-color);
  display: inline-block;
  padding: 16px 18px;
  border-radius: 8px 8px 0 8px;
  color: white;
  line-height: 1.5;
`;

const Chatting = styled.div`
  width: 50%;
  background-color: white;
  position: absolute;
  bottom: 0;
`;
