import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageSection } from "../style/styled";
import LogInModal from "../components/modals/LogInModal";
import SignUpModal from "../components/modals/SignUpModal";
import NotFoundModal from "../components/modals/NotFoundModal";

const StartingPage = () => {
  return (
    <PageSection>
      여기ㅏ는 스타팅 페이지입니다.
      <Routes>
        <Route index element={null}/>
        <Route path="login" element={<LogInModal />} />
        <Route path="signup" element={<SignUpModal />} />
        <Route path="*" element={<NotFoundModal />} />
      </Routes>
    </PageSection>
  );
};


export default StartingPage;

