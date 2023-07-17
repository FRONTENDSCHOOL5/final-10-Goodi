import React, { useState } from 'react'
import styled from 'styled-components';

import pointEdgeProfile from "../../assets/point-edge-profile.svg";
import authorProducts from "../../assets/Author-Products.svg";
import ProductCardList from '../../components/Product/ProductCardList';
import PostCardList from './../../components/Post/PostCardList';

export default function ProfileRightUI() {
  // 상품 목록, 게시글 목록 탭
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
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
        <ProductCardList profile="true" />
      )}
      {activeTab === 2 && (
        <PostCardList />
      )}
    </ProfileRight>
  )
}

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