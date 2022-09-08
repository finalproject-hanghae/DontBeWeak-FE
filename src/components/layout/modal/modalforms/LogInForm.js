import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import styled from "styled-components";
import { devices } from "../../../../device";

import kakaoIcon from "../../../../assets/images/icons/kakao.png";
import naverIcon from "../../../../assets/images/icons/naver.png";

import { ColumnFlexDiv } from "../../../../style/styled";
import { LinkC } from "../../../../style/styled";
import { keepAuthDataMW } from "../../../../redux/modules/users";

import { KAKAO_AUTH_URL } from "../../../../hooks/KakaoOAuth";

const LogInForm = () => {
  const onClickKakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

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
    <LogInModalBox>
      <Wrap>
        <form onSubmit={submitToLogin}>
          <ColumnFlexDiv>
            <h2>로그인</h2>

            <LogInInput type="text" placeholder="ID" ref={logInIDRef} />
            <LogInInput type="password" placeholder="PW" ref={logInPWRef} />

            <LogInButton>로그인</LogInButton>
            <small ref={logInAlertRef}>
              아직 회원이 아니신가요?
              <SignUpLink to="/signup">회원가입</SignUpLink>
            </small>
          </ColumnFlexDiv>
        </form>

        <SnsLoginBtn onClick={onClickKakao}>
          <img src={kakaoIcon} alt="kakaotalk_icon" />
          카카오톡 로그인
        </SnsLoginBtn>
        

        {/* <NaverLogIn /> */}

        {/* <SnsLoginBtn>
          <img src={naverIcon} alt="naver_icon" />
          네이버 로그인
        </SnsLoginBtn> */}
      </Wrap>
    </LogInModalBox>
  );
};

const LogInModalBox = styled(ColumnFlexDiv)`
  width: 22rem;
  height: 30rem;
  align-items: center;
  align-content: center;
  justify-content: center;
  @media ${devices.mobileL} {
    width: 19rem;
    height: 30rem;
  }
`;
const Wrap = styled(ColumnFlexDiv)`
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.2rem;
    /* margin: 2rem 0px; */
    @media ${devices.mobileL} {
      font-size: 1.5rem;
    }
  }
  small {
    margin-top: 15px;
    font-size: 14px;
  }
  @media ${devices.mobileL} {
    font-size: 1.5rem;
  }
`;
const SignUpLink = styled(LinkC)`
  font-weight: 900;
  margin-left: 1%;
`;
const LogInInput = styled.input`
  width: 20rem;
  height: 4rem;
  margin: auto auto 20px auto;
  border: 0.5px solid #c5c5c5;
  padding: 3%;
  color: #000;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 4px;
  @media ${devices.mobileL} {
    width: 17rem;
    height: 2.5rem;
  }
`;

const LogInButton = styled.button`
  width: 20rem;
  height: 4rem;
  background: #fabc4f;
  color: #000;
  font-weight: 800;
  border: none;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  @media ${devices.mobileL} {
    width: 17rem;
    height: 2.5rem;
  }
`;

const SnsLoginBtn = styled.button`
  width: 20rem;
  height: 4rem;
  background-color: #fff;
  color: #000;
  font-weight: 800;
  margin-top: 10px;
  border: 1px solid #313131;
  font-size: 18px;
  border-radius: 4px;
  box-sizing: border-box;
  @media ${devices.mobileL} {
    width: 17rem;
    height: 2.5rem;
  }
  cursor: pointer;
  img {
    margin-right: 8px;
  }
`;

export default LogInForm;
