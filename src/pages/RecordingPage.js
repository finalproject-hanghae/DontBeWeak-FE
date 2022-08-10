import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { ColumnFlexDiv } from "../styled";

import SearchModal from "../components/modals/SearchModal";
import NotFoundModal from "../components/modals/NotFoundModal";
import styled from "styled-components";
import { devices } from "../device";
import SideFriendBar from "../components/SideFriendBar";

const RecordingPage = () => {
  const navigate = useNavigate();
  return (
    <RecordingSection>
      <div>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        

      </div>
      <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>
        <button onClick={() => navigate("search")}>영양제 등록하기 +</button>


      <SideFriendBar />

      <Routes>
        <Route index element={null} />
        <Route path="search" element={<SearchModal />} />
        <Route path="*" element={<NotFoundModal />} />
      </Routes>
    </RecordingSection>
  );
};
const RecordingSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #fff7c7;
  @media ${devices.tablet} {
    width: 100%;
  }
  button {
    display: relative;
  }
`;

export default RecordingPage;
