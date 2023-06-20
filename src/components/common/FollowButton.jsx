import React, { useState } from 'react'
import styled from 'styled-components'

export default function FollowButton({ follow }) {
  const [active, setActive] = useState(false);

  console.log(follow);

  const handleClick = () => {
    setActive(!active);
    console.log(`Follow clicked for user with ID: ${follow.accountname}`);
  };

  return (
    <FollowBtn active={active} onClick={handleClick}>
      {active ? '삭제' : '팔로우'}
    </FollowBtn>
  )
}

const FollowBtn = styled.button`
  padding: 8px 20px;
  color: ${props => (props.active ? 'black' : 'var(--dark-sub-color)')};
  font-family: var(--font--Medium);
  border-radius: 30px;
  font-size: 13px;
  border: ${props => props.active ? "1px solid var(--gray300-color)" : "1px solid var(--main-color)"};
  transition: all 0.2s;
`