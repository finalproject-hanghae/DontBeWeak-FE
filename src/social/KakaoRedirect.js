import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators as userActions } from "./kakao";

const KakaoRedirect = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  React.useEffect(() => {
    dispatch(userActions.kakaoLogin(code, navigate));
  }, []);

  return <div></div>;
};

export default KakaoRedirect;
