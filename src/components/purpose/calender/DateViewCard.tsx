import React from "react";
import styled from "styled-components";
import { ColumnFlexDiv } from "../../../style/styled";
import { devices } from "../../../device";
import { weekList } from "../../../types/weeks";

type GreetingsProps = {
  day: string | never;
  myWeek: weekList;
  array: string[];
};

const DateViewCard = ({ day, myWeek, array }: GreetingsProps) => {
  return (
    <DateView>
      <h3>{day}</h3>
      {myWeek &&
        myWeek
          .filter((value, index) => value.dayOfWeekValue === array.indexOf(day))
          .map((val, index) => {
            return (
              <div
                key={"colordiv" + index}
                style={{
                  width: "1.3rem",
                  height: "1.3rem",
                  borderRadius: "3rem",
                  backgroundColor: val.customColor,
                }}
              ></div>
            );
          })}
    </DateView>
  );
};

const DateView = styled(ColumnFlexDiv)`
  text-align: center;
  width: 100%;
  height: 11.5rem;
  border-right: 2px solid #000;
  &:last-child {
    border-right: none;
  }
  h3{
    font-size: 1.1rem;
  }
  div {
    margin: 0px auto 3px;
  }
  @media ${devices.mobileL} {
    width: 100%;
    height: 8rem;
  }
`;

export default DateViewCard;
