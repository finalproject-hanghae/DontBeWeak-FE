import { Route, Routes, useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv, PageSection} from "../style/styled";
import CalenderSection from "../components/purpose/calender/CalenderSection"
import FriendsListBtn from "../components/layout/button/FriendsListBtn";
import Modals from "../components/layout/modal/modalList";
import MyDrugSection from "../components/purpose/mydrug/MyDrugSection";
import SearchDrugBtn from "../components/layout/button/SearchDrugBtn";

const RecordingPage = () => {
  return (
    <PageSection>
      <CalenderAndDrug className="Padding">

        <CalenderSection />
        <MyDrugSection />
      </CalenderAndDrug>


      <SearchDrugBtn />
      <FriendsListBtn />

      <Routes>
        <Route index element={null} />
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
