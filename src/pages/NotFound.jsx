import React from "react";
import styled from "styled-components";

// 컴포넌트
import Layout from "../layout/Layout";

// 이미지
import notFound from "../assets/notfoung_image.svg";

export default function NotFound() {
  return (
    <Layout>
      <NotFoundLayout>
        <NotFoundWrap>
          <img src={notFound} alt="not found 404 이미지" />
          <p>죄송합니다 해당 페이지를 찾을 수 없습니다.</p>
        </NotFoundWrap>
      </NotFoundLayout>
    </Layout>
  );
}

const NotFoundLayout = styled.article`
  margin-top: -7.5rem;
  padding: 200px 0 160px 0;
  background-color: #fafafa;
`;

const NotFoundWrap = styled.div`
  width: 70%;
  padding: 110px 0 100px 0;
  box-sizing: border-box;
  background-color: white;
  margin: 0 auto;
  border-radius: 16px;
  border: 1px solid var(--gray200-color);

  img {
    width: 100%;
  }

  p {
    color: var(--gray400-color);
    font-size: 20px;
    text-align: center;
  }
`;
