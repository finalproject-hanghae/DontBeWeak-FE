import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
//components
import drugIcon from "../assets/images/icons/drug.png";
import Modals from "../components/layout/modal/modalList";
import { devices } from "../device";
import { ColumnFlexDiv, DeviceDiv, PageSection } from "../style/styled";
//images
import one from "../assets/images/icons/num_1.png";
import two from "../assets/images/icons/num_2.png";
import spriteImg from "../assets/images/cats/BLKbeen_sprite.png";
import KakaoRedirect from "../components/layout/modal/modalforms/KakaoRedirect";

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
        {/* <Route path="/auth/kakao/callback" component={KakaoRedirect}></Route> */}
        <Route path="*" element={Modals.NotFound} />
      </Routes>
    </PageSection>
  );
};

// styled
const Section = styled(DeviceDiv)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 90%;
  margin: 0px auto;
  text-align: center;
  button {
    width: 16rem;
    height: 3.7rem;
    border: 0.15rem solid #000;
    border-radius: 1.8rem;
    background-color: #fabc4f;
    color: #000;
    font-size: 1.25rem;
    font-weight: 900;
    cursor: pointer;
  }
`;
const Main = styled(ColumnFlexDiv)`
  width: 100%;
  height: 24rem;
  align-items: center;
  text-align: center;
  h2 {
    font-size: 1.45rem;
    @media ${devices.mobileL} {
      font-size: 1.1rem;
    }
  }
  img {
    width: 4rem;
    height: 4rem;
    @media ${devices.mobileL} {
      width: 3rem;
      height: 3rem;
    }
  }
`;
const Sub = styled(ColumnFlexDiv)`
  width: 80%;
  height: 10rem;
  font-size: 1rem;
  line-height: 1.9rem;
  margin-left: 5.25rem;
  margin-bottom: 1.5rem;
  @media ${devices.tablet} {
    display: none;
  }
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
const Keyframes = keyframes`
  100%{
    background-position: -52.5rem;
  }
`;
const ImgSprite = styled.div`
  width: 17.5rem;
  height: 11.6rem;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${spriteImg}) left center;
  animation: ${Keyframes} 0.8s steps(3) infinite;
  @media ${devices.mobileL} {
    top: 50%;
    left: 50%;
    min-width: 280px;
  }
  @media ${devices.laptop} {
    margin-top: 5%;
    top: 50%;
    left: 50%;
    min-width: 280px;
  }
`;

export default StartingPage;
