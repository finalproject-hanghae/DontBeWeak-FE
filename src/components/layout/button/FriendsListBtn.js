import React from "react";
import styled from "styled-components";

import FriendsListModal from "../buttonpop/FriendsListModal";
import useHandleClick from "../../../hooks/useHandleClick";

import AddBtn from "../../../assets/images/icons/friend_add.png";

const FriendsListBtn = () => {
  const [friends, setFriends, showModal, friendListModalRef] = useHandleClick();

  return (
    <>
      <BtnWrap>
        <img src={AddBtn} alt="friend_add_btn" onClick={showModal} />
      </BtnWrap>
      {friends ? <FriendsListModal ref={friendListModalRef} /> : null}
    </>
  );
};

const BtnWrap = styled.div`
  width: 61px;
  height: 61px;
  padding: 8px;
  text-align: center;
  position: absolute;
  right: 38px;
  bottom: 88px;
  &:hover {
    cursor: pointer;
  }
`;

export default FriendsListBtn;
