import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { devices } from "../device";
import RecordingPage from "./RecordingPage";
import StartingPage from "./StartingPage";
import { ColumnFlexDiv } from "../styled";
import HeaderNavBar from "../components/HeaderNavBar";

const MainSection = () => {
  return (
    <MainCard>
      <HeaderNavBar />
      <Routes>
        <Route path="/*" element={<StartingPage />} />
        <Route path="/record/*" element={<RecordingPage />} />
      
      </Routes>
    </MainCard>
  );
};

const MainCard = styled(ColumnFlexDiv)`
  width: 50%;
  height: 100vh;
  
  @media ${devices.tablet} {
    width: 100%;
  }
`;

export default MainSection;
