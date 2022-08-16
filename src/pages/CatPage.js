import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Modals from "../components/layout/modal/modalList";
import { useCatPageData } from "../hooks/useCatPageData";
import { ColumnFlexDiv, PageSection, RowFlexDiv } from "../style/styled";

const CatPage = () => {
  const Data = useCatPageData();
  console.log(Data);
  
  axios
    .get("http://3.37.88.75/cat", { Data })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response.data.massage);
    });

  return (
    <PageSection>
      <FullPage>
        <ColumnFlexDiv>
          {/* 고양이가 존재하지 않으면 잘못된 접근 추후 백엔드 처리 */}
          <div>{Data.level > 0 ? Data.username : Modals.NotFound}의 고양이</div>
          <div>고양이 사진</div>
          <div>{Data.level}</div>
          <div>구매가능 아이템</div>
          <RowFlexDiv>
            <div>아이템1</div>
            <div>아이템2</div>
            <div>아이템3</div>
            <div>아이템4</div>
          </RowFlexDiv>
        </ColumnFlexDiv>
      </FullPage>
    </PageSection>
  );
};

const FullPage = styled.div`
  height: 100%;
  width: 100%;
`;

export default CatPage;
