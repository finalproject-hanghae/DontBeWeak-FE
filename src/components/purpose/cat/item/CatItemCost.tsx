import React from "react";
import styled from "styled-components";
import point from "../../../../assets/images/cats/stamp.png";
import { RowFlexDiv } from "../../../../style/styled";
import { catItem } from "../../../../types/cats";
import { devices } from "../../../../device";

type GreetingsProps = {
  cost: catItem["itemPoint"];
};

const CatItemCost = ({ cost }: GreetingsProps) => {
  return (
    <ItemCost>
      {cost &&
        Array(cost)
          .fill(0)
          .map((val, idx) => {
            return (
              <div key={"itemCost" + idx}>
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
  @media ${devices.mobileL} {
    width: 2.5rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
`;

export default CatItemCost;
