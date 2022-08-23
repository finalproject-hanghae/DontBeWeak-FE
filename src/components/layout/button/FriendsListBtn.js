import React from "react";
import styled from "styled-components";

import FriendsListModal from "../buttonpop/FriendsListModal";
import AddBtn from "../../../assets/images/friend_add_icon.png";
import useHandleClick from "../../../hooks/useHandleClick";

const FriendsListBtn = () => {
  const [friends, setFriends, showFriendsList, friendListModalRef] = useHandleClick();

  return (
    <>
      <BtnWrap>
        <img src={AddBtn} alt="friend_add_btn" onClick={showFriendsList} />
      </BtnWrap>
      {friends ? <FriendsListModal ref={friendListModalRef} /> : null}
    </>
  );
};

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
