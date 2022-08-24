import { Routes, Route } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv } from "../style/styled";
import { devices } from "../device";
import CatPage from "./CatPage";
import HeaderNavBar from "../components/layout/HeaderNavBar";
import RecordingPage from "./RecordingPage";
import StartingPage from "./StartingPage";

const MainSection = () => {
  return (
    <MainCard>
      <HeaderNavBar />
      <Routes>
        <Route path="/*" element={<StartingPage />} />
        <Route path="/record/:username/*" element={<RecordingPage />} />
        <Route path="/cat/:username" element={<CatPage />} />
      </Routes>
    </MainCard>
  );
};

const MainCard = styled(ColumnFlexDiv)`
  width: 51.5%;
  min-width:745px;
  background-color: #fff;
  @media ${devices.tablet} {
    width: 100%;
    min-width:inherit;
  }
  @media ${devices.mobileL} {
    width: 100%;
    min-width:280px;
  }
`;

export default MainSection;