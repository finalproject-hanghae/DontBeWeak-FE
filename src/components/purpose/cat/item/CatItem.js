import React from "react";
import styled from "styled-components";
import { ColumnFlexDiv } from "../../../../style/styled";
import CatItemCost from "./CatItemCost";

const CatItem = ({ val }) => {
  return (
    <CatItemBox>
      <img src={val?.itemImg} />
      <h3>{val?.itemName}</h3>
      <CatItemCost cost={val?.itemPoint}/>
    </CatItemBox>
  );
};

const CatItemBox = styled(ColumnFlexDiv)`
  width: 124px;
  margin: 15px auto;

  img{
    width: 124px;
    height: 124px;
    aspect-ratio:1/1;
  }
`;

export default CatItem;
