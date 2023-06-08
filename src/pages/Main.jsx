import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import CardProduct from "../components/common/CardProduct";
import { Link } from "react-router-dom";

import commonBanner from "../assets/common-banner.svg";
import arrowPrimaryIcon from "../assets/icon_arrow_primary.svg";

import sampleImg1 from "../assets/sample-img/sample-image-1.png"
import sampleImg2 from "../assets/sample-img/sample-image-2.png"
import sampleImg3 from "../assets/sample-img/sample-image-3.png"
import sampleImg4 from "../assets/sample-img/sample-image-4.jpg"

import sampleImg5 from "../assets/sample-img/sample-image-5.png"
import sampleImg6 from "../assets/sample-img/sample-image-6.png"
import sampleImg7 from "../assets/sample-img/sample-image-7.png"
import sampleImg8 from "../assets/sample-img/sample-image-8.png"
import sampleImg9 from "../assets/sample-img/sample-image-9.png"
import sampleImg10 from "../assets/sample-img/sample-image-10.png"
import sampleImg11 from "../assets/sample-img/sample-image-11.png"
import sampleImg12 from "../assets/sample-img/sample-image-12.png"

import sampleImg13 from "../assets/sample-img/sample-image-13.png"
import sampleImg14 from "../assets/sample-img/sample-image-14.png"
import sampleImg15 from "../assets/sample-img/sample-image-15.png"
import sampleImg16 from "../assets/sample-img/sample-image-16.png"
import sampleImg17 from "../assets/sample-img/sample-image-17.png"
import sampleImg18 from "../assets/sample-img/sample-image-18.png"
import sampleImg19 from "../assets/sample-img/sample-image-19.png"
import sampleImg20 from "../assets/sample-img/sample-image-20.png"
import sampleImg21 from "../assets/sample-img/sample-image-21.png"
import ProfileUI from "../components/common/ProfileUI";
import ButtonLineIcon from "../components/common/ButtonLineIcon";

export default function Main() {
  return (
    <Layout>
      <LayoutWrap>
        <MainLeft>
          <article>
            <img src={commonBanner} alt="팔로워 인기 TOP 3위 작가님들 지금 바로 상품구경" />
          </article>
          <section>
            <h2 className="a11y-hidden">팔로워 인기 TOP 3 작가 작품</h2>
            <ul>
              <li><img src={sampleImg1} alt="" /></li>
              <li><img src={sampleImg2} alt="" /></li>
              <li><img src={sampleImg3} alt="" /></li>
              <li><img src={sampleImg4} alt="" /></li>
            </ul>
          </section>
        </MainLeft>

        <Line />

        <MainRight>
          <Title>Follower Products</Title>
          <CardProduct />
          <ProductBtn>나도 굿즈 판매하기<img src={arrowPrimaryIcon} alt="" /></ProductBtn>
        </MainRight>

        <MainBottom>
          <Title>Popular Author</Title>
          <section>
            <ProfileUI
              user_profile={sampleImg7}
              user_name="이름 1"
              user_email="dlskjdf@gmail.com"
              mainprofile={true}
            >
              <ButtonLineIcon />
            </ProfileUI>
            <ul>
              <li>
                <Link to="/"><img src={sampleImg5} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg6} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg7} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg8} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg9} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg10} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg11} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg12} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg8} alt="" /></Link>
              </li>
            </ul>
          </section>

          <section>
            <ProfileUI
              user_profile={sampleImg16}
              user_name="이름 2"
              user_email="dlskjdf@gmail.com"
              mainprofile="true"
            >
              <ButtonLineIcon />
            </ProfileUI>
            <ul>
              <li>
                <Link to="/"><img src={sampleImg13} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg14} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg15} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg16} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg17} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg18} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg19} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg20} alt="" /></Link>
              </li>
              <li>
                <Link to="/"><img src={sampleImg21} alt="" /></Link>
              </li>
            </ul>
          </section>
        </MainBottom>
      </LayoutWrap>
    </Layout>
  );
}

const LayoutWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 121px 1fr;
  grid-template-rows: 1fr auto;
`

const MainLeft = styled.section`
  article {
    margin-bottom: 16px;
  }

  img {
    width: 100%;
  }
`

const Line = styled.span`
  width: 1px;
  height: 100%;
  display: inline-block;
  background-color: #E2E2E2;
  margin: 0 60px;
`

const MainRight = styled.section`
  margin-right: 60px;
`

const MainBottom = styled.section`
  padding: 110px 80px 150px;
  grid-row: 2 / 3;
	grid-column: 1 / 4;

  section {
    margin: 50px 0;

    &:last-child {
      margin-bottom: 0;
    }

    & button {
      height: 56px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;

    & img {
      width: 100%;
      height: 100%; 
    }
  }

  li:first-child {
    grid-row: 1 / span 2;
    grid-column: 1 / 2;
  }
  /* 이미지 hover 효과 추가 필요 */
`

const Title = styled.h2`
    font-family: var(--font--en);
    font-weight: 900;
    font-size: 48px;
`

const ProductBtn = styled.button`
  position: relative;
  width: 217px;
  display: block;
  padding: 17px 24px;
  box-sizing: border-box;
  margin: 0 auto;

  background-color: #000;
  color: white;
  border-radius: 28px;

  font-family: var(--font--semibold);
  font-size: 18px;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 12px;
    right: 21px
  }
`