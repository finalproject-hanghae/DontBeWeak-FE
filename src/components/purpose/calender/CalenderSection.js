import React, { useState } from "react";
import styled from "styled-components";
import { drugApi } from "../../../api/basicAPI";

import arrowIcon from "../../../assets/images/icons/arrow.png";
import { useDrugPageData } from "../../../hooks/useDrugPageData";
import { useFindWeek } from "../../../hooks/useFindWeek";

import { ColumnFlexDiv, RowFlexDiv } from "../../../style/styled";
import DateViewCard from "./DateViewCard";

const CalenderSection = () => {
  const [week, setWeek] = React.useState(0);
  let [startDate, endDate] = useFindWeek(week);
  console.log("startDate", startDate);
  console.log("endDate", endDate);

  const myWeek = useDrugPageData(startDate, endDate);

  const weekName = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <CalenderCard>
      <WeekBox>
        <img
          src={arrowIcon}
          alt="left_arrow_icon"
          onClick={() => setWeek((prev) => prev - 1)}
        />
        <h2>
          {startDate} ~ {endDate}
        </h2>
        <img
          src={arrowIcon}
          alt="right_arrow_icon"
          onClick={() => setWeek((prev) => prev + 1)}
        />
      </WeekBox>

      <DateBox>
        {weekName.map((day, index, array) => {
          return (
            <DateViewCard
              key={"DateViewCard" + index}
              day={day}
              array={array}
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
  box-shadow: 10px 10px 0px #ffc58e;
`;

export default CalenderSection;
