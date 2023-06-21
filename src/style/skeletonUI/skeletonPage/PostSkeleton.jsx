import React from 'react'
import styled from 'styled-components'
import SkeletonItem from './../SkeletonItem';

export default function PostSkeleton() {
  return (
    <SkeletotnPost>
      <SkeletonUserLayout>
        <SkeletonProfileImage />
        <div>
          <SkeletonUserName />
          <SkeletonId />
        </div>
      </SkeletonUserLayout>
      <SkeletonPostImage />
    </SkeletotnPost>
  );
};

const SkeletotnPost = styled.div`
  display: flex;
  flex-direction: column;
`

const SkeletonUserLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkeletonProfileImage = styled(SkeletonItem)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const SkeletonUserName = styled(SkeletonItem)`
  width: 136px;
  height: 18px;
  margin-bottom: 2px;
`;

const SkeletonId = styled(SkeletonItem)`
  width: 107px;
  height: 14px;
`

const SkeletonPostImage = styled(SkeletonItem)`
  width: 100%;
  height: 280px;
`