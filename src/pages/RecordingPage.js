import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv, PageSection } from "../style/styled";
import CalenderSection from "../components/purpose/calender/CalenderSection";
import FriendsListBtn from "../components/layout/button/FriendsListBtn";
import Modals from "../components/layout/modal/modalList";
import MyDrugSection from "../components/purpose/mydrug/MyDrugSection";
import SearchDrugBtn from "../components/layout/button/SearchDrugBtn";

const RecordingPage = () => {
  const username = useParams().username;

  return (
    <PageSection>
      <Wrap>
        <CalenderSection />
        <MyDrugSection />
        {username == sessionStorage.getItem("username") && <SearchDrugBtn />}
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
  width: 95%;
  height: 95%;
  margin: 0 auto;
  overflow: hidden;
`;

export default RecordingPage;
