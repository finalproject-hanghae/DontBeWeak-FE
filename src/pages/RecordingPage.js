import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import SearchModal from "../components/modals/SearchModal";
import NotFoundModal from "../components/modals/NotFoundModal";
import SupplementAddBtn from "../components/SupplementAddBtn";
import FriendsListBtn from "../components/FriendsListBtn";
import { ColumnFlexDiv, PageSection, RowFlexDiv } from "../style/styled";
import MyDrugSection from "./record/MyDrugSection";

import styled from "styled-components";

import CalenderSection from "./record/CalenderSection";

const RecordingPage = () => {
  return (
    <PageSection>
      <CalenderAndDrug className="Padding">

        <CalenderSection />
        <MyDrugSection />
      </CalenderAndDrug>


      <SupplementAddBtn />
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
