import React from "react";
import styled from "styled-components";
import { devices } from "../../../device";
import FriendsListModal from "../buttonpop/FriendsListModal";
import useHandleClick from "../../../hooks/useHandleClick";

import AddBtn from "../../../assets/images/icons/friend_add.png";
import { switchFriendModal } from "../../../redux/modules/modals";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const FriendsListBtn = () => {
  const dispatch = useAppDispatch()
  const friends = useAppSelector((state)=>state.modals.modals.friendListModal)
  const friendListModalRef = useHandleClick(switchFriendModal);

  return (
    <>
      <BtnWrap>
        <img src={AddBtn} alt="friend_add_btn" onClick={()=>{dispatch(switchFriendModal(true))}} />
      </BtnWrap>
      {friends ? <FriendsListModal ref={friendListModalRef} /> : null}
    </>
  );
};

const BtnWrap = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  padding: 8px;
  text-align: center;
  position: absolute;
  right: 38px;
  bottom: 88px;
  &:hover {
    cursor: pointer;
  }
  @media ${devices.mobileL} {
    right: 1rem;
    bottom: 3.5rem;
    width: 2rem;
    height: 2rem;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default FriendsListBtn;
