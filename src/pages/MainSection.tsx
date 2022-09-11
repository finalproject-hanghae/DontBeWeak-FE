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
import { useAppSelector } from "../redux/hooks";
import { ModalBg, ModalBody } from "../style/modal";
import MenuModal from "../components/layout/buttonpop/MenuModal";

const MainSection = () => {
  const isMenu = useAppSelector((state) => state.modals.modals.menubarModal);
  return (
    <MainCard>
      <HeaderNavBar />
      {isMenu && <MenuModal />}
      <Routes>
        <Route path="/*" element={<StartingPage />} />
        <Route path="/record/:username/*" element={<RecordingPage />} />
        <Route path="/cat/:username" element={<CatPage />} />
      </Routes>
      <FeedbackPop />
    </MainCard>
  );
};

const MainCard = styled(ColumnFlexDiv)`
  position: relative;
  width: 51.5%;
  min-width: 745px;
  background-color: #fff;
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
