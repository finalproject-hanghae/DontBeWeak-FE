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
import { getCookie } from "../../../hooks/cookieController";

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
    startDate: startDate,
    endDate: endDate,
  };

  const clickToCheckDrug = () => {
    var tmpDate = new Date();
    let offset = tmpDate.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌

    const data: drug = {
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
        fontSize: "0.8rem",
      }}
    >
      <ColorAndDrugName>
        <div
          style={{
            backgroundColor: val.customColor,
          }}
        />
        <span>{val.productName}</span>
      </ColorAndDrugName>
      {username == getCookie("username") && (
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
    align-self: center;
    font-weight: bold;
    color: #333;
    font-size: 1rem;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media ${devices.desktop} {
    span {
      width: 300px;
    }
  }
  @media ${devices.tablet} {
    span {
      width: 120px;
    }
  }
  @media ${devices.mobileL} {
    span {
      width: 220px;
    }
  }
  @media ${devices.mobileS} {
    span {
      width: 120px;
    }
  }
`;
const SingleDrugLineBox = styled(RowFlexDiv)`
  justify-content: space-between;
  align-items: center;
  width: 45%;
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
  @media ${devices.desktop} {
    width: 90%;
    padding-right: 50px;
  }
  @media ${devices.mobileL} {
    width: 90%;
    padding-right: 30px;
  }
`;

export default SingleDrugLine;
