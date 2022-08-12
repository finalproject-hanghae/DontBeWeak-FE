import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import SearchModal from "../components/modals/SearchModal";
import NotFoundModal from "../components/modals/NotFoundModal";
import SupplementAddBtn from "../components/SupplementAddBtn";
import FriendAddBtn from "../components/FriendAddBtn";
import { ColumnFlexDiv, PageSection, RowFlexDiv } from "../style/styled";

const RecordingPage = () => {
  const navigate = useNavigate();
  return (
    <PageSection>
      <ColumnFlexDiv className="Padding">
        {/* 달력 컴포넌트 만들어서 집어넣기 */}
        <div>달력</div>
        {/* 체크박스박스 컴포넌트 만들어서 집어넣기 */}
        <div>체크박스박스</div>
      </ColumnFlexDiv>

      {/* 영양제 등록 버튼 */}
      <SupplementAddBtn />
      {/* 친구 등록 버튼 */}
      <FriendAddBtn />

      <Routes>
        <Route index element={null} />
        <Route path="search" element={<SearchModal />} />
        <Route path="*" element={<NotFoundModal />} />
      </Routes>
    </PageSection>
  );
};

export default RecordingPage;
