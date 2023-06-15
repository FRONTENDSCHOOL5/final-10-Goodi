import React from "react";
import styled from "styled-components";
import CardProduct from "../components/common/CardProduct";
import { Link } from "react-router-dom";

import commonBanner from "../assets/common-banner.svg";
import arrowPrimaryIcon from "../assets/icon_arrow_primary.svg";
import pointEdge from "../assets/point-edge.svg";
import followerProducts from "../assets/follower-products.svg";
import popularAuthor from "../assets/popular-author.svg";

import PopularAuthorView from "../components/PopularAuthorView";
import ProductData from "../mock/productData";
import Layout from "../layout/Layout";

export default function Main() {
  const data = ProductData[12];
  const data1 = ProductData[10];
  const data2 = ProductData[11];

  return (
    <Layout>
      <MainWrap>
        <MainLeft>
          <article>
            <img
              src={commonBanner}
              alt="팔로워 인기 TOP 3위 작가님들 지금 바로 상품구경"
            />
          </article>
          <section>
            <h2 className="a11y-hidden">팔로워 인기 TOP 3 작가 작품</h2>
            <ul>
              {data.img.map((item) => {
                return (
                  <li key={item.id}>
                    <img src={item.dummyImg} alt="" />
                  </li>
                );
              })}
            </ul>
          </section>
        </MainLeft>

        <span className="Line" />

        <MainRight>
          <Title>
            <img src={followerProducts} alt="Follower Products" />
          </Title>
          <CardProduct />
          <ProductLink to="/">나도 굿즈 판매하기</ProductLink>
        </MainRight>

        <MainBottom>
          <Title>
            <img src={popularAuthor} alt="Popular Author" />
          </Title>
          <PopularAuthorView data={data1} />
          <PopularAuthorView data={data2} />
        </MainBottom>
      </MainWrap>
    </Layout>
  );
}

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.1fr 1fr;
  grid-template-rows: auto;
`

const MainLeft = styled.section`
  article {
    margin-bottom: 16px;
  }

  img {
    width: 100%;
  }
`;

const MainRight = styled.section`
  padding-right: 60px;
`;

const MainBottom = styled.section`
  padding: 110px 60px 150px 80px;
  grid-row: 2 / 3;
  grid-column: 1 / 4;

`;

const Title = styled.h2`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: -35px;
    left: -25px;
    width: 130px;
    height: 40px;
    background: url(${pointEdge}) no-repeat center/contain;
    vertical-align: bottom;
  }
`;

const ProductLink = styled(Link)`
  width: 217px;
  height: 56px;
  padding: 12px 24px;
  margin: 0 auto;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  background-color: black;
  color: white;
  border-radius: 30px;

  font-size: 18px;
  font-family: var(--font--semibold);
  text-decoration: none;
  white-space: nowrap;

  &::after {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background: url(${arrowPrimaryIcon}) no-repeat center/cover;
  }
`;
