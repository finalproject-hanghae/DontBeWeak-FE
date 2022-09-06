import React, { useState } from "react";
import styled from "styled-components";

import arrowIcon from "../../../assets/images/icons/arrow.png";
import { useFindWeek } from "../../../hooks/useFindWeek";

import { ColumnFlexDiv, RowFlexDiv } from "../../../style/styled";
import DateViewCard from "./DateViewCard";
import { useParams } from "react-router-dom";
import { changeWeekData, loadWeekDataMW } from "../../../redux/modules/weeks";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const CalenderSection = () => {
  const dispatch = useAppDispatch();

  const [weekHandler, setWeekHandler] = React.useState(0);
  const week = useAppSelector((state) => state.weeks.week);
  let [startDate, endDate] = useFindWeek(week);

  const myWeek = useAppSelector((state) => state.weeks.weeks);

  const myname = useParams().username;

  const params = {
    startDate: startDate.replace(".", ""),
    endDate: endDate.replace(".", ""),
  };

  React.useEffect(() => {
    dispatch(loadWeekDataMW(myname, params));
  }, [weekHandler]);

  const weekName = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <CalenderCard>
      <WeekBox>
        <img
          src={arrowIcon}
          alt="left_arrow_icon"
          onClick={() => {
            setWeekHandler(weekHandler - 1);
            dispatch(changeWeekData(week-1));
          }}
        />
        <h2>
          {startDate} ~ {endDate}
        </h2>
        <img
          src={arrowIcon}
          alt="right_arrow_icon"
          onClick={() => {
            setWeekHandler(weekHandler + 1);
            dispatch(changeWeekData(week+1));
          }}
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
    font-size: 1.6rem;
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
