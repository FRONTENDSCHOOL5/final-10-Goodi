import React from "react";
import styled from "styled-components";
import SkeletonItem from "../SkeletonItem";
import chatTitle from "../../../assets/Chat_title.svg";
import edgeChat from "../../../assets/point-edge-chat.svg";

export default function ChatSkeleton() {
  return (
    <ChatWrapSkeleton>
      <h2>
        <img src={chatTitle} alt="채팅 페이지" />
      </h2>

      <ChatUserSkeletonWrap>
        <ImageSkeleton />
        <TextWrapSkeleton>
          <UserNameSkeleton />
          <ChatContentSkeleton />
        </TextWrapSkeleton>
      </ChatUserSkeletonWrap>

      <ChatUserSkeletonWrap>
        <ImageSkeleton />
        <TextWrapSkeleton>
          <UserNameSkeleton />
          <ChatContentSkeleton />
        </TextWrapSkeleton>
      </ChatUserSkeletonWrap>

      <ChatUserSkeletonWrap>
        <ImageSkeleton />
        <TextWrapSkeleton>
          <UserNameSkeleton />
          <ChatContentSkeleton />
        </TextWrapSkeleton>
      </ChatUserSkeletonWrap>
    </ChatWrapSkeleton>
  );
}

const ChatWrapSkeleton = styled.div`
  width: 50%;
  height: 600px;

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
`;

const ChatUserSkeletonWrap = styled.div`
  padding: 28px 60px 28px 80px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const ImageSkeleton = styled(SkeletonItem)`
  width: 56px;
  aspect-ratio: 1 / 1;
  border-radius: 50px;
`;

const TextWrapSkeleton = styled.div``;
const UserNameSkeleton = styled(SkeletonItem)`
  width: 150px;
  height: 20px;
`;

const ChatContentSkeleton = styled(SkeletonItem)`
  width: 400px;
  height: 20px;
  margin-top: 12px;
`;
