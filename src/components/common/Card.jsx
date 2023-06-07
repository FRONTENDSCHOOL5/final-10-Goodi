import React from 'react'
import styled from 'styled-components';
import '../../assets/font.css'
import LikeBtn from './LikeBtn';

export default function Card({ profile, name, email, img, title, description, price }) {
  return (
    <CardUI>
      <CardHeader>
        <img src={profile} alt="" />
        <h3>{name}</h3>
        <p>{email}</p>
      </CardHeader>
      <CardContent>
        <LikeBtn />
        <img alt="card" src={img} />
        <h2>{title}</h2>
        <p>{description}</p>
        <strong>{price}</strong><span>원</span>
      </CardContent>
    </CardUI>
  );
};

const CardUI = styled.article`
  width: 309px;
`

const CardHeader = styled.div`
  width: 100%;
  height: 56px;
  margin-bottom: 16px;

  img {
    width: 56px;
    height: 56px;
    float: left;
    border-radius: 50%;
    margin-right: 16px;
  }

  h3 {
    width: 70%;
    float: left;
    font-size: 18px;
    font-weight: 600;
    margin-top: 8px;
  }

  p {
    float: left;
    font-size: 14px;
    margin-top: 10px;
  }
`

const CardContent = styled.div`
  font-size: 16px;
  position: relative;

  img {
    width: 100%;
    height: 309px;
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
    border-bottom: 1px solid #e2e2e2;
  }

  p {
    padding: 16px 0;
    line-height: 1.5;
    color: #626262;

    /* overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; */
    /* 말줄임은 되는데 3번째 줄이 보이는 이슈 존재 */
  }

  strong {
    font-size: 24px;
    font-family: "Montserrat";
    margin-right: 8px;
  }
`