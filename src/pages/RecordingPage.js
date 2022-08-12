import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import SearchModal from "../components/modals/SearchModal";
import NotFoundModal from "../components/modals/NotFoundModal";
import SideFriendBar from "../components/SideFriendBar";
import { PageSection } from "../style/styled";

const RecordingPage = () => {
  const navigate = useNavigate();
  return (
    <PageSection>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>

      <SideFriendBar />

      <Routes>
        <Route index element={null} />
        <Route path="search" element={<SearchModal />} />
        <Route path="*" element={<NotFoundModal />} />
      </Routes>
    </PageSection>
  );
};

export default RecordingPage;
