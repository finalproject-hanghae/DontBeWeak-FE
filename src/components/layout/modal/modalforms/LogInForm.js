import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { keepAuthDataMW } from "../../../../redux/modules/users";
import { ColumnFlexDiv } from "../../../../style/styled";

const LogInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logInIDRef = React.useRef(null);
  const logInPWRef = React.useRef(null);
  const logInAlertRef = React.useRef(null);

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
    const userData = { username: username, password: password };
    dispatch(keepAuthDataMW(userData, navigate));
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
          <h2 style={{ margin: "37px auto 50px auto" }}>로그인</h2>
          
          <LogInInput type="text" placeholder="ID" ref={logInIDRef}  />
          <LogInInput type="password" placeholder="PW" ref={logInPWRef} />

          <LogInButton>로그인</LogInButton>
          <small ref={logInAlertRef}>
            회원가입안함? <Link to="/signup">여기서하셈</Link>
          </small>
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
  width: 513px;
  height: 64px;
  margin: auto auto 20px auto;
  border: 0.5px solid #a5a5a5;
  font-size: 15px;
  border-radius: 4px;
`;

const LogInButton = styled.button`
  width: 513px;
  height: 64px;
  background-color: #f98532;
  color: white;
  margin: auto auto 20px auto;
  border: 0.5px solid;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
`;

const KakaoLogIn = styled.button`
  width: 513px;
  height: 64px;
  margin: 20px auto 7px auto;
  border: 0.5px solid;
  background-color: yellow;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
`;

const NaverLogIn = styled.button`
  width: 513px;
  height: 64px;
  margin: 10px auto 7px auto;
  border: 0.5px solid;
  background-color: #24e337;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
`;

export default LogInForm;