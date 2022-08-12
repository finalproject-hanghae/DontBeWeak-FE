import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import DateViewCard from "./DateViewCard";
import { RowFlexDiv } from "../../style/styled";

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
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={"2x"}
          color={"orange"}
          onClick={() => {}}
        />
        <span>2022년 8월8일~14일</span>
        <FontAwesomeIcon
          icon={faArrowRight}
          size={"2x"}
          color={"orange"}
          onClick={() => {}}
        />
      </WeekBox>

      <DateBox>
        {week.map((day, index) => {
          return <DateViewCard key={"DateViewCard"+index} day={day} myWeek={myWeek} />;
        })}
      </DateBox>
    </CalenderCard>
  );
};

const CalenderCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeekBox = styled(RowFlexDiv)`
  justify-content: space-between;
  align-items: center;
  margin-bottom:20px;
  span{
    font-size:1.5rem;
    font-weight:bold;
  }
`;

const DateBox = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 20vh;
  border: 1px solid #a5a5a5;
  border-radius: 10px;
  display: flex;
`;

export default CalenderSection;
