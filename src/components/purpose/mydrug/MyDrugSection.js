import React from "react";
import styled from "styled-components";
import { devices } from "../../../device";
import useShowMeTheDrug from "../../../hooks/useShowMeTheDrug";
import { ColumnFlexDiv } from "../../../style/styled";
import SingleDrugLine from "./SingleDrugLine";

const MyDrugSection = () => {
  
  const myDrug = useShowMeTheDrug();

  return (
    <MyDrugCard>
      {myDrug.map((val, idx) => {
        return <SingleDrugLine key={"SingleDrugLine" + idx} val={val} />;
      })}
    </MyDrugCard>
  );
};

const MyDrugCard = styled(ColumnFlexDiv)`
  height: 352px;
  border-radius: 10px;
  border: solid 1px #a5a5a5;
  padding: 10px 50px;

  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f98532;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  @media ${devices.mobileL} {
    padding: 0px;
    height: 190px;
  }
`;

export default MyDrugSection;
