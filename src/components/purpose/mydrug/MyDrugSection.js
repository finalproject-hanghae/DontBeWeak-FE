import React from "react";
import styled from "styled-components";
import { devices } from "../../../device";
import { ColumnFlexDiv } from "../../../style/styled";
import SingleDrugLine from "./SingleDrugLine";

const MyDrugSection = () => {
  const myDrug = [
    {
      productName: "365 눈 건강 루테인dsfsdfsdfsdfsdfdsfsdf",
      customColor: "rgb(167,0,220)",
      done: true,
    },
    {
      productName: "오메가3 DHA",
      customColor: "rgb(92,0,0)",
      done: false,
    },
    {
      productName: "365 눈 건강 루테인",
      customColor: "rgb(200,200,30)",
      done: false,
    },
    {
      productName: "오메가3 DHA",
      customColor: "rgb(200,20,70)",
      done: false,
    },
    {
      productName: "365 눈 건강 루테인",
      customColor: "rgb(20,120,30)",
      done: false,
    },
    {
      productName: "오메가3 DHA",
      customColor: "rgb(3,20,70)",
      done: false,
    },
    {
      productName: "365 눈 건강 루테인",
      customColor: "rgb(0,134,30)",
      done: false,
    },
    {
      productName: "오메가3 DHA",
      customColor: "rgb(120,0,26)",
      done: false,
    },
    {
      productName: "365 눈 건강 루테인",
      customColor: "rgb(20,0,183)",
      done: true,
    },
    {
      productName: "오메가3 DHA",
      customColor: "rgb(235,0,70)",
      done: false,
    },
    {
      productName: "365 눈 건강 루테인",
      customColor: "rgb(220,0,30)",
      done: true,
    },
    {
      productName: "오메가3 DHA",
      customColor: "rgb(200,20,70)",
      done: false,
    },
    {
      productName: "365 눈 건강 루테인",
      customColor: "rgb(0,0,30)",
      done: false,
    },
    {
      productName: "오메가3 DHA",
      customColor: "rgb(200,0,70)",
      done: false,
    },
  ];

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
  border-radius:10px;
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
