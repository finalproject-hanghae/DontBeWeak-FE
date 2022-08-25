import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv, PageSection, RowFlexDiv } from "../style/styled";
import { useCatPageData } from "../hooks/useCatPageData";

import CatLevelCenter from "../components/purpose/cat/level/CatLevelCenter";
import CatLevelLeft from "../components/purpose/cat/level/CatLevelLeft";
import CatLevelRight from "../components/purpose/cat/level/CatLevelRight";
import Modals from "../components/layout/modal/modalList";
import ShopBtn from "../components/layout/button/ShopBtn";
const CatPage = () => {
  const Data = useCatPageData();
  console.log(Data);

  return (
    <PageSection>
      {!Data.level && Modals.NotFound}
      <FullPage>
        <ColumnFlexDiv>
          {/* 고양이가 존재하지 않으면 잘못된 접근 추후 백엔드 처리 */}

          {/* 고양이 주인이름과 사진표시 구역 Start */}
          <CatNameAndImage>
            <select>
              <option>{Data?.username}의 고양이　🢓</option>
              <option>{Data?.username}의 고양이</option>
            </select>
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
            <ShopBtn />
          </CatShopCard>
          {/* 고양이 상점 표시구역 End */}
        </ColumnFlexDiv>
      </FullPage>
    </PageSection>
  );
};

const FullPage = styled.div`
  height: 80%;
  width: 100%;
`;

const CatNameAndImage = styled(ColumnFlexDiv)`
  align-items: center;
  div {
    width: 350px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
  img {
    width: 269px;
  }
  select {
    width: 308px;
    height: 50px;
    border: 2px solid #fabc4f;
    border-radius: 4px;
    text-align: center;
    font-size: 1.2rem;
    font-family: inherit;
    background-color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

const CatLevelCard = styled(RowFlexDiv)`
  width: fit-content;
  margin: 0px auto;
`;

const CatShopCard = styled(ColumnFlexDiv)``;

export default CatPage;
