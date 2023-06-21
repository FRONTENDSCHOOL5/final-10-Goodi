import React from 'react'
import PostSkeleton from './PostSkeleton'
import styled from 'styled-components'

export default function PostListSkeleton() {
  return (
    <PostListSkeletonStyle>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </PostListSkeletonStyle>
  )
}

const PostListSkeletonStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 60px 20px;
  margin-bottom: 70px;
`