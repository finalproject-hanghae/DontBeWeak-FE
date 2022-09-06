import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import axios from "axios";

import kakaoIcon from "../../../../assets/images/icons/kakao.png";

const KakaoLogIn = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=599bca646044fc4147f7f8f4c461f9ca&redirect_uri=
http://localhost:3000/auth/kakao/callback&response_type=code`;

//   }        // 인가코드 받아오기
const code = new URL(window.location.href).searchParams.get("code");
  const onClickKakaoLogin = async (e) => {
    window.location.href = KAKAO_AUTH_URL;

    //인가코드 넘기기,토큰 받기
    try {
      const res = await axios.get(`http://localhost:3000/auth/kakao/callback?code=${code}`).then((response) => {
        console.log(response);
        const token = response.headers.authorization;
        window.localStorage.setItem("token", token);
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
    
  const token = window.localStorage.getItem("token")


  
  return (
    <SnsLoginBtn onClick={onClickKakaoLogin}>
      <img src={kakaoIcon} alt="kakao_icon" />
      카카오톡 로그인
    </SnsLoginBtn>
  );
};

const SnsLoginBtn = styled.button`
  width: 32rem;
  height: 4rem;
  background-color: #fff;
  color: #000;
  font-weight: 800;
  margin-top: 10px;
  border: 2px solid #313131;
  font-size: 18px;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  img {
    margin-right: 8px;
  }
`;

export default KakaoLogIn;

// import axios from "axios";
// import React, { useEffect } from "react";
// import styled from "styled-components";
// import kakaoIcon from "../../../../assets/images/icons/kakao.png";

// const KakaoLogin = () => {
//   //앱 키 선언
//   const REST_API_KEY = "599bca646044fc4147f7f8f4c461f9ca";
//   const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
// const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=599bca646044fc4147f7f8f4c461f9ca&redirect_uri=
// http://localhost:3000/auth/kakao/callback&response_type=code`;

//   const onClickKakaoLogin = async (e) => {
//     window.location.href = KAKAO_AUTH_URL;
//         // 인가코드 받아오기
//         const code = new URL(window.location.href).searchParams.get("code");
//     //인가코드 넘기기,토큰 받기
//     try {
//       const res = await axios.get(KAKAO_AUTH_URL).then((response) => {
//         console.log(response);
//         const token = response.headers.authorization;
//         window.localStorage.setItem("token", token);
//       });
//       console.log(res);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   // const token = window.localStorage.getItem("token");
//   // //백엔드로 토큰 넘기기
//   // try {
//   //   const res = await axios

//   //     .get("http://3.37.88.75/auth/kakao/callback", {
//   //       headers: {
//   //         Authorization: token,
//   //         request: token,
//   //       },
//   //     })
//   //     // data 라는 변수에 유저 정보를 저장하고, setItem을 사용해 로컬에 다시 저장
//   //     .then((data) => {
//   //       window.localStorage.setItem("profile", data);
//   //       console.log(data);
//   //     });
//   // } catch (e) {
//   //   console.error(e);
//   // }

//   return (
//     <SnsLoginBtn onClick={onClickKakaoLogin}>
//       <img src={kakaoIcon} alt="kakao_icon" />
//       카카오톡 로그인
//     </SnsLoginBtn>
//   );
// };
// const SnsLoginBtn = styled.button`
//   width: 32rem;
//   height: 4rem;
//   background-color: #fff;
//   color: #000;
//   font-weight: 800;
//   margin-top: 10px;
//   border: 2px solid #313131;
//   font-size: 18px;
//   border-radius: 4px;
//   box-sizing: border-box;
//   cursor: pointer;
//   img {
//     margin-right: 8px;
//   }
// `;
// export default KakaoLogin;
