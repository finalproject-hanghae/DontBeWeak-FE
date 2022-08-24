import axios from "axios";
import React from "react";

import { ColumnFlexDiv, RowFlexDiv } from "../../../../style/styled";
import CatItem from "./CatItem";
import useCatItemList from "../../../../hooks/useCatItemList";

const CatItemList = () => {
  // const list = useCatItemList();
  const list = [
    { itemImg: "x", itemName: "츄르", itemPoint: 1 },
    { itemImg: "x", itemName: "털실", itemPoint: 2 },
    { itemImg: "x", itemName: "황태", itemPoint: 4 },
    { itemImg: "x", itemName: "레이저", itemPoint: 5 },
 
  ];
  return (
    <RowFlexDiv>
      {list &&
        list.map((val, idx) => {
          return <CatItem val={val} />;
        })}
    </RowFlexDiv>
  );
};

export default CatItemList;
