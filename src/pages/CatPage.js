import axios from "axios";
import React from "react";
import styled from "styled-components";
import Modals from "../components/layout/modal/modalList";
import { useCatPageData } from "../hooks/useCatPageData";
import { ColumnFlexDiv, PageSection, RowFlexDiv } from "../style/styled";
import CatItemList from "../components/purpose/cat/item/CatItemList";
import CatLevelCenter from "../components/purpose/cat/level/CatLevelCenter";
import CatLevelRight from "../components/purpose/cat/level/CatLevelRight";
import CatLevelLeft from "../components/purpose/cat/level/CatLevelLeft";

const CatPage = () => {
  const Data = useCatPageData();
  console.log(Data);

  return (
    <PageSection>
      <FullPage>
        <ColumnFlexDiv>
          {/* 고양이가 존재하지 않으면 잘못된 접근 추후 백엔드 처리 */}

          {/* 고양이 주인이름과 사진표시 구역 Start */}
          <CatNameAndImage>
            <h1>{Data.level > 0 ? Data.username : Modals.NotFound}의 고양이</h1>
            <div>
              <img src={Data?.catImg} alt="" />
            </div>
          </CatNameAndImage>
          {/* 고양이 주인이름과 사진표시 구역 End */}

          {/* 고양이 레벨표시 구역 Start */}
          <CatLevelCard>
            <CatLevelLeft />
            <CatLevelCenter level={Data.level} />
            <CatLevelRight />
          </CatLevelCard>
          {/* 고양이 레벨표시 구역 End */}

          {/* 고양이 상점 표시구역 Start */}
          <CatShopCard>
            <h2>구매가능 아이템</h2>
            <CatItemList />
          </CatShopCard>
          {/* 고양이 상점 표시구역 End */}
        </ColumnFlexDiv>
      </FullPage>
    </PageSection>
  );
};

const FullPage = styled.div`
  height: 100%;
  width: 100%;
`;

const CatNameAndImage = styled(ColumnFlexDiv)`
  text-align: center;
  h1{
    line-height:100%;
    margin:0px;
  }
  div{
    margin: 15px;
  }
`;

const CatLevelCard = styled(RowFlexDiv)`
  width: fit-content;
  margin: 20px auto;
`;

const CatShopCard = styled(ColumnFlexDiv)`
  text-align: center;
  width:90%;
  margin:0px auto;
  h2{
    margin: 0px;
  }
`;

export default CatPage;
