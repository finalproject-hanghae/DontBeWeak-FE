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
import SignUpModal from "./components/modals/SignUpModal";
import LogInModal from "./components/modals/LogInModal";

function App() {
  return (
    <AppPage className="App">
      <WebSection />
      <Routes>
        {/* test .. */}
        <Route path="/signup" element={<SignUpModal />} />
        <Route path="/login" element={<LogInModal />} />
        {/* {test} */}

        <Route path="/record/*" element={<RecordingPage />} />
        <Route path="/" element={<StartingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppPage>
  );
}

const AppPage = styled(RowFlexDiv)`
  height: 100%;
  justify-content: space-between;
`;

export default App;
