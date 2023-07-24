import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

// 이미지 파일
import cssSprites from "../assets/css_sprites.png";

// 컴포넌트
import LocalNav from "../components/common/LocalNav";
import Modal from "../components/common/Modal";
import Search from "./../components/Search/Search";
import { useRecoilValue } from "recoil";
import { cartItemsState } from "../recoil/cartItemState";

export default function Navigation() {
  const cartItem = useRecoilValue(cartItemsState);
  const navigate = useNavigate();
  const icons = [
    { name: "Search", nav: "" },
    { name: "Home", nav: "/main" },
    { name: "MyPage", nav: "/profile" },
    { name: "Cart", nav: "/cart" },
    { name: "Chat", nav: "/chat" },
    { name: "Post", nav: "" },
    { name: "Logout", nav: "" },
  ];

  const [isHidden, setIsHidden] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleLocalNav = () => {
    setIsHidden((prevIsHidden) => !prevIsHidden);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navigationElement = document.getElementById("navigation");
      if (navigationElement && !navigationElement.contains(event.target)) {
        setIsHidden(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <NavigationLayout id="navigation">
      {icons.map((el, i) => {
        return (
          <NavList
            className={el.name === "Post" && isHidden ? "active" : ""}
            key={i}
            onClick={() => {
              if (el.name === "Post") handleLocalNav();
              else if (el.name === "Logout") handleModal();
              else if (el.name === "Search") handleSearch();
              else navigate(el.nav);
            }}
          >
            <IconImage className={el.name} />
            <p className={i === 0 ? "a11y-hidden" : ""}>{el.name}</p>
            {el.name === "Post" && isHidden && <ActiveBar />}
            {el.name === "Cart" && (
              <div>
                <span>{cartItem.length}</span>
              </div>
            )}
          </NavList>
        );
      })}
      {isHidden ? (
        <LocalNav
          setIsHidden={setIsHidden}
          lists={[
            { name: "상품 등록", nav: "/postproduct" },
            { name: "게시물 작성", nav: "/postposting" },
          ]}
          navibar="true"
        />
      ) : (
        false
      )}
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          handleModal={handleModal}
          text="구디를 정말 떠나시겠습니까?"
          buttonText1="네, 나중에 또 오겠습니다"
          buttonText2="아니요, 좀 더 있을래요"
          showCloseButton={false}
        />
      )}
      {showSearch && (
        <Search
          setShowSearch={setShowSearch}
          showModal={showModal}
          handleSearch={handleSearch}
        />
      )}
    </NavigationLayout>
  );
}

const NavigationLayout = styled.article`
  background-color: #ffffff;
  width: 80px;
  height: 100vh;
  border-left: 1px solid var(--gray200-color);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 16px;
  position: fixed;
  right: 0;
  z-index: 2;

  & > button:nth-child(1) {
    margin-bottom: 32px;
  }
`;

const NavList = styled.button`
  width: 100%;
  padding: 10px 0 10px 0;
  box-sizing: border-box;
  text-align: center;
  color: var(--gray400-color);
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  z-index: 100;
  cursor: pointer;

  &.active {
    background-color: #f0ffed;
    color: var(--dark-sub-color);
    margin-bottom: 0;
  }

  &:focus {
    outline: 1px solid #ff1515;
  }

  &:hover {
    background-color: #f0ffed;
    transition: all 0.3s;
    color: var(--dark-sub-color);
  }

  div {
    position: relative;
  }

  span {
    position: absolute;
    top: -51px;
    right: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    background-color: var(--main-color);
    color: #fff;
    font-size: 12px;
    border-radius: 50%;
  }

  .Search {
    background: url(${cssSprites}) -10px -10px;
  }

  .Home {
    background: url(${cssSprites}) -10px -114px;
  }

  .MyPage {
    background: url(${cssSprites}) -62px -10px;
  }

  .Cart {
    background: url(${cssSprites}) -10px -62px;
  }

  .Chat {
    background: url(${cssSprites}) -62px -62px;
  }

  .Post {
    background: url(${cssSprites}) -114px -62px;
  }

  .Logout {
    background: url(${cssSprites}) -114px -10px;
  }
`;

const IconImage = styled.div`
  width: 32px;
  height: 32px;
  background-color: red;
`;

const ActiveBar = styled.div`
  width: calc(100% - 12px);
  height: 3px;
  background-color: var(--main-color);
`;
