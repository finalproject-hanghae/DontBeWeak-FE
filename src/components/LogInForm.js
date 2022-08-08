import React from "react";
import { ColumnFlexDiv } from "../styled";

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
    console.log(username,password)
  };

  return (
    <>
      <form onSubmit={submitToLogin}>
        <ColumnFlexDiv>
          <h3>로그인</h3>
          <input type="text" placeholder="ID" ref={logInIDRef} />

          <input type="password" placeholder="PW" ref={logInPWRef} />
          <small ref={logInAlertRef}></small>
          <button>로그인</button>
        </ColumnFlexDiv>
      </form>
      <ColumnFlexDiv>
        <button>카카오로그인</button>
        <button>네이버로그인</button>
      </ColumnFlexDiv>
    </>
  );
};

export default LogInForm;
