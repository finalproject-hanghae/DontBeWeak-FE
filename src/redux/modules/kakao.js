import axios from "axios";

const kakaoLogin = (code) => {
    return async (dispatch) => {
      await axios
        .get(`http://3.38.135.93:8080/auth/kakao/callback?code=${code}`)
        .then((res) => {
          console.log(res); // 토큰이 넘어올 것임

          const ACCESS_TOKEN = res.data.accessToken;

          localStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함
          console.log("ACCESS_TOKEN: ", ACCESS_TOKEN);
        })
        .catch((err) => {
          console.log("소셜로그인 에러", err);
          window.alert("로그인에 실패하였습니다.");
        });
    };
  };

// const kakaoLogin = (code) => {
//   return function (dispatch, getState) {
//     axios({
//       method: "GET",
//       url: `http://3.38.135.93:8080/oauth/callback/kakao?code=${code}`,
//     })
//       .then((res) => {
//         console.log(res); // 토큰이 넘어올 것임

//         const ACCESS_TOKEN = res.data.accessToken;

//         localStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함
//       })
//       .catch((err) => {
//         console.log("소셜로그인 에러", err);
//         window.alert("로그인에 실패하였습니다.");
//       });
//   };
// };
const actionCreators = { kakaoLogin };

export { actionCreators }
