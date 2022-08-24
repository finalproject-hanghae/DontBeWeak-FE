import React from "react";
import styled from "styled-components";

import { RowFlexDiv } from "../../../../style/styled";

const CatItemCost = ({ cost }) => {
  return (
    <ItemCost>
      {cost &&
        Array(cost)
          .fill(0)
          .map((val, idx) => {
            return <div>🍣</div>;
          })}
    </ItemCost>
  );
};

const ItemCost = styled(RowFlexDiv)`
justify-content:center;
`

export default CatItemCost;
