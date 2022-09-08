import React from "react";
import { RowFlexDiv } from "../../../../style/styled";
import CatItem from "./CatItem";
import useCatItemList from "../../../../hooks/useCatItemList";
import styled from "styled-components";
import { catItems } from "../../../../types/cats";

const CatItemList = () => {
  const itemList: catItems = useCatItemList();

  return (
    <ItemsBox>
      {itemList &&
        itemList.map((val, idx) => {
          return <CatItem val={val} />;
        })}
    </ItemsBox>
  );
});

const ItemsBox = styled(RowFlexDiv)`
  width: 100%;
  height: 80%;
`;

export default CatItemList;

