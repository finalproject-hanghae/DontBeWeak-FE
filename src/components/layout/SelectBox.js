import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import styled from "styled-components";

const SelectBox = (friendList) => {
  const navigate = useNavigate();
  const list = friendList.friendList; // 친구리스트
  const user = useUserData(); // MY정보
  const [selected, setSelected] = useState("default"); // onChange에서 받아오는 Id 저장소

  //onChange 발동 !!
  const goToFriendCat = (e) => {
    setSelected(e.target.value);
  };
  // 고양이페이지 처음 로드 시 /cat/undifined 뜨는거 해결하기...ㅠ
  useEffect(() => {
    navigate("/cat/" + `${selected}`);
  }, [selected]);
  console.log(selected, "마지막");

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
