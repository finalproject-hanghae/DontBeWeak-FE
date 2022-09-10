import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { keepAuthData } from "../redux/modules/users";

const kakaoLogin = (code: string | null, navigate: NavigateFunction) => {
  return async (dispatch: any) => {
    await axios
      .get(`${process.env.REACT_APP_DB_HOST}/auth/kakao/callback?code=${code}`)
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.headers.authorization;
        const USER_NAME = res.data.username;

        sessionStorage.setItem("authorization", ACCESS_TOKEN);
        dispatch(keepAuthData(ACCESS_TOKEN))
        sessionStorage.setItem("username", USER_NAME);
        navigate("/record/" + USER_NAME);
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
      });
  };
};

const actionCreators = { kakaoLogin };

export { actionCreators };
