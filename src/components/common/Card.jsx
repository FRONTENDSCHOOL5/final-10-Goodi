import React from "react";
import styled from "styled-components";
import LikeBtn from "./LikeBtn";
import ProfileUI from "./ProfileUI";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import accountname from "../../recoil/accountname";
import postMenu from "../../assets/post_menu.svg";
import LocalNav from "./LocalNav";
import { useState } from "react";

export default function Card({
  profile,
  name,
  email,
  img,
  title,
  description,
  price,
  id,
}) {
  const myaccount_name = useRecoilValue(accountname);
  const temp = useParams();

  const account_name = temp.account_name ? temp.account_name : myaccount_name;
  const [isLocalNavOpen, setIsLocalNavOpen] = useState(false);

  const handleLocalNav = () => {
    setIsLocalNavOpen((prevIsHidden) => !prevIsHidden);
  };

  return (
    <Article>
      <ArticleTop>
        <ProfileUI
          user_profile={profile}
          user_name={name}
          user_email={email}
          card="true"
          account_name={account_name}
        />
        <button onClick={handleLocalNav}>
          <img src={postMenu} />
        </button>
        <LocalNavWrap>
      {isLocalNavOpen ? (
        <LocalNav
          lists={[
            { name: "상품 수정", nav: "/postproduct" },
            { name: "상품 삭제", nav: "/postproduct" },
          ]}
        />
      ) : (
        false
      )}
      </LocalNavWrap>
      </ArticleTop>
      <CardLink to={`/products/${id}`}>
        <CardContent>
          <img alt="card" src={img} />
          <h2>{title}</h2>
          <p>{description}</p>
          <strong>
            {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </strong>
          <span>원</span>
        </CardContent>
      </CardLink>
      <LikeBtn />
    </Article>
  );
}

const CardLink = styled(Link)`
  color: var(--black-color);
  text-decoration: none;
`;

const CardContent = styled.div`
  transition: all 0.3s;
  
  img {
    width: 100%;
    transition: all 0.3s;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.03);
  }

  h2 {
    font-size: 20px;
    font-family: var(--font--semibold);
    padding: 16px 0;
    border-bottom: 1px solid var(--gray200-color);
  }

  p {
    margin: 16px 0px;
    height: 3em;
    line-height: 1.5;
    color: var(--gray500-color);
    font-family: var(--font--Regular);
    font-size: 16px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  strong {
    font-size: 24px;
    font-family: var(--font--Bold);
    margin-right: 8px;
  }
`;

const Article = styled.article`
  position: relative;

  & > button {
    position: absolute;
    right: 16px;
    bottom: 172px;
  }
`;
const ArticleTop = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  position: relative;
  & > button {
    height: 40px;
    cursor: pointer;
  }
  img {
    width: 40px;
    height: 40px;
  }
  strong {
    font-size: 16px;
  }
`;
const LocalNavWrap = styled.div`
  position: absolute;
  top: 300%;
  left: 107%;
`