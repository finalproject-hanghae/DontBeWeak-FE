import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv, PageSection, RowFlexDiv } from "../style/styled";
import { useCatPageData } from "../hooks/useCatPageData";
import CatItemList from "../components/purpose/cat/item/CatItemList";
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
              <option>{Data?.username}의 고양이</option>
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
  height: 90%;
  width: 100%;
  background-color: red;
`;

const CatNameAndImage = styled(ColumnFlexDiv)`
  text-align: center;
  h1 {
    line-height: 100%;
    margin: 0px;
  }
  div {
    margin: 15px;
  }
`;

const CatLevelCard = styled(RowFlexDiv)`
  width: fit-content;
  margin: 20px auto;
`;

const CatShopCard = styled(ColumnFlexDiv)`
  img {
    width: 60px;
    height: 60px;
  }
  select {
    width: 200px;
    padding: 0.8em 0.5em;
    border: 1px solid #999;
    font-family: inherit;
    background: url("arrow.jpg") no-repeat 95% 50%;
    border-radius: 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export default CatPage;
