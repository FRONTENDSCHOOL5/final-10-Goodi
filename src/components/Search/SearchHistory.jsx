import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";

// 이미지
import CloseIcon from "../../assets/icon_close.svg";

// recoil
import { recentSearch } from "../../recoil/recentSearch";

export default function SearchHistory() {
  const [showClose, setShowClose] = useState(true);
  const [isRecentSearch, setIsRecentSearch] = useRecoilState(recentSearch);

  const handleDelete = (e) => {
    const searchText = e.target.parentElement.innerText;
    console.log(searchText);
    setIsRecentSearch((prevState) => {
      return prevState.filter((e) => e !== searchText);
    });
  };

  const handleAllDelete = () => {
    setIsRecentSearch([]);
  };

  return (
    <HistoryWarp>
      <HistoryTitle>
        <h3>최근 검색어</h3>
        {isRecentSearch.length > 0 ? (
          <button type="button" onClick={handleAllDelete}>
            모두 닫기
          </button>
        ) : null}
      </HistoryTitle>
      <TagWrap>
        {isRecentSearch.length > 0 ? (
          isRecentSearch.map((el, i) => (
            <Tag key={i}>
              {el}
              <button type="button" onClick={handleDelete}></button>
            </Tag>
          ))
        ) : (
          <HistoryNull>최근 검색내역이 없습니다.</HistoryNull>
        )}
      </TagWrap>
    </HistoryWarp>
  );
}

const HistoryWarp = styled.section``;
const HistoryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-family: var(--font--Bold);
    padding: 6px 0;
    font-size: 18px;
  }

  button {
    color: var(--gray400-color);
    cursor: pointer;
    font-size: 14px;
    padding: 2px 6px;
  }
`;

const TagWrap = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
`;
const Tag = styled.div`
  padding: 10px 12px;
  background-color: #eeffed;
  border-radius: 50px;
  font-family: var(--font--Medium);

  button {
    width: 16px;
    height: 16px;
    text-align: center;
    cursor: pointer;
    margin-left: 8px;
  }

  button::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url(${CloseIcon}) no-repeat center/cover;
  }
`;

const HistoryNull = styled.div`
  color: var(--gray300-color);
  font-size: 18px;
`;
