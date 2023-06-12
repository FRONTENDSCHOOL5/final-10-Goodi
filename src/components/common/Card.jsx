import React from "react";
import styled from "styled-components";
import LikeBtn from "./LikeBtn";
import ProfileUI from "./ProfileUI";
import { Link } from "react-router-dom";

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
  console.log(id);
  return (
    <Article>
      <ProfileUI
        user_profile={profile}
        user_name={name}
        user_email={email}
        card="true"
      />
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
  img {
    width: 100%;
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

  button {
    position: absolute;
    right: 16px;
    bottom: 172px;
  }
`;
