import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ProfileUI from "./common/ProfileUI";
import ButtonLineIcon from "./common/ButtonLineIcon";

export default function PopularAuthorView({ data }) {
  return (
    <Section>
      <ProfileUI
        user_profile={data.profile}
        user_name={data.name}
        user_email={data.email}
        mainprofile="true"
      >
        <ButtonLineIcon text="작가 팔로우" />
      </ProfileUI>

      <UL>
        {data.img.map((item) => {
          return (
            <li key={item.id}>
              <LinkStyle to={`/products/${item.id}`}>
                <img src={item.dummyImg} alt="" />
              </LinkStyle>
            </li>
          );
        })}
      </UL>
    </Section>
  );
}

const Section = styled.section`
  margin: 50px 0 60px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const UL = styled.ul`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  li:first-child {
    grid-row: 1 / span 2;
    grid-column: 1 / 2;
  }
`;

const LinkStyle = styled(Link)`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s;
  }
  
  &:hover > img {
    transform: scale(1.02);
  }
`