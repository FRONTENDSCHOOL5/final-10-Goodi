import React, { useState } from 'react'
import Layout from '../layout/Layout'
import styled from 'styled-components';

import pointEdgeProfile from "../assets/point-edge-profile.svg";
import authorProducts from "../assets/Author-Products.svg";
import goodiLoading from "../assets/goodi_loading.svg";
import CardProduct from '../components/common/CardProduct';
import PostList from '../components/common/PostList';

export default function ProfileTest() {
  // 상품 목록, 게시글 목록 탭
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <Layout>
      <ProfileWrap>
        <ProfileLeft>


        </ProfileLeft>
        <ProfileRight>
          <h2>
            <img src={authorProducts} alt="Follower Products" />
          </h2>

          <TabMenu>
            <TabBtn
              className={activeTab === 1 ? 'active' : ''}
              onClick={() => handleTabClick(1)}
            >
              상품 목록
            </TabBtn>
            <TabBtn
              className={activeTab === 2 ? 'active' : ''}
              onClick={() => handleTabClick(2)}
            >
              게시글 목록
            </TabBtn>
          </TabMenu>
          {activeTab === 1 && (
            <CardProduct profile="true" />
          )}
          {activeTab === 2 && (
            <PostList />
          )}
        </ProfileRight>
      </ProfileWrap>

    </Layout>
  )
}

const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: 0.4fr auto;
  grid-template-rows: auto;
  gap: 30px;

  padding: 90px 60px 0 80px;
  box-sizing: border-box;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 330px;
    background: #000;
  }
`

const ProfileLeft = styled.section`
  min-width: 370px;
  height: fit-content;
  /* 페이지 네이션 추가 필요 */
  padding: 60px 24px 45px;
  background-color: #fff;
  border: 1px solid var(--gray300-color);
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  & > p {
    text-align: center;
    color: var(--gray500-color);
    font-size: 16px;
    font-family: var(--font--Regular);
    line-height: 1.3;
    text-align: justify;
  }
`;

const ProfileRight = styled.section`
  & > h2 {
    position: relative;
    margin-left: 30px;
    margin-top: 168px;

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: -35px;
      left: -34px;
      width: 95px;
      height: 40px;
      background: url(${pointEdgeProfile}) no-repeat center/contain;
      vertical-align: bottom;
    }
  }
`;

const TabMenu = styled.div`
  width: 220px;
  margin: 70px 0 30px;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  &:after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 70%;
    background-color: var(--gray300-color);
    position: absolute;
    top: 5px;
    left: 103px;
  }

  button.active {
    font-family: var(--font--semibold);
    color: black;
  }
`
const TabBtn = styled.button`
  padding: 8px 12px;
  color: var(--gray500-color);
  cursor: pointer;
`

const LoadingStyle = styled.div`
  background: url(${goodiLoading}) 50% 40% / 30% no-repeat;
  height: 100vh;

  p {
    font-size: 38px;
    text-align: center;
    font-family: var(--font--Bold);
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
  }
`