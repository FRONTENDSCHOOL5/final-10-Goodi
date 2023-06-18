import React from 'react'
import styled from 'styled-components'
import ProfileUI from './common/ProfileUI';
import followers from "../assets/Followers.svg"
import following from "../assets/Following.svg"
import followSymbol from "../assets/follow_symbol.svg"

export default function Follow({ followerData, followingData, activeFollow }) {
  return (
    <FollowWrap>
      {
        activeFollow === 1 ?
          (<h2><img src={followers} alt="" /></h2>) :
          (<h2><img src={following} alt="" /></h2>)
      }

      {activeFollow === 1 && followerData && followerData.length > 0 ? (
        followerData.map((follow) => (
          <ProfileUI
            key={follow.id}
            user_profile={follow.image}
            user_name={follow.username}
            user_email={follow.accountname}
            follow="true"
          />
        ))
      ) : activeFollow === 2 && followingData && followingData.length > 0 ? (
        followingData.map((follow) => (
          <ProfileUI
            key={follow.id}
            user_profile={follow.image}
            user_name={follow.username}
            user_email={follow.accountname}
            follow="true"
          />
        ))
      ) : (
        <FollowNull>
          <img src={followSymbol} alt="" />
          아직 유저가 존재하지 않습니다.
        </FollowNull>
      )}
    </FollowWrap>
  );
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
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const FollowNull = styled.div`
  font-size: 16px;
  color: var(--gray400-color);
  text-align: center;

  img {
    width: 80px;
    display: block;
    margin: 0 auto 10px;
  }
`