import React, { useEffect } from "react";

import { loginCheck } from "../recoil/loginCheck";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

export default function ProtectRoute({ children }) {
  const isLogin = useRecoilValue(loginCheck);
  const navigate = useNavigate();
  const errorMessage = "로그인을 해주세요!";

  useEffect(() => {
    if (!isLogin) {
      navigate("/", { state: errorMessage });
    }
  }, []);

  // if (!isLogin) {
  //   return null;
  // }

  return children;
}
