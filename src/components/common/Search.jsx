import React from "react";
import styled from "styled-components";

// 컴포넌트
import SearchInput from "./SearchInput";
import SearchHistory from "./SearchHistory";
import SearchResult from "./SearchResult";

export default function Search() {
  return (
    <SearchbgDark>
      <SearchModal>
        <h2>작가 검색</h2>
        <SearchInput />
        <SearchHistory />
        <SearchResult />
      </SearchModal>
    </SearchbgDark>
  );
}

const SearchbgDark = styled.div`
  width: calc(100vw - 80px);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  animation: dark ease 0.3s forwards;

  @keyframes dark {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const SearchModal = styled.article`
  width: 40%;
  height: 100vh;
  background-color: white;
  padding: 80px 60px;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  transform: translateX(1000px);
  animation: rotate ease 0.6s forwards;

  @keyframes rotate {
    from {
      transform: translateX(1000px);
    }
    to {
      transform: translateX(0);
    }
  }

  h2 {
    font-family: var(--font--Bold);
    font-size: 28px;
  }
`;
