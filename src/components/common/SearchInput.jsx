import React, { useState } from "react";
import styled from "styled-components";

// 이미지
import SearchBtn from "../../assets/icon_search_black.svg";

export default function SearchInput({ keyword, setKeyword, handleClick }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <SearchInputWrap className={isActive ? "active" : ""}>
      <input
        type="text"
        value={keyword}
        placeholder="찾으시는 작가를 입력해주세요"
        onChange={(e) => setKeyword(e.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
      <button type="submit" onClick={handleClick}></button>
    </SearchInputWrap>
  );
}

const SearchInputWrap = styled.form`
  position: relative;
  width: 100%;
  margin: 32px 0 48px 0;
  padding-left: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--black-color);
  transition: all 0.3s;

  input {
    width: 100%;
  }

  input::placeholder {
    color: var(--gray300-color);
  }

  button {
    width: 56px;
    height: 56px;
    text-align: center;
    margin-left: 24px;
    cursor: pointer;
  }

  button::before {
    content: "";
    display: inline-block;
    width: 28px;
    height: 28px;
    background: url(${SearchBtn}) no-repeat center/cover;
  }

  &.active {
    border-bottom: 2px solid var(--main-color);
  }
`;
