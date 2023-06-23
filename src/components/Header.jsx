import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo_black.svg";
import accountname from "../recoil/accountname";
import loginToken from "../recoil/loginToken";
import followingAPI from "../api/following";
import { useRecoilState } from "recoil";
import { checkFollow } from "../recoil/checkChange";
import { useRecoilValue } from "recoil";

export default function Header() {
  const [token, setToken] = useRecoilState(loginToken);
  const [accountName, setAccountName] = useRecoilState(accountname);
  const [followingData, setFollowingData] = useState(null);
  const BASE_URL = "https://api.mandarin.weniv.co.kr/";
  const checkFollowChange = useRecoilValue(checkFollow);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFollowingData = async () => {
      try {
        const response = await followingAPI(accountName, token);
        setFollowingData(response);
      } catch (error) {
        console.error("Account API 에러가 발생했습니다", error);
      }
    };
    fetchFollowingData();
  }, [checkFollowChange]);

  return (
    <HeaderLayout>
      <h1>
        <LogoLink to="/main">
          <img src={Logo} alt="goodi 로고 이미지" />
        </LogoLink>
      </h1>
      <FollowingWrap>
        {followingData &&
          followingData
            .map((data) => {
              return (
                <FollowingIcon
                  key={data._id}
                  onClick={() => {
                    navigate(`/profile/${data.accountname}`);
                  }}
                  type="button"
                >
                  <img
                    src={
                      data.image.includes("null")
                        ? BASE_URL + "1687455865316.jpg"
                        : data.image.includes("http")
                        ? data.image
                        : BASE_URL + data.image
                    }
                    alt=""
                  />
                </FollowingIcon>
              );
            })
            .slice(0, 5)}
      </FollowingWrap>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header`
  position: fixed;
  width: calc(100% - 80px);
  padding: 16px 60px 16px 80px;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const FollowingWrap = styled.div`
  display: flex;
  gap: 12px;
`;

const LogoLink = styled(Link)`
  display: block;
  height: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 160px;
    vertical-align: middle;
  }
`;

const FollowingIcon = styled.button`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
