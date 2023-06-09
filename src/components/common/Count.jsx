import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

//data
import ProductData from "../../mock/productData";

//image
import PlusIcon from "../../assets/icon_plus_black.svg";
import MinusIcon from "../../assets/icon_minus_black.svg";

export default function Count({ getPrice, price, productPrice }) {
  // const data = ProductData[0];

  const [count, setCount] = useState(1);
  console.log(productPrice);

  const productNumHandler = (type) => {
    if (type === "add") {
      setCount((prevCount) => prevCount + 1);
      getPrice(parseInt(price) + parseInt(productPrice));
    } else {
      if (count > 1) {
        setCount((prevCount) => prevCount - 1);
        getPrice(parseInt(price) - parseInt(productPrice));
      } else {
        setCount(1);
      }
    }
  };

  return (
    <Countwrap>
      <PluseButton
        onClick={() => {
          productNumHandler("add");
        }}
      >
        <img src={PlusIcon} alt="더하기 아이콘" />
      </PluseButton>
      <p className="count_text">{count}</p>
      <MinusButton
        onClick={() => {
          productNumHandler("minus");
        }}
      >
        <img src={MinusIcon} alt="더하기 아이콘" />
      </MinusButton>
    </Countwrap>
  );
}

const Countwrap = styled.section`
  display: flex;
  align-items: center;

  .count_text {
    font-family: var(--font--Medium);
    font-size: 24px;
    width: 110px;
    text-align: center;
  }

  & button {
    width: 40px;
    height: 40px;
    background-color: var(--gray100-color);
    cursor: pointer;
    text-align: center;
    border-radius: 3px;
  }

  & button img {
    width: 24px;
  }
`;
const PluseButton = styled.button``;
const MinusButton = styled.button``;
