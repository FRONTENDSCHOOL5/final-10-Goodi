import React from 'react'
import userDummy from '../../mock/userDummy'
import Post from './Post';
import styled from 'styled-components';

export default function PostList() {
  const data = userDummy; // 더미데이터 배열

  return (
    <PostListWrap>
      {data.map((user, index) => (
        <Post
          key={index}
          profile={user.profileImg}
          name={user.name}
          email={user.email}
        />
      ))}
    </PostListWrap>
  );

}

const PostListWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 60px 20px;
  margin-bottom: 70px;
`