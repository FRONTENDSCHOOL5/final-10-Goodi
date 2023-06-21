import React from "react";
import styled from "styled-components";
import SkeletonItem from "../SkeletonItem";

export default function SearchSkeleton() {
  return (
    <>
      <SkeletonUserLayout>
        <SkeletonProfileImage></SkeletonProfileImage>
        <SkeletonUserName></SkeletonUserName>
      </SkeletonUserLayout>
      <SkeletonUserLayout>
        <SkeletonProfileImage></SkeletonProfileImage>
        <SkeletonUserName></SkeletonUserName>
      </SkeletonUserLayout>
      <SkeletonUserLayout>
        <SkeletonProfileImage></SkeletonProfileImage>
        <SkeletonUserName></SkeletonUserName>
      </SkeletonUserLayout>
    </>
  );
}

const SkeletonUserLayout = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 12px;

  & + & {
    margin-top: 18px;
  }
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
