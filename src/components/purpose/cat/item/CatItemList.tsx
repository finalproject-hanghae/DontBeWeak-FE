import React from "react";

import { RowFlexDiv } from "../../../../style/styled";
import CatItem from "./CatItem";
import useCatItemList from "../../../../hooks/useCatItemList";
import styled from "styled-components";

const CatItemList = () => {
  const list = useCatItemList();
  // const list = [
  //   { itemImg: "x", itemName: "츄르", itemPoint: 1 },
  //   { itemImg: "x", itemName: "털실", itemPoint: 2 },
  //   { itemImg: "x", itemName: "황태", itemPoint: 4 },
  //   { itemImg: "x", itemName: "레이저", itemPoint: 5 },
  // ];

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
