import React from "react";

import { RowFlexDiv } from "../../../../style/styled";
import CatItem from "./CatItem";
import useCatItemList from "../../../../hooks/useCatItemList";
import styled from "styled-components";

const CatItemList = () => {
  const itemList = useCatItemList();
  
  return (
    <ItemsBox>
      {itemList &&
        itemList.map((val, idx) => {
          return <CatItem val={val} />;
        })}
    </ItemsBox>
  );
};
export default CatItemList;

const ItemsBox = styled(RowFlexDiv)`
  width: 100%;
  height: 85%;
  justify-content: space-between;
  align-items: center;
`;


