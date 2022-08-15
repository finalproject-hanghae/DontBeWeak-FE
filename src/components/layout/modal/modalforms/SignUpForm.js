import React from "react";
import { ColumnFlexDiv } from "../../../../style/styled";

function SignUpForm() {
  const signUpIdRef = React.useRef(); // Id
  const signUpNameRef = React.useRef(); // Name
  const signUpPwRef = React.useRef(); // Pw
  const signUpPwCheckRef = React.useRef(); // PwCheck
  const signUpAlertRef = React.useRef(); // 경고

  const submitToSignUp = (e) => {
    e.preventDefault();
    const username = signUpIdRef.current.value;
    const name = signUpNameRef.current.value;
    const password = signUpPwRef.current.value;
    const checkPassword = signUpPwCheckRef.current.value;

    // 공백 유효성 검사
    if (username === "") {
      signUpAlertRef.current.innerText = "아이디를 입력하세요.";
      return;
    } else if (name === "") {
      signUpAlertRef.current.innerText = "이름을 입력하세요.";
      return;
    } else if (password === "") {
      signUpAlertRef.current.innerText = "비밀번호를 입력하세요.";
      return;
    } else if (checkPassword === "") {
      signUpAlertRef.current.innerText = "비밀번호를 다시 입력하세요.";
      return;
    }

    console.log(username, name, password, checkPassword);

    // axios 요청 보낼 자리
  };

  return (
    <form onSubmit={submitToSignUp}>
      <ColumnFlexDiv>
        <h2>회원가입</h2>
        <input type="text" placeholder="ID" ref={signUpIdRef} />
        <input type="text" placeholder="User name" ref={signUpNameRef} />
        <input type="password" placeholder="PW" ref={signUpPwRef} />
        <input type="password" placeholder="PW check" ref={signUpPwCheckRef} />
        <small ref={signUpAlertRef} />
        <button>회원가입</button>
      </ColumnFlexDiv>
    </form>
  );
}

export default SignUpForm;
