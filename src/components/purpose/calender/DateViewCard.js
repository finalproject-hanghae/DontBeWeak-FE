import React from "react";
import styled from "styled-components";

const DateViewCard = ({ day, myWeek, array }) => {
  return (
    <DateView>
      <h3>{day}</h3>
      {myWeek &&
        myWeek
          .filter((value, index) => value.dayOfWeekValue == array.indexOf(day))
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

const DateView = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 20vh;
  border-right: 2px solid #000;
  &:last-child {
    border-right: none;
  }
  div {
    margin: 0px auto 3px;
  }
`;

export default DateViewCard;
