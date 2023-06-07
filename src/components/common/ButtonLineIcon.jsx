import React from "react";
import styled from "styled-components";
import PlusIcon from "../../assets/icon_plus_primary.svg";

export default function ButtonLineIcon() {
  return <ButtonLineIconUI>작가 팔로우</ButtonLineIconUI>;
}

const ButtonLineIconUI = styled.button`
  padding: 12px 24px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid var(--gray200-color);
  font-size: 16px;
  font-family: var(--font--semibold);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  box-sizing: border-box;
  white-space: nowrap;

  &::after {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background: url(${PlusIcon}) no-repeat center/cover;
  }
`;
