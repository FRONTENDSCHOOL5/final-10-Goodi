import React, { useState } from 'react'
import styled from 'styled-components'
import followAPI from '../../api/follow';
import loginToken from './../../recoil/loginToken';
import { useRecoilState } from 'recoil';
import unfollowAPI from '../../api/unfollow';

export default function FollowButton(props) {
  const [token, setToken] = useRecoilState(loginToken);
  const [active, setActive] = useState(false);
  const { follow } = props;

  const handleClick = async () => {
    if (setActive(!active)) {
      const response = await followAPI(follow.accountname, token);
      console.log(follow.accountname);
      console.log(response);
      // 팔로우 성공
    } else {
      const response = await unfollowAPI(follow.accountname, token);
      console.log(follow.accountname);
      console.log(response);
      // 팔로우 취소
    }
  };

  console.log(active);

  return (
    <FollowBtn active={active} onClick={handleClick}>
      {active ? '팔로우' : '삭제'}
    </FollowBtn>
  )
}

const FollowBtn = styled.button`
  padding: 8px 20px;
  color: ${props => (props.active ? 'var(--dark-sub-color)' : 'black')};
  font-family: var(--font--Medium);
  border-radius: 30px;
  font-size: 13px;
  border: ${props => props.active ? "1px solid var(--main-color)" : "1px solid var(--gray300-color)"};
  transition: all 0.2s;
`