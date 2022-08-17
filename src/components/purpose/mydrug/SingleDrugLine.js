import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import styled from "styled-components";
import { devices } from "../../../device";
import { RowFlexDiv } from "../../../style/styled";

const SingleDrugLine = ({ val }) => {
  const [eatDone, setEatDone] = React.useState(val.done);
  return (
    <SingleDrugLineBox style={{ backgroundColor: eatDone ? "none" : "none" }}>
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
      <label
        htmlFor="didEat"
        onClick={() => {
          let sessionStorage = window.sessionStorage;
          axios.patch("http://3.37.88.75/schedule/week", {
              headers: {
                authorization: sessionStorage.getItem("authorization"),
              },
              data: { datetime: new Date()+"", done: true },
            })
            .then((res) => setEatDone(true));
        }}
      >
        {eatDone ? (
          <FontAwesomeIcon icon={faCheck} size={"1x"} color={"#f98532"} />
        ) : null}
        <input
          id="didEat"
          type={"checkbox"}
          defaultChecked={eatDone ? true : false}
          disabled={eatDone ? true : false}
        />
      </label>
    </SingleDrugLineBox>
  );
};

const ColorAndDrugName = styled(RowFlexDiv)`
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
`;
const SingleDrugLineBox = styled(RowFlexDiv)`
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 5px 0px;
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
    min-width: 240px;
  }
`;

export default SingleDrugLine;
