import React from 'react'
import styled from 'styled-components';
import LikeBtn from './LikeBtn';
import ProfileUI from './ProfileUI';

export default function Card({ profile, name, email, img, title, description, price }) {
  return (
    <article>
      <ProfileUI
        user_profile={profile}
        user_name={name}
        user_email={email}
        card
      />
      <CardContent>
        <LikeBtn />
        <img alt="card" src={img} />
        <h2>{title}</h2>
        <p>{description}</p>
        <strong>{price}</strong><span>원</span>
      </CardContent>
    </article>
  );
};

const CardContent = styled.div`
  /* font-size: 16px; */
  position: relative;

  img {
    width: 100%;
  }

  button {
    position: absolute;
    right: 16px;
    bottom: 172px;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    padding: 16px 0;
    border-bottom: 1px solid var(--gray200-color);
  }

  p {
    padding: 16px 0;
    line-height: 1.5;
    color: var(--gray500-color);;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    /* 말줄임은 되는데 3번째 줄이 보이는 이슈 존재 */
  }

  strong {
    font-size: 24px;
    font-weight: 900;
    margin-right: 8px;
  }
`