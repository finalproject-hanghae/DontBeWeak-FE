import React from "react";
import styled from "styled-components";
import { devices } from "../../device";
import { ColumnFlexDiv } from "../../style/styled";
import one from "../../assets/images/icons/num_1.png";
import two from "../../assets/images/icons/num_2.png";

const StartingSubStory = () => {
  return (
    <Sub>
      <div>
        <img src={one} alt="1st" />
        <span>
          영양제를 제때 챙겨먹으면 경험치가 오르면서 아픈 고양이를 회복시킬 수
          있어요
        </span>
      </div>
      <div>
        <img src={two} alt="2nd" />
        <span>
          경험치는 고양이를 성장시키는 것 뿐 아니라 고양이에게 줄 아이템도
          구매할 수 있어요
        </span>
      </div>
    </Sub>
  );
};

const Sub = styled(ColumnFlexDiv)`
  width: 70%;
  height: 10rem;
  font-size: 1rem;
  line-height: 1.9rem;
  margin-bottom: 1.5rem;
  @media ${devices.mobileL} {
    display: none;
  }
  div {
    width: 75%;
    height: 50%;
    display: flex;
    align-self: center;
    align-items: center;
    margin: 10px 0px;
    span {
      width: 600px;
      line-height: 1rem;
      word-break: keep-all;
      font-size: 1rem;
      @media ${devices.tablet} {
        font-size: 0.7rem;
      }
    }
  }
  img {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }
`;

export default StartingSubStory;
