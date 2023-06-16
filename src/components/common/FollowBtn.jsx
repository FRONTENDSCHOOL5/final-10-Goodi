import React from 'react'
import styled from 'styled-components'

export default function FollowBtn({ text }) {
  return (
    <FollowButton>{text}</FollowButton>
    // 상태에 따라 text가 변경되어야 함
  )
}

const FollowButton = styled.button`
  
`