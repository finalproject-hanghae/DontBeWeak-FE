import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import styled, { keyframes } from "styled-components";
import { devices } from "../device";
import { ColumnFlexDiv, PageSection } from "../style/styled";
import Modals from "../components/layout/modal/modalList";

import drugIcon from "../assets/images/icons/drug.png";
import one from "../assets/images/icons/num_1.png";
import two from "../assets/images/icons/num_2.png";
import catImg from "../assets/images/cats/cat1.png";
import bean from "../assets/images/cats/blackbean.png";
import test2 from "../assets/images/cats/test2.png";

const StartingPage = () => {
  const authorization = useSelector((state) => state.users.authorization);
  const navigate = useNavigate();

  return (
    <PageSection>
      <Section>
        <Main>
          <img src={drugIcon} alt="drug_icon" />
          <h2>
            아기고양이를 키우면서
            <br />
            영양제도 챙겨 먹어보세요!
          </h2>
          <ImgSprite></ImgSprite>
        </Main>
        <Sub>
          <div>
            <img src={one} alt="1st" />
            <p>
              영양제를 제때 챙겨먹으면 경험치가 오르면서
              <br />
              아픈 고양이를 회복시킬 수 있어요
            </p>
          </div>
          <div>
            <img src={two} alt="2nd" />
            <p>
              경험치는 고양이를 성장시키는 것 뿐 아니라
              <br />
              고양이에게 줄 아이템도 구매할 수 있어요
            </p>
          </div>
        </Sub>
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
      </Section>

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
const Section = styled(ColumnFlexDiv)`
  width: 517px;
  height: 720px;
  margin: 0px auto;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  button {
    width: 260px;
    height: 60px;
    border: 2px solid #000;
    border-radius: 30px;
    background-color: #fabc4f;
    color: #000;
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 7%;
    /* margin: 0px 0px 10px; */
    cursor: pointer;
  }
  @media ${devices.mobileL} {
    width: fit-content;
    min-width: 280px;
  }
`;
const Keyframes = keyframes`
  100%{
    background-position: -840px;
  }
`;
const ImgSprite = styled.div`
  height: 186px;
  width: 280px;
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${test2}) left center;
  animation: ${Keyframes} 0.8s steps(3) infinite;
`;
const Main = styled(ColumnFlexDiv)`
  width: 100%;
  height: 380px;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  justify-content: center;
  h2 {
    margin-bottom: 40%;
  }
  img {
    width: 70px;
    height: 70px;
  }
`;

const Sub = styled(ColumnFlexDiv)`
  width: 100%;
  height: 150px;
  font-size: 16px;
  line-height: 24px;
  /* margin-top: 10% 10%; */
  div {
    width: 75%;
    height: 50%;
    display: flex;
    align-self: center;
    align-items: center;
  }
  img {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }
`;

export default StartingPage;
