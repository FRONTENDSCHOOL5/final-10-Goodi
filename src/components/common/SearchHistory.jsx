import React, { useState } from "react";
import styled from "styled-components";

// 이미지
import CloseIcon from "../../assets/icon_close.svg";

export default function SearchHistory() {
  const [showClose, setShowClose] = useState(true);

  // 더미데이터
  const TagMock = [];

  const handleTagText = (e) => {
    const searchText = e.target.innerText;
    console.log(searchText);
  };

  return (
    <HistoryWarp>
      <HistoryTitle>
        <h3>최근 검색어</h3>
        {showClose && <button type="button">모두 닫기</button>}
      </HistoryTitle>
      <TagWrap>
        {TagMock.length > 0 ? (
          TagMock.map((el, i) => (
            <Tag key={i}>
              {el}
              <button type="button"></button>
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
    font-size: 18px;
  }

  button {
    color: var(--gray400-color);
    padding: 6px 0;
    cursor: pointer;
    font-size: 14px;
  }
`;

const TagWrap = styled.div`
  display: flex;
  margin-top: 16px;
`;
const Tag = styled.div`
  padding: 10px 12px;
  background-color: #eeffed;
  border-radius: 50px;
  font-family: var(--font--Medium);

  & + & {
    margin-left: 12px;
  }

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
