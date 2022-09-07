import React from "react";
import styled from "styled-components";
import point from "../../../../assets/images/cats/stamp.png";
import { RowFlexDiv } from "../../../../style/styled";

const CatItemCost = ({ cost }) => {
  return (
    <ItemCost>
      {cost &&
        Array(cost)
          .fill(0)
          .map((val, idx) => {
            return (
              <div>
                <img src={point} alt="point" />
              </div>
            );
          })}
    </ItemCost>
  );
};

const ItemCost = styled(RowFlexDiv)`
  width: 70%;
  justify-content: center;
  img {
    width: 1.25rem;
    height: 1.25rem;
    margin-left: 3%;
  }
`;

export default CatItemCost;
