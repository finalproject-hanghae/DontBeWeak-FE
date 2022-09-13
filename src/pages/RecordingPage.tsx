import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import MyDrugSection from "../components/purpose/mydrug/MyDrugSection";
import SearchDrugBtn from "../components/layout/button/SearchDrugBtn";
import CalenderSection from "../components/purpose/calender/CalenderSection";
import FriendsListBtn from "../components/layout/button/FriendsListBtn";
import Modals from "../components/layout/modal/modalList";
import styled from "styled-components";
import { ColumnFlexDiv, PageSection } from "../style/styled";
import { getCookie } from "../hooks/cookieController";

const RecordingPage = () => {
  const username = useParams().username;

  return (
    <PageSection>
      <Wrap>
        <CalenderSection />
        <MyDrugSection />
        {username == getCookie("username") && <SearchDrugBtn />}
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
