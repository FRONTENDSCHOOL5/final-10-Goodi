import React from 'react'
import followers from "../assets/Followers.svg"
import styled from 'styled-components'
import ProfileUI from './common/ProfileUI';


export default function Follow({ followerData, followingData, activeFollow }) {
  return (
    <FollowWrap>
      <h2><img src={followers} alt="" /></h2>
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
        <p>사용자가 존재하지 않습니다.</p>
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