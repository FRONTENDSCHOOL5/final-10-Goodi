import React, { useEffect } from "react";
import styled from "styled-components";

// 이미지
import IconCheck from "../assets/icon_check_primary.svg";

export default function Toast({ setToast, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return <ToastLayout>{text}</ToastLayout>;
}

const ToastLayout = styled.div`
  position: fixed;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  color: white;
  font-family: var(--font--Medium);
  padding: 12px 24px 12px 16px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: opacity ease 0.6s 2.5s none;

  &::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background: url(${IconCheck}) no-repeat center/cover;
  }

  @keyframes opacity {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
