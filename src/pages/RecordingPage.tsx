import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import MyDrugSection from "../components/purpose/mydrug/MyDrugSection";
import SearchDrugBtn from "../components/layout/button/SearchDrugBtn";
import CalenderSection from "../components/purpose/calender/CalenderSection";
import FriendsListBtn from "../components/layout/button/FriendsListBtn";
import Modals from "../components/layout/modal/modalList";
import styled from "styled-components";
import { ColumnFlexDiv, PageSection } from "../style/styled";

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
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  margin: 0px auto;
  text-align: center;
`;
export default RecordingPage;
