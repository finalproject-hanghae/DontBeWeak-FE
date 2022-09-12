import React from "react";
import { Routes, Route} from "react-router-dom";
import styled from "styled-components";
//components

import Modals from "../components/layout/modal/modalList";
import { PageSection } from "../style/styled";
import { DeviceDiv } from "../style/styled";
//images

import KakaoRedirect from "../auth/KakaoRedirect";
import StartingSubStory from "../components/describe/StartingSubStory";
import StartingBtn from "../components/layout/button/StartingBtn";
import StartingMainStory from "../components/describe/StartingMainStory";

const StartingPage = () => {
  return (
    <PageSection>
      <Section>
        <StartingMainStory/>

        <StartingSubStory />
        {/* (상태 분기 처리) 로그아웃 : /login , 로그인 : /record/ */}
        <StartingBtn />
      </Section>
      {/* Modal Route */}
      <Routes>
        <Route index element={null} />
        <Route path="login" element={Modals.LogIn} />
        <Route path="signup" element={Modals.SignUp} />
        <Route path="/auth/kakao/callback" element={<KakaoRedirect />} />
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


export default StartingPage;
