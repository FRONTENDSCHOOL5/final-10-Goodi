import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";

import commonBanner from "../assets/common-banner.svg";
import arrowPrimaryIcon from "../assets/icon_arrow_primary.svg";
import sampleImg1 from "../assets/sample-img/sample-image-1.png"
import sampleImg2 from "../assets/sample-img/sample-image-2.png"
import sampleImg3 from "../assets/sample-img/sample-image-3.png"
import CardProduct from "../components/common/CardProduct";


export default function Main() {
  return (
    <Layout>


      <MainRight>
        <article>
          <img src={commonBanner} alt="팔로워 인기 TOP 3위 작가님들 지금 바로 상품구경" />
        </article>
        <section>
          <h2 className="a11y-hidden">팔로워 인기 TOP 3 작가 작품</h2>
          <ul>
            <li><img src={sampleImg1} alt="" /></li>
            <li><img src={sampleImg2} alt="" /></li>
            <li><img src={sampleImg3} alt="" /></li>
          </ul>
        </section>
      </MainRight>

      <Line />

      <MainLeft>
        <h2>Follower Products</h2>
        <CardProduct />
        <ProductBtn>나도 굿즈 판매하기<img src={arrowPrimaryIcon} alt="" /></ProductBtn>
      </MainLeft>


      <MainBottom>
        <h2 className="">팔로워 인기 TOP 3 작가 작품</h2>
        <ul>
          <li><img src={sampleImg1} alt="" /></li>
          <li><img src={sampleImg2} alt="" /></li>
          <li><img src={sampleImg3} alt="" /></li>
        </ul>
      </MainBottom>






    </Layout>
  );
}


const MainRight = styled.section`
  width: 580px;

  article {
    margin-bottom: 16px;
  }

  img {
    width: 100%;
  }


`

const Line = styled.span`
  height: 100%;
  width: 1px;
  background-color: #E2E2E2;
  display: inline-block;
  margin: 0 60px;
`

const MainLeft = styled.section`
  margin-right: 60px;

  & > h2 {
    font-family: "Montserrat";
    font-size: 38px;
    margin-bottom: 50px
  }
`

const MainBottom = styled.section`
  grid-row: 2 / 3;
	grid-column: 1 / 4;

  ul {
    display: flex;
  }

  li {
    width: 250px;
  }

  img {
    width: 100%;
  }
`

const ProductBtn = styled.button`
  margin: 50px auto;
  display: block;
  width: 217px;
  height: 56px;
  box-sizing: border-box;
  padding: 17px 24px;
  font-size: 18px;
  font-family: 'Pretendard-Regular';
  background-color: #000;
  color: white;
  border-radius: 28px;
  position: relative;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 12px;
    right: 21px
  }
`