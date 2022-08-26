import { Route, Routes, useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv, PageSection } from "../style/styled";
import CalenderSection from "../components/purpose/calender/CalenderSection";
import FriendsListBtn from "../components/layout/button/FriendsListBtn";
import Modals from "../components/layout/modal/modalList";
import MyDrugSection from "../components/purpose/mydrug/MyDrugSection";
import SearchDrugBtn from "../components/layout/button/SearchDrugBtn";
import { useCatPageData } from "../hooks/useCatPageData";

const RecordingPage = () => {

  const Data = useCatPageData();

  return (
    <PageSection>
      <Wrap>
        <CalenderSection />
        <MyDrugSection Data={Data} />
        <SearchDrugBtn />
        <FriendsListBtn />
      </Wrap>

      <Routes>
        <Route index element={null} />
        <Route path="*" element={Modals.NotFound} />
      </Routes>
    </PageSection>
  );
};

const Wrap = styled(ColumnFlexDiv)`
  width: 100%;
  height: 95%;
  overflow: hidden;
`;

export default RecordingPage;
