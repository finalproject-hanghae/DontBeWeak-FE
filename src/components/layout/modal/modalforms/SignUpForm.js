import { useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv } from "../../../../style/styled";
import { userApi } from "../../../../api/userAPI";

function SignUpForm() {
  const navigate = useNavigate();

  const signUpIdRef = React.useRef(); // Id
  const signUpNicknameRef = React.useRef(); // nickName
  const signUpPwRef = React.useRef(); // Pw
  const signUpPwCheckRef = React.useRef(); // PwCheck
  const signUpAlertRef = React.useRef(); // 경고

  const submitToSignUp = async (e) => {
    e.preventDefault();
    const username = signUpIdRef.current.value;
    const nickname = signUpNicknameRef.current.value;
    const password = signUpPwRef.current.value;
    const checkPassword = signUpPwCheckRef.current.value;

    // 공백 유효성 검사
    if (username === "") {
      signUpAlertRef.current.innerText = "아이디를 입력하세요.";
      return;
    } else if (nickname === "") {
      signUpAlertRef.current.innerText = "닉네임을 입력하세요.";
      return;
    } else if (password === "") {
      signUpAlertRef.current.innerText = "비밀번호를 입력하세요.";
      return;
    } else if (checkPassword === "") {
      signUpAlertRef.current.innerText = "비밀번호를 다시 입력하세요.";
      return;
    }

    const data = {
      username: username,
      nickname: nickname,
      password: password,
      passwordCheck: checkPassword,
    };

    userApi
      .apiSignup(data)
      .then((res) => {
        console.log(res);
        alert("회원가입 성공!");
        navigate("/login");
      })
      .catch((err) => {
        if (err.response.data.message === "중복된 아이디가 있습니다") {
          signUpAlertRef.current.innerText = err.response.data.message;
          return;
        }
      });
  };

  return (
    <SignUpModalBox>
      <form onSubmit={submitToSignUp}>
        <ColumnFlexDiv>
          <h2>회원가입</h2>
          <SignUpInput type="text" placeholder="ID" ref={signUpIdRef} />
          <SignUpInput
            type="text"
            placeholder="Nick name"
            ref={signUpNicknameRef}
          />
          <SignUpInput type="password" placeholder="PW" ref={signUpPwRef} />
          <SignUpInput
            type="password"
            placeholder="PW check"
            ref={signUpPwCheckRef}
          />
          <small ref={signUpAlertRef} style={{ color: "red" }} />
          <SignUpButton>회원가입</SignUpButton>
        </ColumnFlexDiv>
      </form>
    </SignUpModalBox>
  );
}

const SignUpModalBox = styled(ColumnFlexDiv)`
  width: 630px;
  height: 630px;
  justify-content: center;

  h2 {
    font-size: 35px;
    margin: 35px 0px;
  }
  form {
    width: 100%;
    height: 90%;
  }
`;

const SignUpInput = styled.input`
  width: 513px;
  height: 64px;
  margin: auto auto 25px auto;
  border: 0.5px solid #c5c5c5;
  padding: 3%;
  color: #000;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 4px;
`;
const SignUpButton = styled.button`
  width: 513px;
  height: 64px;
  background: #fabc4f;
  color: #000;
  font-weight: 800;
  margin: auto auto 20px auto;
  border: none;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
`;

export default SignUpForm;
