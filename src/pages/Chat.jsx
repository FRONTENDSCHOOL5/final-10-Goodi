import React from 'react'
import Layout from '../layout/Layout'
import styled from 'styled-components'

import chatTitle from '../../src/assets/Chat_title.svg'
import edgeChat from '../../src/assets/point-edge-chat.svg'
import sampleChat from '../../src/assets/sample-img/sampleChat.png'

import ProductData from '../mock/productData'
import ButtonLineIcon from '../components/common/ButtonLineIcon'

import Form from '../components/common/Form'

export default function Chat(reduceTop) {
  const chatList = ProductData;

  return (
    <Layout reduceTop={reduceTop}>
      <ChatWrap>
        <ChatWrapLeft>
          <h2><img src={chatTitle} alt="채팅 페이지" /></h2>
          {chatList.map((chat) => {
            return (
              <ChatList>
                <img src={chat.profile} alt="유저 프로필 이미지" />
                <strong>{chat.name}</strong>
                <span>2023년 6월 17일</span>
                <p>{chat.description}</p>
              </ChatList>
            )
          }).slice(0, 4)}
        </ChatWrapLeft>

        <ChatWrapRight>
          <ChatProfile>
            <strong>{chatList[0].name}</strong>
            <p>{chatList[0].email}</p>
            <ButtonLineIcon
              text="채팅 나가기"
              height="34px"
              color="var(--gray300-color)"
              basic
            />
          </ChatProfile>
          <Chatting>
            {/* 채팅 구현 필요 (이미지 처리 되어있음) */}
            <img src={sampleChat} alt="" />
            <Form />
          </Chatting>
        </ChatWrapRight>
      </ChatWrap>
    </Layout>
  )
}

const ChatWrap = styled.div`
  display: flex;
  min-height: 100%;
`

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
`

const ChatList = styled.section`
  border-bottom: 1px solid var(--gray200-color);
  min-height: 70px;
  padding: 25px 0 15px;

  & > img {
    width: 60px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
    float: left;
    margin-right: 20px;
  } 

  strong {
    display: inline-block;
    font-size: 20px;
    font-family: var(--font--Bold);
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    font-family: var(--font--Regular);
    display: inline-block;
    width: 85%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    font-size: 12px;
    font-family: var(--font--Medium);
    color: var(--gray300-color);
    float: right;
    margin-top: 10px;
  }
`

const ChatWrapRight = styled.section`
  width: 50%;
  background-color: #FAFAFA;
`

const ChatProfile = styled.div`
  background-color: white;
  padding: 0 60px;
  border-bottom: 1px solid var(--gray200-color);
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  strong {
    font-size: 20px;
    font-family: var(--font--Bold);
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    font-family: var(--font--Regular);
    color: var(--gray400-color);
  }

  button {
    grid-area: 1 / 2 / span 2 / 2;
    margin-top: 10px;
  }
`
const Chatting = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: column;
  gap: 100px;

  img {
    width: 100%;
  }
`