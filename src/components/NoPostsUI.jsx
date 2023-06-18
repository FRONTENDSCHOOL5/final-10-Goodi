import React from 'react'
import styled from 'styled-components'
import productNull from "../assets/product_null.svg"

export default function NoPostsUI() {
  return (
    <PostNull>
      <img src={productNull} alt="" />
      <p>현재 업로드된 글이 없습니다</p>
    </PostNull>
  )
}

const PostNull = styled.div`
  font-size: 16px;
  color: var(--gray400-color);
  text-align: center;

  img {
    width: 80px;
    display: block;
    margin: 210px auto 20px;
  }
`