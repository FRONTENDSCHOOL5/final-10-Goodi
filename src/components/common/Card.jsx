import React from 'react'
import styled from 'styled-components';

export default function Card({ id, profile, name, email, img, title, description, price }) {
  return (
    <CardUI>
      <CardHeader>
        <img src={profile} alt="" />
        <h3>{name}</h3>
        <p>{email}</p>
      </CardHeader>
      <CardContent>
        <img alt="card" src={img} />
        <h2>{title}</h2>
        <p>{description}</p>
        <strong>{price}</strong><span>원</span>
      </CardContent>
    </CardUI>
  );
};

const CardUI = styled.article`
  width: 380px;
  border: 2px solid gray;
`

const CardHeader = styled.div`
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  margin-bottom: 16px;

  img {
    width: 56px;
    height: 56px;
    float: left;
    vertical-align: top;
    border-radius: 50%;
    margin-right: 16px;
  }

  h3 {
    width: 70%;
    font-size: 18px;
    font-weight: 600;
    float: left;
    margin-top: 8px;
  }

  p {
    font-size: 14px;
    float: left;
    margin-top: 10px;
  }
`

const CardContent = styled.div`
  img {
    width: 100%;
    height: 380px;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    padding: 16px 0;
    border-bottom: 1px solid #e2e2e2;
  }

  p {
    font-size: 16px;
    padding: 16px 0;
    line-height: 1.5;
    color: #626262;

    /* overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; */
  }

  strong {
    font-size: 24px;
  }

  span {
    font-size: 16px;
  }
`