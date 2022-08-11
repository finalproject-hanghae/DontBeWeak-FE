import "./App.css";
import React from "react";

import { Routes, Route } from "react-router-dom";

import styled from "styled-components";

import { RowFlexDiv } from "./styled";

import WebSection from "./pages/WebSection";
import MainSection from "./pages/MainSection";

function App() {
  return (
    <AppPage className="App">
      <LayoutBox>
        <WebSection />
        <MainSection />
      </LayoutBox>
    </AppPage>
  );
}

const AppPage = styled(RowFlexDiv)`
  width: 100vw;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
const LayoutBox = styled.div`
  width: 1440px;
  
`;

export default App;
