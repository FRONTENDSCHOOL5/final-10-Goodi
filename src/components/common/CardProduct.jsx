import React from 'react'
import Card from './Card';

const cardInfoList = [
  {
    "id": 1,
    "profile": "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201103134054_kr.jpg?type=thumb&opt=R329x247@2xa",
    "name": "이름 1",
    "email": "dksljdf@gmail.com",
    "img": "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201103134054_kr.jpg?type=thumb&opt=R329x247@2xa",
    "title": "상품 1",
    "description": "Lorem ipsum dolor sit amet.",
    "price": "29900"
  },
  {
    "id": 2,
    "profile": "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201106164745_kr.jpg?type=thumb&opt=R329x247@2xa",
    "name": "이름 2",
    "email": "dksljdf@gmail.com",
    "img": "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201106164745_kr.jpg?type=thumb&opt=R329x247@2xa",
    "title": "상품 2",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, qui?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, qui?",
    "price": "29900"
  },
  {
    "id": 3,
    "profile": "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201111183631_kr.jpg?type=thumb&opt=R335x187@2xa",
    "name": "이름 3",
    "email": "dksljdf@gmail.com",
    "img": "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201111183631_kr.jpg?type=thumb&opt=R335x187@2xa",
    "title": "상품 3",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "price": "29900"
  }
]

export default function CardProduct() {
  return (
    <>
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
    </>
  )
}