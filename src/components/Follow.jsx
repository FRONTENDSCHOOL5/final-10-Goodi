import React from 'react'
import followers from "../assets/Followers.svg"
import styled from 'styled-components'
import ProductData from '../mock/productData'
import ProfileUI from './common/ProfileUI';

export default function Follow() {
  const followList = ProductData;

  return (
    <FollowWrap>
      <h2><img src={followers} alt="" /></h2>
      {followList.map((item) => (
        <ProfileUI
          user_profile={item.profile}
          user_name={item.name}
          user_email={item.email}
        />
      )).slice(0, 3)}
    </FollowWrap>
  )
}

const FollowWrap = styled.article`
  width: 100%;

  h2 {
    margin-bottom: 30px;

    & > img {
      width: 60%;
    }
  }

  a {
    img {
    width: 40px;
    }
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`