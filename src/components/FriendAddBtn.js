import React from "react";
import styled from "styled-components";

import AddBtn from "../images/friend_add_icon.png";


function FriendAddBtn() {
  return (
    <BtnWrap>
      <img src={AddBtn} alt='friend_add_btn' />
    </BtnWrap>
  );
}

const BtnWrap = styled.div`
  width: 84px;
  height: 84px;
  padding: 8px;
  text-align: center;
  position: absolute;
  right:20px;
  bottom: 120px;
  &:hover{
    cursor: pointer;
  }
`;

export default FriendAddBtn; 