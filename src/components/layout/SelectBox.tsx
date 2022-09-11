import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import styled from "styled-components";
import { loadCatDataMW } from "../../redux/modules/cats";
import { useAppDispatch } from "../../redux/hooks";
import { friendList } from "../../types/friends";
import { devices } from "../../device";

type GreetingsProps = {
  friendList: friendList;
};

const SelectBox = ({ friendList }: GreetingsProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useUserData(); // MY정보
  const [selected, setSelected] = React.useState<string>(""); // onChange에서 받아오는 Id 저장소

  //onChange 발동 !!
  const goToFriendCat = (e: any) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    navigate(
      "/cat/" + `${selected ? selected : sessionStorage.getItem("username")}`
    );
    dispatch(loadCatDataMW(selected));
  }, [selected]);

  return (
    <SelectWrap>
      <select defaultValue={selected} onChange={goToFriendCat}>
        <option value={user?.username}>나의 고먐미</option>
        {friendList &&
          friendList.map((val, idx) => (
            <option value={val.friendname} key={"friendListItem" + idx}>
              {val.friendname}
            </option>
          ))}
      </select>
    </SelectWrap>
  );
};

// Style
const SelectWrap = styled.div`
width:300px;
  select {
    width: 100%;
    height: 50px;
    border: 2px solid #fabc4f;
    border-radius: 4px;
    text-align: center;
    font-size: 1.2rem;
    font-family: inherit;
    background-color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    &:focus{
      outline:none;
    }
  }
  @media ${devices.mobileL} {
    width: 250px;
  }
`;

export default SelectBox;
