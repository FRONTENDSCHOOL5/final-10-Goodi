import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import sampleImg7 from "../assets/sample-img/sample-image-7.png"


import ProfileUI from './common/ProfileUI'
import ButtonLineIcon from './common/ButtonLineIcon'
import PopularAuthorData from '../mock/PopularAuthorData'

export default function PopularAuthorView() {
  const data = PopularAuthorData[1];
  console.log(data);

  return (
    <Section>
      <ProfileUI
        user_profile={sampleImg7}
        user_name="이름 1"
        user_email="dlskjdf@gmail.com"
        mainprofile
      >
        <ButtonLineIcon button_content="작가 팔로우" />
      </ProfileUI>

      <UL>
        {data.map((item) => {
          console.log(item.dummyImg);
          return (
            <li key={item.id}>
              <img src={item.dummyImg} alt="" />
              <ProductHover>
                <strong>{item.productName}</strong>
                <p>{item.productPrice}</p>
                <Link to="/">상품 상세보기</Link>
              </ProductHover>
            </li>
          )
        })}
      </UL>
    </Section>
  )
}

const Section = styled.section`
  margin: 50px 0;

  &:last-child {
    margin-bottom: 0;
  }
`

const UL = styled.ul`
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


  li:first-child {
    grid-row: 1 / span 2;
    grid-column: 1 / 2;
  }

  @keyframes setMotion{
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const ProductHover = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;

  strong, p {
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
`

