import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { devices } from "../../../device";
import { drugApi } from "../../../api/drugApi";
import { loadDrugDataMW } from "../../../redux/modules/drugs";
import { RowFlexDiv } from "../../../style/styled";
import { loadWeekDataMW } from "../../../redux/modules/weeks";
import { useFindWeek } from "../../../hooks/useFindWeek";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { drug } from "../../../types/drugs";

type GreetingsProps = {
  val: drug;
  idx: number;
};

const SingleDrugLine = ({ val, idx }: GreetingsProps) => {
  const username = useParams().username;
  const dispatch = useAppDispatch();
  const week = useAppSelector((state) => state.weeks.week);
  let [startDate, endDate] = useFindWeek(week);
  const params = {
    startDate: startDate.replace(".", ""),
    endDate: endDate.replace(".", ""),
  };

  const clickToCheckDrug = () => {
    var tmpDate = new Date();
    let offset = tmpDate.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌

    const data:drug = {
      productName: val.productName,
      usedAt: new Date(tmpDate.getTime() - offset).toISOString(),
      done: true,
    };
    drugApi.apiDrugCheck(data).then((res) => {
      dispatch(loadDrugDataMW(username));
      dispatch(loadWeekDataMW(username, params));
    });
  };

  return (
    <SingleDrugLineBox
      style={{
        backgroundColor: val.done ? "none" : "none",
        width: "45%",
        fontSize: "0.8rem",
      }}
    >
      <ColorAndDrugName>
        <div
          style={{
            backgroundColor: val.customColor,
          }}
        />
        <span>
          {val.productName.length > 13
            ? val.productName.substring(0, 11) + "..."
            : val.productName}
        </span>
      </ColorAndDrugName>
      {username == sessionStorage.getItem("username") && (
        <label htmlFor={"didEat" + idx}>
          {val.done ? (
            <FontAwesomeIcon icon={faCheck} size={"1x"} color={"#f98532"} />
          ) : null}
          <input
            id={"didEat" + idx}
            type={"checkbox"}
            defaultChecked={val.done ? true : false}
            disabled={val.done ? true : false}
            onClick={clickToCheckDrug}
          />
        </label>
      )}
    </SingleDrugLineBox>
  );
};

const ColorAndDrugName = styled(RowFlexDiv)`
  div {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    margin-right: 10px;
  }
  span {
    font-size: 1rem;
  }
`;
const SingleDrugLineBox = styled(RowFlexDiv)`
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 5px;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: solid 1px #f98532;
    border-radius: 4px;
    cursor: pointer;
  }
  input {
    display: none;
  }
  @media ${devices.mobileL} {
    width: 240px;
  }
`;

export default SingleDrugLine;