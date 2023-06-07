import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";

import commonBanner from "../assets/common-banner.svg";
import arrowPrimaryIcon from "../assets/icon_arrow_primary.svg";
import plusPrimaryIcon from "../assets/icon_plus_primary.svg";

import popularAuthor from "../assets/popular-author.svg";
import followerProducts from "../assets/follower-products.svg";

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


import CardProduct from "../components/common/CardProduct";
import { Link } from "react-router-dom";


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
          <h2><img src={followerProducts} alt="follower products" /></h2>
          <CardProduct />
          <ProductBtn>나도 굿즈 판매하기<img src={arrowPrimaryIcon} alt="" /></ProductBtn>
        </MainRight>


        <MainBottom>
          <h2><img src={popularAuthor} alt="popular author" /></h2>
          <section>
            <PopularProfile>
              <img src={sampleImg7} alt="" />
              <h3>이름 1</h3>
              <p>dlskjdf@gmail.com</p>
              <ProfileFollow>작가 팔로우 <img src={plusPrimaryIcon} alt="" /></ProfileFollow>
            </PopularProfile>
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
            <PopularProfile>
              <img src={sampleImg16} alt="" />
              <h3>이름 2</h3>
              <p>dlskjdf@gmail.com</p>
              <ProfileFollow>작가 팔로우 <img src={plusPrimaryIcon} alt="" /></ProfileFollow>
            </PopularProfile>
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr auto;
`


const MainLeft = styled.section`
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

const MainRight = styled.section`
  margin-right: 60px;

  h2 {
    width: 460px;
  }

  h2 > img {
    width: 100%;
    height: 100%;
  }
`

const MainBottom = styled.section`
  padding: 110px 80px 150px;
  grid-row: 2 / 3;
	grid-column: 1 / 4;

  h2 {
    width: 460px;
  }
  
  h2 > img {
    width: 100%;
    height: 100%;
  }

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
    gap: 20px
  }

  li {
    width: 100%;
  height: 100%;
  }

  li:first-child {
    grid-row: 1 / span 2;
    grid-column: 1 / 2;
  }

  img {
    width: 100%;
    height: 100%;
    
  }
`

const ProductBtn = styled.button`
  margin: 0 auto;
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

const PopularProfile = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 16px;

  img {
    float: left;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 16px;
  }

  h3 {
    float: left;
    width: 75%;
    font-size: 24px;
    font-weight: 600;
    margin-top: 10px;
  }

  p {
    float: left;
    width: 75%;
    font-size: 20px;
    margin-top: 12px;
    color: #9C9C9C;
  }
`

const ProfileFollow = styled.button`
margin: 15px 0 15px 56px;
width: 167px;
height: 56px;
  border: 1px solid #E2E2E2;
  padding: 12px 24px;
  box-sizing: border-box;
  font-family: 'Pretendard-Regular';
  font-size: 18px;
  border-radius: 28px;
  cursor: pointer;
  position: relative;
  font-weight: 600;

  img {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 11px;
    right: 0;
  }
`