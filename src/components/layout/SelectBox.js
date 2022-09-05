import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import styled from "styled-components";
import { useSomeCatSatus } from "../../hooks/useSomeCatSatus";
import { useDispatch } from "react-redux";
import { loadCatDataMW } from "../../redux/modules/cats";

const SelectBox = (friendList) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = friendList.friendList; // 친구리스트
  const user = useUserData(); // MY정보
  const [selected, setSelected] = useState(); // onChange에서 받아오는 Id 저장소

  //onChange 발동 !!
  const goToFriendCat = (e) => {
    setSelected(e.target.value);
  };
  // 이슈)) 고양이페이지 처음 로드 시 /cat/undifined 뜨는 것 , 친구 고양이네 이동해도 고양이상태는 그대로임.
  // 1번 9.5. 해결
  // 1. 최초 로드시에는 selected 값이 undefined기 때문에 일어나는 현상입니다. 초기값 빈괄호()
  // -> 초기값으로 넣어줘도 되지만 삼항연산자 이용했습니다.
  // 2번 방향
  // 2. navigate는 랜더링을 발생시키지 않습니다. 하지만 selected가 바뀌는군요.
  // -> selected에 의해 navigate 뿐만 아니라 고양이 데이터를 새로 불러오는 방향이 좋을 것 같습니다.
  // 현재는 고양이 데이터가 useSomeCatSatus라는 커스텀 훅에 묶여있습니다.
  // 새로운 리덕스에 도전하기 어려우신 것 같습니다.
  // cats module 만들었으니 참고해주세요.

  useEffect(() => {
    navigate(
      "/cat/" + `${selected ? selected : sessionStorage.getItem("username")}`
    );
    dispatch(loadCatDataMW(selected))
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
  height: 30%;
  select {
    background-color: yellow;
    width: 308px;
    height: 50px;
    border: 2px solid #fabc4f;
    border-radius: 4px;
    text-align: center;
    font-size: 1.2rem;
    background-color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }
`;

export default SelectBox;
