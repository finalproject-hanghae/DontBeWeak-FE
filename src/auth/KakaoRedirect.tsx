import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { actionCreators as userActions } from "./kakao";

const KakaoRedirect = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  React.useEffect(() => {
    dispatch(userActions.kakaoLogin(code, navigate));
  }, []);

  return <div></div>;
};

export default KakaoRedirect;
