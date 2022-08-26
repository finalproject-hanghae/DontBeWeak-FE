import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv } from "../../../../style/styled";
import CatItemCost from "./CatItemCost";

const CatItem = ({ val }) => {
  return (
    <Item>
      <Img>
        <img src={val?.itemImg} alt={val?.itemName} />
      </Img>
      <Name> {val?.itemName} </Name>
      <CatItemCost cost={val?.itemPoint} />
    </Item>
  );
};

const Item = styled(ColumnFlexDiv)`
  width: 100px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Img = styled(ColumnFlexDiv)`
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #fcdcbe;
`;
const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
`;


export default CatItem;
