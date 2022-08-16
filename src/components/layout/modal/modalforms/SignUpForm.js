import React from "react";
import { ColumnFlexDiv } from "../../../../style/styled";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();

  const signUpIdRef = React.useRef(); // Id
  const signUpNameRef = React.useRef(); // Name
  const signUpPwRef = React.useRef(); // Pw
  const signUpPwCheckRef = React.useRef(); // PwCheck
  const signUpAlertRef = React.useRef(); // 경고

  const submitToSignUp = (e) => {
    e.preventDefault();
    const username = signUpIdRef.current.value;
    const nickname = signUpNameRef.current.value;
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

    console.log(username, nickname, password, checkPassword);

  };

  return (
    // <form onSubmit={submitToSignUp}>
    //   <ColumnFlexDiv>
    //     <h2>회원가입</h2>
    //     <input type="text" placeholder="ID" ref={signUpIdRef} />
    //     <input type="text" placeholder="User name" ref={signUpNameRef} />
    //     <input type="password" placeholder="PW" ref={signUpPwRef} />
    //     <input type="password" placeholder="PW check" ref={signUpPwCheckRef} />
    //     <small ref={signUpAlertRef} />
    //     <button>회원가입</button>
    //   </ColumnFlexDiv>
    // </form>

    <SignUpModalBox>
      <form onSubmit={submitToSignUp}>
        <ColumnFlexDiv>
          <h2 style={{ margin: "35px auto 50px auto" }}>회원가입</h2>
          <SignUpInput type="text" placeholder="ID" ref={signUpIdRef} />
          <SignUpInput
            type="text"
            placeholder="Nick name"
            ref={signUpNameRef}
          />
          <SignUpInput type="password" placeholder="PW" ref={signUpPwRef} />
          <SignUpInput
            type="password"
            placeholder="PW check"
            ref={signUpPwCheckRef}
          />
          <small ref={signUpAlertRef} />
          <SignUpButton>회원가입</SignUpButton>
        </ColumnFlexDiv>
      </form>
    </SignUpModalBox>
  );
}

const SignUpModalBox = styled.div`
  width: 630px;
  height: 630px;
`;

const SignUpInput = styled.input`
  width: 513px;
  height: 64px;
  margin: auto auto 25px auto;
  border: 0.5px solid #a5a5a5;
  font-size: 15px;
  border-radius: 4px;
`;
const SignUpButton = styled.button`
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

export default SignUpForm;
