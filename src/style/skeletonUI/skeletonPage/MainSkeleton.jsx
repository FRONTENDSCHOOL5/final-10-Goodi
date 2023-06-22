import React from 'react'
import styled from 'styled-components';
import SkeletonItem from '../SkeletonItem';
import PostSkeleton from './PostSkeleton';

export default function MainSkeleton() {
  return (
    <MainWrap>
      <SkeletonMainLeft />

      <Line />

      <SkeletonMainRight>
        <MainRightTitle />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </SkeletonMainRight>
    </MainWrap>
  )
}

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.1fr 1fr;
  grid-template-rows: auto;
  margin-bottom: 120px;
`

const Line = styled.span`
  width: 1px;
  height: 100%;
  display: inline-block;
  background-color: var(--gray200-color);
  margin: 0 60px;
`;

const SkeletonMainLeft = styled(SkeletonItem)`
  width: 100%;
  height: 100%;
`;

const SkeletonMainRight = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 60px 20px;
  padding-right: 60px;
`;

const MainRightTitle = styled(SkeletonItem)`
  width: 470px;
  height: 50px;
  grid-column: 1 / 3;
`