import React, { useState } from "react";
import styled from "styled-components";

import arrowIcon from "../../../assets/images/icons/arrow.png";

import { ColumnFlexDiv, RowFlexDiv } from "../../../style/styled";
import DateViewCard from "./DateViewCard";

const CalenderSection = () => {
  const myWeek = [
    {
      date: "화",
      productName: "365 눈 건강 루테인",
      customColor: "rgba(100,5,30)",
      done: true,
    },
    {
      date: "화",
      productName: "오메가3 DHA",
      customColor: "rgba(6,200,70)",
      done: false,
    },
    {
      date: "수",
      productName: "365 눈 건강 루테인",
      customColor: "rgba(200,0,30)",
      done: true,
    },
    {
      date: "수",
      productName: "오메가3 DHA",
      customColor: "rgba(0,212,70)",
      done: false,
    },
    {
      date: "목",
      productName: "365 눈 건강 루테인",
      customColor: "rgba(135,0,30)",
      done: true,
    },
  ];

  const week = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <CalenderCard>
      <WeekBox>
        <img src={arrowIcon} alt="left_arrow_icon" />
        <h2>2022.08.08 ~ 08.14</h2>
        <img src={arrowIcon} alt="right_arrow_icon" />
      </WeekBox>

      <DateBox>
        {week.map((day, index) => {
          return (
            <DateViewCard
              key={"DateViewCard" + index}
              day={day}
              myWeek={myWeek}
            />
          );
        })}
      </DateBox>
    </CalenderCard>
  );
};

const CalenderCard = styled(ColumnFlexDiv)`
  width: 90%;
  height: 10rem;
  align-self: center;
  margin-bottom: 8rem;
`;

const WeekBox = styled(RowFlexDiv)`
  width: 80%;
  height: 70px;
  align-items: center;
  align-self: center;
  justify-content: center;
  h2 {
    font-size: 2rem;
    display: inline-block;
    text-align: center;
    width: 100%;
  }
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50px;
    &:hover {
      width: 3.1rem;
      height: 3.1rem;
      background-color: #fff;
      box-shadow: 2.5px 2.5px 0px #ffc58e;
      cursor: pointer;
    }
    &:first-child {
      transform: scaleX(-1);
    }
  }
`;

const DateBox = styled(RowFlexDiv)`
  margin: 0 auto;
  width: 100%;
  height: 20vh;
  border: 2px solid #000;
  box-shadow: 10px 10px 0px #ffc58e;
  border-radius: 10px;
  background-color: white;
`;

export default CalenderSection;
