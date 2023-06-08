import React from "react";
import styled from "styled-components";
import PlusIcon from "../../assets/icon_plus_primary.svg";

export default function ButtonLineIcon(props) {
  const { button_content } = props;

  return <ButtonLineIconUI>{button_content}</ButtonLineIconUI>;
}

const ButtonLineIconUI = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;

  height: 48px;
  padding: 0 16px;
  margin-left: auto;
  box-sizing: border-box;
  white-space: nowrap;

  background-color: white;
  border: 1px solid var(--gray200-color);
  border-radius: 30px;
  color: var(--black-color);

  font-size: 14px;
  font-family: var(--font--semibold);

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
