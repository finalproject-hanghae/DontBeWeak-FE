import React from "react";

import { RowFlexDiv } from "../../../../style/styled";
import CatItem from "./CatItem";
import useCatItemList from "../../../../hooks/useCatItemList";
import styled from "styled-components";

const CatItemList = () => {
  const list = useCatItemList();

  return (
    <ItemsBox>
      {list &&
        list.map((val, idx) => {
          return <CatItem val={val} />;
        })}
    </ItemsBox>
  );
};
const ItemsBox = styled(RowFlexDiv)`
  width: 100%;
  height: 85%;
  justify-content: space-between;
  align-items: center;
`;

export default CatItemList;
