import React from "react";

import styled from "styled-components";
import { ColumnFlexDiv } from "../../../../style/styled";

const LogInForm = () => {
  const logInIDRef = React.useRef();
  const logInPWRef = React.useRef();
  const logInAlertRef = React.useRef();

  const submitToLogin = (e) => {
    e.preventDefault();
    const username = logInIDRef.current.value;
    const password = logInPWRef.current.value;

    // 공백 유효성 검사
    if (username === "") {
      logInAlertRef.current.innerText = "아이디를 입력하세요.";
      return;
    } else if (password === "") {
      logInAlertRef.current.innerText = "비밀번호를 입력하세요.";
      return;
    }
    console.log(username, password);
  };

  return (
    // <>
    //   <form onSubmit={submitToLogin}>
    //     <ColumnFlexDiv>
    //       <h3>로그인</h3>
    //       <input type="text" placeholder="ID" ref={logInIDRef} />

    //       <input type="password" placeholder="PW" ref={logInPWRef} />
    //       <small ref={logInAlertRef}></small>
    //       <button>로그인</button>
    //     </ColumnFlexDiv>
    //   </form>
    //   <ColumnFlexDiv>
    //     <button>카카오로그인</button>
    //     <button>네이버로그인</button>
    //   </ColumnFlexDiv>
    // </>

    <LogInModalBox>
      <form onSubmit={submitToLogin}>
        <ColumnFlexDiv>
          <h2>로그인</h2>
          <LogInInput
          type="text" placeholder="ID" ref={logInIDRef} />

          <LogInInput
          type="password" placeholder="PW" ref={logInPWRef} />

          <LogInButton>로그인</LogInButton>
          <small ref={logInAlertRef}>회원가입안함?</small>
        </ColumnFlexDiv>
      </form>
      <ColumnFlexDiv>
        <KakaoLogIn>카카오 로그인</KakaoLogIn>
        <NaverLogIn>네이버 로그인</NaverLogIn>
      </ColumnFlexDiv>
    </LogInModalBox>
  );
};


const LogInModalBox = styled.div`
width: 630px;
height: 630px;

`;


const LogInInput = styled.input`
width: 30vw;
height: 3.7vh;
margin: auto auto 20px auto;
border: 0.5px solid #a5a5a5;
`;

const LogInButton = styled.button`
width: 30vw;
height: 4.5vh;
background-color: #f98532;
color: white;
margin: auto auto 10px auto;
border: 0.5px solid ;
`;

const KakaoLogIn = styled.button`
width: 30vw;
height: 4.5vh;
margin: 10px auto 7px auto;
border: 0.5px solid ;
background-color: yellow;

`;

const NaverLogIn = styled.button`
width: 30vw;
height: 4.5vh;
margin: 10px auto 7px auto;
border: 0.5px solid ;
background-color: #24E337;

`;

export default LogInForm;
