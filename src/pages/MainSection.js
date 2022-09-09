import { Routes, Route } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv } from "../style/styled";
import { devices } from "../device";
import CatPage from "./CatPage";
import HeaderNavBar from "../components/layout/HeaderNavBar";
import RecordingPage from "./RecordingPage";
import StartingPage from "./StartingPage";
import FeedbackPop from "../components/layout/buttonpop/FeedbackPop";

const MainSection = () => {
  
  return (
    <>
      <HeaderNavBar />
      <MainCard>
        <Routes>
          <Route path="/*" element={<StartingPage />} />
          <Route path="/record/:username/*" element={<RecordingPage />} />
          <Route path="/cat/:username" element={<CatPage />} />
        </Routes>
        <FeedbackPop />
      </MainCard>
    </>
  );
};

const MainCard = styled(ColumnFlexDiv)`
  width: 51.5%;
  height: 100%;
  background-color: #FCDCBE;
  @media ${devices.tablet} {
    width: 100%;
    min-width: inherit;
    height: 100vh;
  }
  @media ${devices.mobileL} {
    width: 100%;
    min-width: 280px;
  }
`;

export default MainSection;
