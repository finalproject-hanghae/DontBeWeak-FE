import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import SearchModal from "../components/modals/SearchModal";
import NotFoundModal from "../components/modals/NotFoundModal";
import SupplementAddBtn from "../components/SupplementAddBtn";
import FriendsListBtn from "../components/FriendsListBtn";
import { ColumnFlexDiv, PageSection, RowFlexDiv } from "../style/styled";
import MyDrugSection from "./record/MyDrugSection";

import styled from "styled-components";

import CalenderSection from "./record/CalenderSection"

const RecordingPage = () => {
  const navigate = useNavigate();

  return (
    <PageSection>

      <CalenderAndDrug className="Padding">

        <CalenderSection/>        
        <MyDrugSection/>
      </CalenderAndDrug>
      
      <SupplementAddBtn />
      <FriendAddBtn />

        {/* 달력 컴포넌트 만들어서 집어넣기 */}
        <div>달력</div>
        {/* 체크박스박스 컴포넌트 만들어서 집어넣기 */}
        <MyDrugSection />
      </CalenderAndDrug>

      {/* 영양제 등록 버튼 */}
      <SupplementAddBtn />
      {/* 친구 등록 버튼 */}
      <FriendsListBtn />


      <Routes>
        <Route index element={null} />
        <Route path="search" element={<SearchModal />} />
        <Route path="*" element={<NotFoundModal />} />
      </Routes>
    </PageSection>
  );
};

const CalenderAndDrug = styled(ColumnFlexDiv)`
  height: 90%;
  justify-content: space-between;
`;

export default RecordingPage;
