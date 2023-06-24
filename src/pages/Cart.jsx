import React from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil';
import { cartItemsState } from '../recoil/cartItemState';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Layout from '../layout/Layout';

import cartNullIcon from "../assets/cart_null_icon.svg"
import defaultImage from "../assets/profile_img_def.svg";
import iconClose from "../assets/icon_close.svg";


export default function Cart() {
  const [cartItem, setCartItem] = useRecoilState(cartItemsState);

  const BASE_URL = "https://api.mandarin.weniv.co.kr/";

  const removeItem = (itemId) => {
    const updatedItems = cartItem.filter(item => item.id !== itemId);
    setCartItem(updatedItems);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedItems = cartItem.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItem(updatedItems);
  };

  // const calculateTotal = () => {
  //   return cartItem.reduce((total, item) => total + (item.productPrice * item.productCount), 0);
  // };

  const cartRest = useResetRecoilState(cartItemsState);
  const cartResetButton = () => {
    cartRest();
  };

  console.log(cartItem);
  console.log(cartItem.itemImage);  // 사진 없으면 undefined

  return (
    <Layout reduceTop="true">
      <h2 className='a11y-hidden'>장바구니</h2>
      <CartWrap>
        <CartLeft>
          {cartItem.length === 0 ? (
            <CartNull>
              <img src={cartNullIcon} alt="장바구니 아이콘" />
              <p>현재 장바구니에 등록된 상품이 없어요</p>
              <Link to="/main">상품 구경하기</Link>
            </CartNull>
          ) : (
            <ul>
              {cartItem.map((item) => (
                <CartProductItem key={item.id}>
                  <CartUserInfo>
                    <img src={item.userImage === BASE_URL + "null" ? defaultImage : item.userImage} alt="" />
                    <strong>{item.userName}</strong>
                    <button onClick={cartResetButton}><img src={iconClose} alt="상품 삭제 버튼" /></button>
                  </CartUserInfo>
                  <CartProductInfo>
                    <img src={BASE_URL + item.productImage} alt="" />
                    <CartProductDesc>
                      <p>No. {item.id}</p>
                      <strong>{item.productName}</strong>
                      <p>{item.productPrice} 원</p>
                      <CartProductTotal>
                        <strong>{item.productPrice * item.productCount} 원</strong>
                        <span>수량 {item.productCount}개</span>
                      </CartProductTotal>
                    </CartProductDesc>
                  </CartProductInfo>
                </CartProductItem>
              ))}
            </ul>

          )}
        </CartLeft>
        <CartRight>
          <CartRightSticky>
            <CartRightTitle>주문 정보</CartRightTitle>
            <OrderInfo>
              <ul>
                <li>
                  <span>총 수량</span>
                  <span>0개</span>
                </li>
                <li>
                  <span>총 상품금액</span>
                  <span>0원</span>
                </li>
                <li>
                  <span>총 배송비</span>
                  <span>0원</span>
                </li>
                <li>
                  <strong>총 주문금액</strong>
                  <strong>0원</strong>
                </li>
              </ul>
            </OrderInfo>
            <Button disabled={cartItem.length === 0} text="주문서 작성" />
          </CartRightSticky>
        </CartRight>
      </CartWrap>
    </Layout>
  );
}

const CartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 64px;
  padding: 40px 50px 40px 80px;
`

const CartLeft = styled.section`
  width: 60%;
  min-height: 550px;
`

const CartProductItem = styled.li`
  border: 1px solid #EBEBEB;
  border-radius: 0 0 4px 4px;
  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 0;
  }
`

const CartUserInfo = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--gray100-color);
  display: flex;
  align-items: center;
  padding: 10px 16px;
  box-sizing: border-box;

  & > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }

  & > strong {
    font-size: 16px;
    font-family: var(--font--semibold);
  }

  & > button {
    width: 40px;
    height: 40px;
    margin-left: auto;
    cursor: pointer;

    & > img {
      display: block;
      margin: 0 auto;
    }
  }
`

const CartProductInfo = styled.div`
  width: 100%;
  padding: 18px 24px 20px;
  box-sizing: border-box;
  display: flex;
  gap: 28px;

  & > img {
    width: 150px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
`

const CartProductDesc = styled.div`
  width: 100%;
  p {
  margin-bottom: 14px;

    &:first-child {
      margin-top: 5px;
      font-size: 14px;
      color: var(--gray400-color);
    }
    &:last-child {
      font-size: 16px;
    }
  }

  strong {
    display: block;
    font-family: var(--font--semibold);
    font-size: 20px;
    margin-bottom: 14px;
  }
`

const CartProductTotal = styled.div`
  width: 100%;
  border-top: 1px solid var(--gray100-color);
  padding-top: 18px;
  display: flex;
  justify-content: space-between;

  strong {
    font-family: var(--font--Bold);
    font-size: 20px;
  }

  span {
    font-family: var(--font--Medium);
    color: var(--dark-sub-color);
    font-size: 18px;
  }
`

const CartNull = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    margin-bottom: 18px;
  }
  p {
    font-family: var(--font--Regular);
    color: var(--gray400-color);
    margin-bottom: 32px;
  }
  a {
    padding: 14px 40px;
    border: 2px solid var(--gray300-color);
    color: var(--gray400-color);
    text-decoration: none;
    border-radius: 4px;
  }
`

const CartRight = styled.section`
  width: 40%;
  position: relative;
`

const CartRightSticky = styled.div`
  position: sticky;
  right: 0;
  top: 5rem;
`

const CartRightTitle = styled.h3`
  font-size: 24px;
  font-family: var(--font--Bold);
  margin-bottom: 15px;
`

const OrderInfo = styled.div`
  width: 100%;
  padding: 20px 40px 30px;
  border: 1px solid var(--gray100-color);
  box-sizing: border-box;
  margin-bottom: 24px;

  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray100-color);
    padding: 18px 0;
    font-family: var(--font--Medium);
    font-size: 16px;

    span {
      &:last-child {
        color: var(--gray500-color);
      }
    }

    &:last-child {
      border-bottom: none;
      padding: 32px 0 0 0;
      font-family: var(--font--Bold);
      font-size: 20px;
    }

    strong {
      &:last-child {
        color: var(--sub-color);
      }
    }
  }
`