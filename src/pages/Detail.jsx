import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

//component
import Layout from "../layout/Layout";
import DetailImage from './../components/DetailImage';
import Count from "../components/Count";
import ProfileUI from "../components/ProfileUI";
import Button from "../components/common/Button/Button";
import ButtonLike from "../components/common/Button/ButtonLike";
import Toast from "../components/common/Toast";

//image
import MoneyIcon from "../assets/icon_money_black.svg";
import DeliveryIcon from "../assets/icon_delivery_dark.svg";

//API
import productAPI from "../api/product";

//recoil
import loginToken from "../recoil/loginToken";
import accountname from "../recoil/accountname";
import DetailSkeleton from "../style/skeletonUI/skeletonPage/DetailSkeleton";
import { cartItemsState } from "../recoil/cartItemState";
import checkImageUrl from "../components/common/checkImageUrl";

export default function Detail() {
  const { id } = useParams();
  // 유저 토큰
  const token = useRecoilValue(loginToken);
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState("");
  const [price, setPrice] = useState(0);
  const [toast, setToast] = useState(false);

  const navigate = useNavigate();

  // 카운트 수량 관리
  const [count, setCount] = useState(1);

  // 장바구니 상태
  const [cartItem, setCartItem] = useRecoilState(cartItemsState);

  const addToCart = () => {
    const newItem = {
      userImage: productData.author.image,
      userName: productData.author.username,
      id: productData.id,
      productName: productData.itemName,
      productPrice: productData.price,
      productImage: productData.itemImage.split(",")[0],
      productCount: count,
    }

    setToast(true);

    const existingItem = cartItem.find((cartItem) => cartItem.id === newItem.id);

    if (existingItem) {
      // 이미 장바구니에 있는 상품인 경우
      const updatedItems = cartItem.map((cartItem) =>
        cartItem.id === newItem.id ? { ...cartItem, productCount: cartItem.productCount + count } : cartItem
      );
      setCartItem(updatedItems);
    } else {
      // 장바구니에 없는 상품인 경우
      setCartItem([...cartItem, newItem]);
    }
  }

  const myaccount_name = useRecoilValue(accountname);
  // const temp = useParams();
  const account_name = id.account_name ? id.account_name : myaccount_name;

  // product 정보 API에서 받아오기
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await productAPI(token, id);
        setProductData(response.product);
        setPrice(response.product.price);
        setLoading(false);
      } catch (error) {
        console.error("Account API 에러가 발생했습니다", error);
      }
    };

    fetchProductData();
  }, []);

  // 카운트 마다 변하는 가격 함수
  const getPrice = (price) => {
    setPrice(price);
  };

  // 숫자 세자리 수마다 컴마 찍어주는 함수
  const priceDivide = (price) => {
    return price.toLocaleString();
  };

  return (
    <Layout>
      {loading ? (
        <DetailSkeleton />
      ) : (
        <>
          {toast && (
            <Toast setToast={setToast} text="장바구니에 상품이 담겼습니다." />
          )}
          <DetailWrap>
            <DetailImage img={productData.itemImage.split(",")} />

            <ProductDetail>
              <div className="product_detail_top">
                <ProfileUI
                  key={productData.author._id}
                  user_profile={checkImageUrl(productData.author.image, 'profile')}
                  user_name={productData.author.username}
                  user_email={productData.author.accountname}
                  account_name={account_name}
                />
              </div>

              <h2 className="product_title">{productData.itemName}</h2>
              <p className="product_description">{productData.link}</p>
              <DeliveryDescription>
                <div className="delivery_date">
                  <img src={DeliveryIcon} alt="박스 아이콘" />
                  <h4 className="delivery_price_subtitle">배송 기간</h4>
                  <p className="delivery_price_text">
                    지금 주문하면 <strong>3일 이내</strong> 출고 예정 (주말, 공휴일
                    제외)
                  </p>
                </div>
                <div className="delivery_price">
                  <img src={MoneyIcon} alt="동전 아이콘" />
                  <h4 className="delivery_price_subtitle">배송비</h4>
                  <p className="delivery_price_text">
                    구디 제품 80,000원 이상 구매시 무료배송
                    <br />
                    제주도를 포함한 도서/산간지역은 추가 배송비 3,000원
                  </p>
                </div>
              </DeliveryDescription>
              <h4 className="product_count_subtitle">수량</h4>
              <Count
                count={count}
                setCount={setCount}
                price={price}
                getPrice={getPrice}
                productPrice={productData.price}
              />
              <hr />
              <ProductPrice>
                <h4 className="product_price_subtitle">총 결제 금액</h4>
                <p className="product_price">
                  <strong>{priceDivide(price)}</strong>원
                </p>
              </ProductPrice>

              <ButtonWrap>
                <ButtonLike />

                <Button
                  text="장바구니 담기"
                  className="cart_button"
                  type="button"
                  bg="white"
                  color="var(--black-color)"
                  onClick={addToCart}
                />

                <Button
                  text="구매하고 싶어요"
                  className="purchase_button"
                  type="button"
                  bg="black"
                  br="none"
                  onClick={() => navigate('/chat')}
                />
              </ButtonWrap>
            </ProductDetail>
          </DetailWrap>
        </>
      )}
    </Layout>
  );
}

const DetailWrap = styled.div`
  margin: 0 60px 120px 80px;
  display: flex;
  gap: 5%;
`;

const ProductDetail = styled.section`
  width: 55%;

  .product_detail_top {
    display: flex;
    gap: 16px;
  }

  .product_title {
    font-family: var(--font--Bold);
    font-size: 34px;
  }

  .product_description {
    color: var(--gray500-color);
    line-height: 1.6;
    margin-top: 16px;
  }

  .product_count_subtitle {
    font-family: var(--font--Bold);
    margin: 60px 0 24px 0;
  }

  hr {
    margin: 24px 0 32px 0;
    border: solid 1px var(--gray100-color);
  }
`;

const DeliveryDescription = styled.section`
  padding: 31px 24px 24px 24px;
  box-sizing: border-box;
  background-color: var(--gray50-color);
  border-radius: 4px;
  margin-top: 24px;

  & div {
    display: flex;
  }

  & div img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    margin-top: -7px;
  }

  & div h4 {
    width: 15%;
    font-size: 16px;
    font-family: var(--font--Bold);
    flex-shrink: 0;
    margin-right: 8px;
  }

  & div p {
    font-size: 14px;
    line-height: 1.6;
    color: var(--gray500-color);
  }

  & div p strong {
    font-family: var(--font--Bold);
    color: var(--sub-color);
  }

  .delivery_date {
    margin-bottom: 24px;
  }
`;

const ProductPrice = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .product_price_subtitle {
    font-family: var(--font--Bold);
    color: var(--gray400-color);
  }

  .product_price {
    font-family: var(--font--Medium);
    font-size: 18px;
    color: var(--gray400-color);
    display: flex;
    align-items: center;
  }

  .product_price strong {
    font-family: var(--font--Bold);
    color: var(--black-color);
    font-size: 36px;
    margin-right: 6px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 32px;
  align-items: center;
  gap: 2%;

  & button {
    cursor: pointer;
    font-family: var(--font--Medium);
  }

  .purchase_button,
  .cart_button {
    width: 44%;
  }
`;
