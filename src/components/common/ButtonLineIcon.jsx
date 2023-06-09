import React from "react";
import styled from "styled-components";
import PlusIcon from "../../assets/icon_plus_primary.svg";

export default function ButtonLineIcon(props) {
  const { button_content } = props;
  return <ButtonLineIconUI>{button_content}</ButtonLineIconUI>;
}

const ButtonLineIconUI = styled.button`
  height: 56px;
  padding: 16px 24px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid var(--gray200-color);
  font-size: 15px;
  font-family: var(--font--semibold);
  cursor: pointer;

  display: flex;
  margin-left: auto;
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

  &:hover {
    color: white;
    background-color: var(--black-color);
    border: none;
    transition: all 0.5s;
  }
`;
