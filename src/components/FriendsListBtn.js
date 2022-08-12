import React, { useState } from "react";
import styled from "styled-components";

import FriendsListModal from "../components/modals/FriendsListModal";
import AddBtn from "../images/friend_add_icon.png";

function FriendsListBtn() {
  const [friends, setFriends] = useState(false);

  const openFriendsList = () => {
    setFriends(true);
  };

  return (
    <>
      <BtnWrap>
        <img src={AddBtn} alt="friend_add_btn" onClick={openFriendsList} />
      </BtnWrap>
      {friends ? <FriendsListModal setFriends={setFriends} /> : null}
    </>
  );
}

const BtnWrap = styled.div`
  width: 84px;
  height: 84px;
  padding: 8px;
  text-align: center;
  position: absolute;
  right: 20px;
  bottom: 120px;
  &:hover {
    cursor: pointer;
  }
`;

export default FriendsListBtn;
