import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import SupplementAddBtn from "../components/layout/button/SupplementAddBtn";
import FriendsListBtn from "../components/layout/button/FriendsListBtn";
import { ColumnFlexDiv, PageSection} from "../style/styled";
import MyDrugSection from "../components/purpose/mydrug/MyDrugSection";

import styled from "styled-components";

import CalenderSection from "../components/purpose/calender/CalenderSection"
import Modals from "../components/layout/modal/modalList";

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
        <Route path="search" element={Modals.Search} />
        <Route path="*" element={Modals.NotFound} />
      </Routes>
    </PageSection>
  );
};

const CalenderAndDrug = styled(ColumnFlexDiv)`
  height: 90%;
  justify-content: space-between;
`;

export default RecordingPage;
