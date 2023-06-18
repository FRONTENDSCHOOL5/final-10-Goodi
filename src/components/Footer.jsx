import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/logo_gray.svg";
import GithubBtn from "../assets/github_button.svg";

export default function Footer() {
  return (
    <FooterLayout>
      <img src={FooterLogo} alt="footer 로고" />
      <p className="footer_text">
        <strong>상업적 목적이 없는 포트폴리오용 사이트입니다 : {")"}</strong>{" "}
        <br />
        오가은, 최나경, 노태희가 팀을 이뤄서 포트폴리오용 사이트입니다 어쩌구{" "}
        <br />
        Goodi. ©2023. All Rights Reserved.
      </p>
      <button className="github_button">
        <img src={GithubBtn} alt="github 이동 버튼" />
      </button>
    </FooterLayout>
  );
}
const FooterLayout = styled.footer`
  background-color: var(--gray100-color);
  width: calc(100% - 80px);
  padding: 30px 60px 30px 80px;
  box-sizing: border-box;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  color: var(--gray400-color);
  line-height: 1.5;

  .footer_text {
    width: 100%;
    margin-left: 80px;
  }

  .footer_text strong {
    font-size: 18px;
    font-weight: 600;
  }

  img {
    width: 165px;
  }

  .github_button {
    cursor: pointer;
  }

  .github_button img {
    width: 112px;
  }
`;
