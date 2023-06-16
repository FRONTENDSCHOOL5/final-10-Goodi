import React from 'react'
import Card from './Card';
import styled from 'styled-components';

import ProductData from './../../mock/productData';

export default function CardProduct({ profile }) {
  const cardInfoList = ProductData;

  return (
    <CardList profile={profile}>
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
      }).slice(0, 6)}
    </CardList>
  )
}

const CardList = styled.div`
  margin: ${({ profile }) => profile ? "30px 0 70px" : "80px 0"};;
  display: grid;
  grid-template-columns: ${({ profile }) => profile ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  grid-template-rows: auto;
  gap: 3.75rem;
`