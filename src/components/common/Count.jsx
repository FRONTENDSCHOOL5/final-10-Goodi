import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import PlusIcon from "../../assets/icon_plus_black.svg";
import MinusIcon from "../../assets/icon_minus_black.svg";

export default function Count() {
  const [count, setCount] = useState(1);

  const handlerPlus = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handlerMinus = () => {
    setCount((prevCount) => (prevCount === 1 ? 1 : prevCount - 1));
  };

  return (
    <Countwrap>
      <PluseButton onClick={handlerPlus}>
        <img src={PlusIcon} alt="더하기 아이콘" />
      </PluseButton>
      <p className="count_text">{count}</p>
      <MinusButton onClick={handlerMinus}>
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
