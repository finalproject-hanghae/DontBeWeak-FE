import axios from "axios";
import { keepAuthData } from "../redux/modules/users";

const kakaoLogin = (code, navigate) => {
  return function (dispatch) {
    axios({
      method: "GET",
      url: `http://3.36.126.88:8080/auth/kakao/callback?code=${code}`,
    })
      .then((res) => {
        console.log(res);

        const ACCESS_TOKEN = res.headers.authorization;
        dispatch(keepAuthData(ACCESS_TOKEN));

        const USER_NAME = res.data.username;
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