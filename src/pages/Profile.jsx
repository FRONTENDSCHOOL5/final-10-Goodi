import React from 'react'
import Layout from '../layout/Layout'
import styled from 'styled-components';

import pointEdgeProfile from "../assets/point-edge-profile.svg";
import authorProducts from "../assets/Author-Products.svg";
import profileImgDef from "../assets/profile_img_def.svg";

import CardProduct from '../components/common/CardProduct';
import ButtonLineIcon from '../components/common/ButtonLineIcon';
import userDummy from '../mock/userDummy';
import MainLayout from '../layout/MainLayout';

export default function Profile() {
  const data = userDummy[0];
  console.log(data);

  return (
    <MainLayout reduceTop="true">
      <ProfileLeft>
        <ProfileUser>
          <IntroWrap>
            <img src={profileImgDef} alt="" />
            <strong>{data.name}</strong>
            <p>{data.email}</p>
          </IntroWrap>

          <BtnWrap>
            <ButtonLineIcon button_content="작가랑 채팅하기" basic="true" />
            <ButtonLineIcon button_content="작가 팔로우" />
          </BtnWrap>

          <p>{data.text}</p>

          <FollowWrap>
            <FollowDiv>
              <strong>{data.follower}</strong>
              <p>팔로워</p>
            </FollowDiv>
            <FollowDiv>
              <strong>{data.following}</strong>
              <p>팔로잉</p>
            </FollowDiv>
          </FollowWrap>
        </ProfileUser>

        <div style={{ marginTop: "60px" }}>
          Component
        </div>
      </ProfileLeft>

      <span className="Line" />

      <ProfileRight>
        <Title><img src={authorProducts} alt="Follower Products" /></Title>
        <CardProduct />
      </ProfileRight>
    </MainLayout>
  )
}

const ProfileLeft = styled.section`
  width: 100%;
`;

const ProfileUser = styled.section`
  width: 100%;
  padding: 50px 40px;
  background-color: #fff;
  border: 1px solid var(--gray300-color);
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;

  & > p {
    text-align: center;
    color: var(--gray500-color);
    font-size: 16px;
    font-family: var(--font--Regular);
    line-height: 1.3;
  }
`

const IntroWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100px;
    margin-bottom: 18px;
  }

  strong {
    font-family: var(--font--semibold);
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-family: var(--font--Regular);
    font-size: 18px;
    color: var(--gray400-color);
  }
`

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const ProfileRight = styled.section`
  margin-top: 165px;
`;

const Title = styled.h2`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: -35px;
    left: -25px;
    width: 95px;
    height: 40px;
    background: url(${pointEdgeProfile}) no-repeat center/contain;
    vertical-align: bottom;
  }
`;

const FollowWrap = styled.div`
  width: 100%;
  border-top: 1px solid var(--gray300-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  gap: 30px;

  &::before {
    content: '';
    position: absolute;
    top: 18px;
    left: 50%;
    width: 1px;
    height: 100%;
    display: inline-block;
    background-color: var(--gray100-color);
  }
`

const FollowDiv = styled.div`
  text-align: center;
  margin-top: 24px;

  strong {
    font-family: var(--font--semibold);
    font-size: 25px;
  }

  p {
    font-family: var(--font--Medium);
    font-size: 18px;
    color: var(--gray400-color);
    margin-top: 12px;
  }
`
