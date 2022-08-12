import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { RowFlexDiv } from "../../style/styled";

const SingleDrugLine = ({ val }) => {
  const [eatDone, setEatDone] = React.useState(val.done);
  return (
    <SingleDrugLineBox style={{backgroundColor:eatDone ? "#FEEEF4" : "none"}}>
      <div
        style={{
          backgroundColor: val.customColor,
        }}
      />
      <span>{val.productName}</span>
      <label
        htmlFor="didEat"
        onClick={() => {
          setEatDone(true);
        }}
      >
        {eatDone ? (
          <FontAwesomeIcon icon={faCheck} size={"1x"} color={"#f98532"} />
        ) : null}
        <input
          id="didEat"
          type={"checkbox"}
          checked={eatDone ? true : false}
          disabled={eatDone ? true : false}
        />
      </label>
    </SingleDrugLineBox>
  );
};

const SingleDrugLineBox = styled(RowFlexDiv)`
  align-items: center;
  margin: 5px 0px;
  padding: 5px;
  div {
    width: 29px;
    height: 29px;
    border-radius: 100%;
    margin-right: 10px;
  }
  span {
    font-size: 20px;
    margin-right: 10px;
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;
    background-color: #fff;
    border: solid 1px #f98532;
    cursor: pointer;
  }
  input {
    display: none;
  }
`;

export default SingleDrugLine;
