import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import LikeBtn from "../common/Button/ButtonLike";
import ProfileUI from "../ProfileUI";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import accountname from "../../recoil/accountname";
import postMenu from "../../assets/post_menu.svg";
import LocalNav from "../common/LocalNav";
import { useState } from "react";
import Modal from "../common/Modal";

export default function ProductCard({
  profile,
  name,
  email,
  img,
  title,
  description,
  price,
  id,
}) {
  const handleClick = useRef();
  const myaccount_name = useRecoilValue(accountname);
  const temp = useParams();
  const account_name = temp.account_name ? temp.account_name : myaccount_name;
  const [isHidden, setIsHidden] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLocalNav = () => {
    setIsHidden((prevState) => !prevState);
  };

  // 바깥쪽 눌렀을때 로컬네비 꺼짐
  useEffect(() => {
    const handleClickOutside = (event) => {
      const localNavElement = document.getElementById("localNavElement");

      if (
        handleClick &&
        localNavElement &&
        !localNavElement.contains(event.target) &&
        !handleClick.current.contains(event.target)
      ) {
        setIsHidden(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <CardWrap>
      <CardTop>
        <ProfileUI
          user_profile={profile}
          user_name={name}
          card="true"
          account_name={email}
          id={id}
        />
        {account_name === myaccount_name && (
          <button onClick={handleLocalNav}>
            <img src={postMenu} alt="메뉴 아이콘" ref={handleClick} />
          </button>
        )}
        <LocalNavWrap>
          {isHidden ? (
            <LocalNav
              setIsHidden={setIsHidden}
              handleModal={handleModal}
              width="120px"
              fontSize="14px"
              lists={[
                { name: "상품 수정", nav: `/product/${id}` },
                { name: "상품 삭제", nav: "" },
              ]}
            />
          ) : (
            false
          )}
        </LocalNavWrap>
      </CardTop>
      <CardLink to={`/products/${id}`}>
        <CardContent>
          <img alt="상품 이미지" src={img} />
          <h3>{title}</h3>
          <p>{description}</p>
          <strong>
            {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </strong>
          <span>원</span>
        </CardContent>
      </CardLink>
      <LikeBtn />
      {showModal && (
        <Modal
          postId={id}
          showModal={showModal}
          setShowModal={setShowModal}
          handleModal={handleModal}
          text="상품을 정말 삭제하시겠습니까?"
          buttonText1="상품을 삭제하겠습니다"
          buttonText2="아니요, 삭제하지 않습니다"
          showCloseButton={false}
        />
      )}
    </CardWrap>
  );
}

const CardWrap = styled.section`
  position: relative;

  & > button {
    position: absolute;
    right: 16px;
    bottom: 172px;
  }
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
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
  top: 43px;
  right: 0;
`;

const CardLink = styled(Link)``;

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

  h3 {
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
