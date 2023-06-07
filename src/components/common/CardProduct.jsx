import React from 'react'
import Card from './Card';
import styled from 'styled-components';

import productThumbnail from "../../assets/sample-img/product-thumbnail.png";

const cardInfoList = [
  {
    "id": 1,
    "profile": "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201103134054_kr.jpg?type=thumb&opt=R329x247@2xa",
    "name": "이름 1",
    "email": "dksljdf@gmail.com",
    "img": `${productThumbnail}`,
    "title": "상품 1",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,",
    "price": "29900"
  },
  {
    "id": 2,
    "profile": "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201106164745_kr.jpg?type=thumb&opt=R329x247@2xa",
    "name": "이름 2",
    "email": "dksljdf@gmail.com",
    "img": `${productThumbnail}`,
    "title": "상품 2",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,",
    "price": "29900"
  },
  {
    "id": 3,
    "profile": "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201111183631_kr.jpg?type=thumb&opt=R335x187@2xa",
    "name": "이름 3",
    "email": "dksljdf@gmail.com",
    "img": `${productThumbnail}`,
    "title": "상품 3",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,",
    "price": "29900"
  },
  {
    "id": 4,
    "profile": "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201103134054_kr.jpg?type=thumb&opt=R329x247@2xa",
    "name": "이름 4",
    "email": "dksljdf@gmail.com",
    "img": `${productThumbnail}`,
    "title": "상품 4",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,",
    "price": "29900"
  },
  {
    "id": 5,
    "profile": "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201106164745_kr.jpg?type=thumb&opt=R329x247@2xa",
    "name": "이름 5",
    "email": "dksljdf@gmail.com",
    "img": `${productThumbnail}`,
    "title": "상품 5",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,",
    "price": "29900"
  },
  {
    "id": 6,
    "profile": "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201111183631_kr.jpg?type=thumb&opt=R335x187@2xa",
    "name": "이름 6",
    "email": "dksljdf@gmail.com",
    "img": `${productThumbnail}`,
    "title": "상품 6",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,",
    "price": "29900"
  }
]

// 더미 데이터 -> API 요청으로 변경해야함

export default function CardProduct() {
  return (
    <CardList>
      {cardInfoList.map((cardInfo) => {
        return (
          <Card
            key={cardInfo.id}
            id={cardInfo.id}
            profile={cardInfo.profile}
            name={cardInfo.name}
            email={cardInfo.email}
            img={cardInfo.img}
            title={cardInfo.title}
            description={cardInfo.description}
            price={cardInfo.price}
          />
        );
      })}
    </CardList>
  )
}

const CardList = styled.div`
  margin: 80px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 60px;
`