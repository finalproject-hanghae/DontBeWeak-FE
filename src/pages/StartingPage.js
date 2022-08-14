import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// 스타일 관련
import { PageSection } from "../style/styled";
import styled from "styled-components";

// 컴포넌트 연결
import LogInModal from "../components/modals/LogInModal";
import SignUpModal from "../components/modals/SignUpModal";
import NotFoundModal from "../components/modals/NotFoundModal";

// 메인 이미지 연결
import MainCatImg from "../images/main_cat2.png";


const StartingPage = () => {
  const navigate = useNavigate();

  return (
    <PageSection>
      <TextBox>
        <h2>우리 아기고양이를 치료해주세요</h2>
        {/* 버튼 클릭 시 로그인 창 이동 */}
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          치료하러가기
        </button>
      </TextBox>
      <ImgBox /> {/* BackgroundImg : MainCatImg */}

      {/* Modal Route */}
      <Routes>
        <Route index element={null} />
        <Route path="login" element={<LogInModal />} />
        <Route path="signup" element={<SignUpModal />} />
        <Route path="*" element={<NotFoundModal />} />
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
