import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { devices } from "../device";
import { ColumnFlexDiv } from "../styled";
import LogInModal from "../components/modals/LogInModal";
import SignUpModal from "../components/modals/SignUpModal";
import NotFoundModal from "../components/modals/NotFoundModal";

const StartingPage = () => {
  return (
    <StartingSection>
      여기ㅏ는 스타팅 페이지입니다.
      <Routes>
        <Route index />
        <Route path="login" element={<LogInModal />} />
        <Route path="signup" element={<SignUpModal />} />
        <Route path="*" element={<NotFoundModal />} />
      </Routes>
    </StartingSection>
  );
};
const StartingSection = styled(ColumnFlexDiv)`
  
  @media ${devices.tablet} {
    width: 100%;
  }
`;

export default StartingPage;
