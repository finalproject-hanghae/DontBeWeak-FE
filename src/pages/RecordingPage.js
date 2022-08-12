import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import SearchModal from "../components/modals/SearchModal";
import NotFoundModal from "../components/modals/NotFoundModal";
import SideFriendBar from "../components/SideFriendBar";
import { ColumnFlexDiv, PageSection, RowFlexDiv } from "../style/styled";

import CalenderSection from "../components/CalenderSection"

const RecordingPage = () => {
  const navigate = useNavigate();
  return (
    <PageSection>
      <ColumnFlexDiv className="Padding">
        <CalenderSection/>
        
        {/* 체크박스박스 컴포넌트 만들어서 집어넣기 */}
        <div>체크박스박스</div>
      </ColumnFlexDiv>
      {/* 버튼 수정해서 집어넣기 */}
      <SideFriendBar />

      <Routes>
        <Route index element={null} />
        <Route path="search" element={<SearchModal />} />
        <Route path="*" element={<NotFoundModal />} />
      </Routes>
    </PageSection>
  );
};

export default RecordingPage;
