import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageSection } from "../style/styled";
import Modals from "../components/layout/modal/modalList";

const StartingPage = () => {
  return (
    <PageSection>
      여기ㅏ는 스타팅 페이지입니다.
      <Routes>
        <Route index element={null} />
        <Route path="login" element={Modals.LogIn} />
        <Route path="signup" element={Modals.SignUp} />
        <Route path="*" element={null} />
      </Routes>
    </PageSection>
  );
};


export default StartingPage;
