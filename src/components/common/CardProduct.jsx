import React from 'react'
import Card from './Card';
import styled from 'styled-components';

import ProductData from './../../mock/productData';

export default function CardProduct() {
  const cardInfoList = ProductData;

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
      }).slice(0, 6)}
    </CardList>
  )
}

const CardList = styled.div`
  margin: 80px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 3.75rem;
`