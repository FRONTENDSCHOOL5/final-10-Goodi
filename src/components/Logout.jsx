import { useRecoilState } from "recoil";
import accountname from "../recoil/accountname";
import logoutCheck from "../recoil/logoutCheck";
import { loginCheck } from "../recoil/loginCheck";
import loginToken from "../recoil/loginToken";
import { useNavigate } from "react-router-dom";
import { recentSearch } from "../recoil/recentSearch";
import { cartItemsState } from "../recoil/cartItemState";

export default function LogoutHandler() {
  const navigate = useNavigate();

  const [isloginCheck, setLoginCheck] = useRecoilState(loginCheck);
  const [_loginToken, setToken] = useRecoilState(loginToken);
  const [_accountname, setAccountname] = useRecoilState(accountname);
  const [_logoutCheck, setLogoutCheck] = useRecoilState(logoutCheck);
  const [isRecentSearch, setIsRecentSearch] = useRecoilState(recentSearch);
  const [cartItemLogout, setCartItemLogout] = useRecoilState(cartItemsState);

  const handleLogout = () => {
    setLoginCheck(false);
    setToken(null);
    setAccountname("");
    setLogoutCheck(true);
    setIsRecentSearch([]);
    setCartItemLogout([]);

    navigate("/");
  };

  return { handleLogout };
};
