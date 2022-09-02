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
  height: 50px;
  /* align-items: center; */
  justify-content: center;
  img {
    width: 20px;
    height: 20px;
    margin-left: 3%;
  }
`;

export default CatItemCost;
