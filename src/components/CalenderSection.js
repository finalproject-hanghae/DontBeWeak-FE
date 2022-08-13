import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={"2x"}
          color={"orange"}
          onClick={() => {}}
        />
        <div className="Week">날짜</div>
        <FontAwesomeIcon icon={faArrowRight} size={"2x"} color={"orange"} />
      </WeekBox>

      <DateBox>
        {week.map((day, index) => {
          return <DateViewCard day={day} myWeek={myWeek} />;

        })}
      </DateBox>
    </CalenderCard>
  );
};

const CalenderCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeekBox = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const DateBox = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 20vh;
  border: 1px solid #a5a5a5;
  border-radius: 10px;
  display: flex;
`;

const DateView = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 20vh;
  border-right: 1px solid #a5a5a5;
  &:last-child {
    border-right: none;
  }
`;

export default CalenderSection;
