import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import styled from "styled-components";
import { loadCatDataMW } from "../../redux/modules/cats";
import { useAppDispatch } from "../../redux/hooks";
import { friendList } from "../../types/friends";

type GreetingsProps = {
  friendList: friendList;
};

const SelectBox = ({ friendList }: GreetingsProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const list = friendList; // 친구리스트
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
      <select value={selected} defaultValue={selected} onChange={goToFriendCat}>
        <option value={user?.username}>나의 고먐미</option>
        {list.map((val, idx) => (
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
  select {
    width: 308px;
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
  }
`;

export default SelectBox;
