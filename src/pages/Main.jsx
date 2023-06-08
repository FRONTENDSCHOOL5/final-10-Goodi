import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import CardProduct from "../components/common/CardProduct";
import { Link } from "react-router-dom";

import commonBanner from "../assets/common-banner.svg";
import arrowPrimaryIcon from "../assets/icon_arrow_primary.svg";
import pointEdge from "../assets/point-edge.svg";

import sampleImg1 from "../assets/sample-img/sample-image-1.png";
import sampleImg2 from "../assets/sample-img/sample-image-2.png";
import sampleImg3 from "../assets/sample-img/sample-image-3.png";
import sampleImg4 from "../assets/sample-img/sample-image-4.jpg";

import sampleImg5 from "../assets/sample-img/sample-image-5.png";
import sampleImg6 from "../assets/sample-img/sample-image-6.png";
import sampleImg7 from "../assets/sample-img/sample-image-7.png";
import sampleImg8 from "../assets/sample-img/sample-image-8.png";
import sampleImg9 from "../assets/sample-img/sample-image-9.png";
import sampleImg10 from "../assets/sample-img/sample-image-10.png";
import sampleImg11 from "../assets/sample-img/sample-image-11.png";
import sampleImg12 from "../assets/sample-img/sample-image-12.png";

import sampleImg13 from "../assets/sample-img/sample-image-13.png";
import sampleImg14 from "../assets/sample-img/sample-image-14.png";
import sampleImg15 from "../assets/sample-img/sample-image-15.png";
import sampleImg16 from "../assets/sample-img/sample-image-16.png";
import sampleImg17 from "../assets/sample-img/sample-image-17.png";
import sampleImg18 from "../assets/sample-img/sample-image-18.png";
import sampleImg19 from "../assets/sample-img/sample-image-19.png";
import sampleImg20 from "../assets/sample-img/sample-image-20.png";
import sampleImg21 from "../assets/sample-img/sample-image-21.png";
import ProfileUI from "../components/common/ProfileUI";
import ButtonLineIcon from "../components/common/ButtonLineIcon";

export default function Main() {
  return (
    <Layout>
      <LayoutWrap>
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
              <li>
                <img src={sampleImg1} alt="" />
              </li>
              <li>
                <img src={sampleImg2} alt="" />
              </li>
              <li>
                <img src={sampleImg3} alt="" />
              </li>
              <li>
                <img src={sampleImg4} alt="" />
              </li>
            </ul>
          </section>
        </MainLeft>

        <Line />

        <MainRight>
          <Title>Follower Products</Title>
          <CardProduct />
          <ProductLink to="/">나도 굿즈 판매하기</ProductLink>
        </MainRight>

        <MainBottom>
          <Title>Popular Author</Title>
          <section>
            <ProfileUI
              user_profile={sampleImg7}
              user_name="이름 1"
              user_email="dlskjdf@gmail.com"
              mainprofile
            >
              <ButtonLineIcon button_content="작가 팔로우" />
            </ProfileUI>
            <ul>
              <li>
                <img src={sampleImg5} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg6} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg7} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg8} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg9} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg10} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg11} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg12} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg7} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
            </ul>
            {/* ul 컴포넌트 분리 필요 */}
          </section>

          <section>
            <ProfileUI
              user_profile={sampleImg16}
              user_name="이름 2"
              user_email="dlskjdf@gmail.com"
              mainprofile
            >
              <ButtonLineIcon button_content="작가 팔로우" />
            </ProfileUI>
            <ul>
              <li>
                <img src={sampleImg13} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg14} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg15} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg16} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg17} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg18} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg19} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg20} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
              <li>
                <img src={sampleImg21} alt="" />
                <ProductHover>
                  <strong>상품명</strong>
                  <p>29000원</p>
                  <Link to="/">상품 상세보기</Link>
                </ProductHover>
              </li>
            </ul>
            {/* ul 컴포넌트 분리 필요 */}
          </section>
        </MainBottom>
      </LayoutWrap>
    </Layout>
  );
}

const LayoutWrap = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.1fr 1fr;
  grid-template-rows: auto auto;
`;

const MainLeft = styled.section`
  article {
    margin-bottom: 16px;
  }

  img {
    width: 100%;
  }
`;

const Line = styled.span`
  width: 1px;
  height: 100%;
  display: inline-block;
  background-color: var(--gray200-color);
  margin: 0 60px;
`;

const MainRight = styled.section`
  margin-right: 60px;
`;

const MainBottom = styled.section`
  padding: 110px 80px 150px;
  grid-row: 2 / 3;
  grid-column: 1 / 4;

  section {
    margin: 50px 0;

    &:last-child {
      margin-bottom: 0;
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

    li {
      width: 100%;
      height: 100%;
      position: relative;

      &:hover div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        flex-direction: column;
        animation: setMotion 0.2s;
      }
    }
  }

  li:first-child {
    grid-row: 1 / span 2;
    grid-column: 1 / 2;
  }

  @keyframes setMotion {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ProductHover = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;

  strong,
  p {
    font-size: 20px;
    font-family: var(--font--semibold);
  }

  a {
    width: 70%;
    color: white;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
      color: var(--main-color);
    }
  }
`;

const Title = styled.h2`
  font-family: var(--font--en);
  font-weight: 900;
  font-size: 48px;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: -26px;
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
  /* ButtonLineIconUI 랑 중복 줄일 수 있을 것 같은데 */
`;
