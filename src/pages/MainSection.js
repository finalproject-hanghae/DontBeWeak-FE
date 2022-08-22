import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { devices } from "../device";
import RecordingPage from "./RecordingPage";
import StartingPage from "./StartingPage";
import AboutPage from "./AboutPage";
import { ColumnFlexDiv } from "../style/styled";
import HeaderNavBar from "../components/layout/HeaderNavBar";
import CatPage from "./CatPage";

const MainSection = () => {
  return (
    <MainCard>
      <HeaderNavBar />
      <Routes>
        <Route path="/*" element={<StartingPage />} />
        <Route path="/about" element={<AboutPage />} />
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