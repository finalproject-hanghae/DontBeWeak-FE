import React from "react";
import { useNavigate } from "react-router-dom";
import { ColumnFlexDiv } from "../../../../style/styled";
import axios from "axios";

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

    // axios 요청 보낼 자리
    try {
      await axios({
        method: "post",
        url: "http://3.37.88.75/user/signup",
        data: {
          username: username,
          nickname: nickname,
          password: password,
          passwordCheck: checkPassword,
        },
      }).then((response) => console.log(response));
      navigate("/login")
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }

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
  };

  return (
    <form onSubmit={submitToSignUp}>
      <ColumnFlexDiv>
        <h2>회원가입</h2>
        <input type="text" placeholder="ID" ref={signUpIdRef} />
        <input type="text" placeholder="User name" ref={signUpNicknameRef} />
        <input type="password" placeholder="PW" ref={signUpPwRef} />
        <input type="password" placeholder="PW check" ref={signUpPwCheckRef} />
        <small ref={signUpAlertRef} />
        <button>회원가입</button>
      </ColumnFlexDiv>
    </form>
  );
}

export default SignUpForm;
