import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CardProduct from "../components/common/CardProduct";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import CarouselImg1 from "../assets/sample-img/sample-image-1.png";
import CarouselImg2 from "../assets/sample-img/sample-image-8.png";
import CarouselImg3 from "../assets/sample-img/sample-image-3.png";
import CarouselImg5 from "../assets/sample-img/sample-image-15.png";
import CarouselImg6 from "../assets/sample-img/sample-image-18.png";

import commonBanner from "../assets/common-banner.svg";
import arrowPrimaryIcon from "../assets/icon_arrow_primary.svg";
import pointEdge from "../assets/point-edge.svg";
import followerProducts from "../assets/follower-products.svg";
import popularAuthor from "../assets/popular-author.svg";

import PopularAuthorView from "../components/PopularAuthorView";
import ProductData from "../mock/productData";
import Layout from "../layout/Layout";
import MainSkeleton from "../style/skeletonUI/skeletonPage/MainSkeleton";
import CarouselMain from "../components/CarouselMain"

export default function Main() {
  const data = ProductData[12];
  const data1 = ProductData[10];
  const data2 = ProductData[11];
  const [loading, setLoading] = useState(false);
  const imageUrls = [CarouselImg1, CarouselImg2, CarouselImg3, CarouselImg5];
  const sliderRef = useRef(null);
  // const settings = {
  //   infinite: true,
  //   slidesToShow: 3.5,
  //   slidesToScroll: 2,
  //   dots: false,
  //   arrow: false,
  //   infinite: true,
  //   // speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   cssEase: "liner",
  //   variableWidth: false,
  //   vertical: true,
  //   useTransform: true,
  //   verticalSwiping: true,
  // };
  // useEffect(() => {
  //   // 이미지 로딩이 완료된 후에 슬라이더를 초기화하는 함수
  //   const initializeSlider = () => {
  //     const slider = sliderRef.current;
  //     if (slider) {
  //       slider.slickGoTo(0); // 슬라이더를 처음(0번째) 슬라이드로 이동
  //     }
  //   };

  //   // 이미지 로딩 완료 이벤트 리스너
  //   const handleImageLoad = () => {
  //     initializeSlider(); // 슬라이더 초기화
  //   };

  //   // 이미지 로딩 완료 이벤트 리스너 등록
  //   const images = document.querySelectorAll(".carousel-img");
  //   images.forEach((image) => {
  //     image.addEventListener("load", handleImageLoad);
  //   });

  //   // 컴포넌트 언마운트 시 이벤트 리스너 제거
  //   return () => {
  //     images.forEach((image) => {
  //       image.removeEventListener("load", handleImageLoad);
  //     });
  //   };
  // }, []);

  return (
    <Layout>
      {loading ? (
        <MainSkeleton />
      ) : (
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
              <CarouselArea>
                {/* <Moving>
                  <div>
                    <img src={CarouselImg1} alt="Image 1" />
                  </div>
                  <div>
                    <img src={CarouselImg2} alt="Image 2" />
                  </div>
                  <div>
                    <img src={CarouselImg3} alt="Image 3" />
                  </div>
                  <div>
                    <img src={CarouselImg5} alt="Image 4" />
                  </div>
                </Moving>
                <Slider {...settings}>
                <div>
                    <img src={CarouselImg6} alt="Image 6" />
                  </div> 
                  <div>
                    <img src={CarouselImg1} alt="Image 1" />
                  </div>
                  <div>
                    <img src={CarouselImg2} alt="Image 2" />
                  </div>
                  <div>
                    <img src={CarouselImg3} alt="Image 3" />
                  </div>
                  <div>
                    <img src={CarouselImg5} alt="Image 4" />
                  </div>
                </Slider>  */}
                <CarouselMain />
              </CarouselArea>
            </section>
          </MainLeft>

          <Line />

          <MainRight>
            <Title>
              <img src={followerProducts} alt="Follower Products" />
            </Title>
            <CardProduct />
            <ProductLink to="/postproduct">나도 굿즈 판매하기</ProductLink>
          </MainRight>

          <MainBottom>
            <Title>
              <img src={popularAuthor} alt="Popular Author" />
            </Title>
            <PopularAuthorView data={data1} />
            <PopularAuthorView data={data2} />
          </MainBottom>
        </MainWrap>
      )}
    </Layout>
  );
}

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.1fr 1fr;
  grid-template-rows: auto;
`;

const MainLeft = styled.section`
  article {
    margin-bottom: 16px;
  }

  img {
    width: 100%;
  }
`;

const CarouselArea = styled.div`
  /* width: 100%;
  height: 100%; */
  overflow: hidden;

  /* .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-slide {
    float: left;
    height: 100%;
    min-height: 1px;
    display: none;
  } */
`;

const Moving = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const CarouselItem = styled.div`
  /* height: 100%; // 각 슬라이드가 차지할 높이를 100%로 설정 */
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

const Line = styled.span`
  width: 1px;
  height: 100%;
  display: inline-block;
  background-color: var(--gray200-color);
  margin: 0 60px;
`;
