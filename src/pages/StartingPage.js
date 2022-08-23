import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { PageSection } from "../style/styled";
import Modals from "../components/layout/modal/modalList";
import styled from "styled-components";
import MainCatImg from "../assets/images/main_cat2.png";

const StartingPage = () => {
  const authorization = useSelector((state) => state.users.authorization);
  const navigate = useNavigate();

  return (
    <PageSection>
      <TextBox>
        <h2>
          아기고양이를 키우면서
          <br />
          영양제도 챙겨 먹어보세요!
        </h2>

        {/* (상태 분기 처리) 로그아웃 : /login , 로그인 : /record/ */}
        {!authorization ? (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            영양제 기록하기
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/record/:username/");
            }}
          >
            영양제 기록하기
          </button>
        )}
      </TextBox>

      <ImgBox /> {/* 고양이 이미지: background-img 속성 */}

      {/* Modal Route */}
      <Routes>
        <Route index element={null} />
        <Route path="login" element={Modals.LogIn} />
        <Route path="signup" element={Modals.SignUp} />
        <Route path="*" element={Modals.NotFound} />
      </Routes>
    </PageSection>
  );
};

// styled-component 적용
const TextBox = styled.div`
  width: 490px;
  overflow: hidden;
  margin: 0px auto;
  text-align: center;
  h2 {
    font-size: 2rem;
    margin-bottom: 10%;
  }
  button {
    width: 266px;
    height: 65px;
    border: none;
    border-radius: 30px;
    background-color: #f98532;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;
const ImgBox = styled.div`
  width: 548px;
  height: 50%;
  margin: 0 auto;
  background: url(${MainCatImg}) no-repeat 100%;
  background-position: center;
  img {
    width: 377px;
    height: 196px;
  }
`;

export default StartingPage;
