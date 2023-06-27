import React, { useState, useEffect } from "react";

import styled from "styled-components";
import CarouselImg4 from "../assets/sample-img/sample-image-4.jpg";
import CarouselImg22 from "../assets/sample-img/sample-image-22.png";
import CarouselImg25 from "../assets/sample-img/sample-image-25.jpg";
import CarouselImg26 from "../assets/sample-img/sample-image-26.png";


export default function CarouselMain() {
  const intergratedData = [
    CarouselImg26,
    CarouselImg25,
    CarouselImg22,
    CarouselImg4
  ];

  const [activeIndex, setActiveIndex] = useState(0);

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
    }, 7000);
  }, []);

  return (
    <section className="container">
      <div className="wrapper">
        <Outer>
          <CarouselContainer>
            {intergratedData.map((el, index) => (
              <SlideImgs key={index * 10} index={activeIndex % 4}>
                <img src={el} alt={`${index}번 슬라이드`} />
              </SlideImgs>
            ))}
          </CarouselContainer>
        </Outer>
        <Outer>
          <CarouselContainer>
            {intergratedData.map((el, index) => (
              <SlideImgs key={index * 10} index={(activeIndex + 1) % 4}>
                <img src={el} alt={`${index}번 슬라이드`} />
              </SlideImgs>
            ))}
          </CarouselContainer>
        </Outer>
        <Outer>
          <CarouselContainer>
            {intergratedData.map((el, index) => (
              <SlideImgs key={index * 10} index={(activeIndex + 2) % 4}>
                <img src={el} alt={`${index}번 슬라이드`} />
              </SlideImgs>
            ))}
          </CarouselContainer>
        </Outer>
        <Outer>
          <CarouselContainer>
            {intergratedData.map((el, index) => (
              <SlideImgs key={index * 10} index={(activeIndex + 3) % 4}>
                <img src={el} alt={`${index}번 슬라이드`} />
              </SlideImgs>
            ))}
          </CarouselContainer>
        </Outer>
      </div>
    </section>
  );
}

const Outer = styled.div`
  overflow: hidden;
  aspect-ratio: 375/350;
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

  img {
    aspect-ratio: 375/350;
    object-fit: cover;
  }
`;