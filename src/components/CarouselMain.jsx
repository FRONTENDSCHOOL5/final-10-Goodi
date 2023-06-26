import React, { useState, useEffect } from "react";

import styled from "styled-components";
import CarouselImg1 from "../assets/sample-img/sample-image-1.png";
import CarouselImg3 from "../assets/sample-img/sample-image-3.png";
import CarouselImg5 from "../assets/sample-img/sample-image-15.png";
import CarouselImg6 from "../assets/sample-img/sample-image-18.png";


const Outer = styled.div`
  overflow: hidden;
  aspect-ratio: 375/390;
`
const CarouselContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  pointer-events: none;
`;

const SlideImgs = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  width: 100%;
  height: inherit;
  background-color: black;
  transform: translateY(-${(props) => props.index * 100}%);
  /* transition: 1000ms all; */
  img {
    aspect-ratio: 375/390;
    object-fit: cover;
    
  }
`;

const SlideDescription = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 20px;
  bottom: 25px;
  span {
    color: white;
  }

  span:nth-child(1) {
    font-size: ${(props) => props.theme.fontSize.sm};
    margin-bottom: 20px;
    span {
      padding: 4px 8px;
      border: 1px solid white;
      border-radius: 10px;
    }
  }

  span:nth-child(2) {
    margin-bottom: 5px;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.lg};
  }
  span:nth-child(3) {
    margin-bottom: 15px;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.lg};
  }

  span:nth-child(4) {
    font-size: ${(props) => props.theme.fontSize.base};
    color: #aaaaaa;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  justify-content: space-between;
  padding: 0px 18px;
  color: rgba(255, 255, 255, 0.4);

  button {
    width: 32px;
    height: 32px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: 0.3s all;
  }
  button:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

const SlideNum = styled.div`
  width: 55px;
  right: 14px;
  bottom: 18px;
  padding: 8px 12px;
  position: absolute;
  border-radius: 15px;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
`;

export default function CarouselMain() {
  const compareFn = (a, b) => {
    return a.endline - b.endline;
  };
  const intergratedData = [
    CarouselImg1,
    CarouselImg3,
    // CarouselImg5,
    CarouselImg6,
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fixedIndex, setFixedIndex] = useState(-1);

  const carouselHandler = (direction) => {
      if (activeIndex <= 2) {
        setActiveIndex((prev) => (prev += 1));
      } else {
        setActiveIndex(0);
      }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselHandler();
    }, 3700);
  }, []);

  console.log()
  return (
    <section className="container">
      <div className="wrapper">
        <Outer>
        <CarouselContainer>
          {intergratedData.map((el, index) => (
            <SlideImgs key={index * 10} index={activeIndex % 3}>
              <img src={el} alt={`${index}번 슬라이드`} />
            </SlideImgs>
          ))}
        </CarouselContainer>
        </Outer>
        <Outer>
        <CarouselContainer>
          {intergratedData.map((el, index) => (
            <SlideImgs key={index * 10} index={(activeIndex + 1) % 3}>
              <img src={el} alt={`${index}번 슬라이드`} />
            </SlideImgs>
          ))}
        </CarouselContainer>
        </Outer>
        <Outer>
        <CarouselContainer>
          {intergratedData.map((el, index) => (
            <SlideImgs key={index * 10} index={(activeIndex + 2) % 3}>
              <img src={el} alt={`${index}번 슬라이드`} />
            </SlideImgs>
          ))}
        </CarouselContainer>
        </Outer>
        {/* <Outer>
        <CarouselContainer>
          {intergratedData.map((el, index) => (
            <SlideImgs key={index * 10} index={(activeIndex + 3) % 4}>
              <img src={el} alt={`${index}번 슬라이드`} />
            </SlideImgs>
          ))}
        </CarouselContainer>
        </Outer> */}
      </div>
    </section>
  );
}