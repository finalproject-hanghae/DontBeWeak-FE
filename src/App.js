import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import StartingPage from "./pages/StartingPage";
import WebSection from "./components/WebSection";
import NotFoundPage from "./pages/NotFoundPage";
import RecordingPage from "./pages/RecordingPage";
import { RowFlexDiv } from "./styled";
import styled from "styled-components";
import { devices } from "./device";
import SearchDrug from "./components/SearchDrug";
import NotFoundModal from "./components/modals/NotFoundModal";

function App() {
  return (
    <AppPage className="App">
      <WebSection />
      <Routes>
        <Route path="/record/*" element={<RecordingPage />} />
        <Route path="/" element={<StartingPage />} />
        <Route path="*" element={<NotFoundModal />} />
      </Routes>
    </AppPage>
  );
}

const AppPage = styled(RowFlexDiv)`
  height: 100%;
  justify-content: space-between;
`;

export default App;
