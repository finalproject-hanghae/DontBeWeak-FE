import React from "react";
import styled from "styled-components";

import FriendsListModal from "../buttonpop/FriendsListModal";
import AddBtn from "../../../assets/images/friend_add_icon.png";
import useHandleClick from "../../../hooks/useHandleClick";

const FriendsListBtn = () => {

  const [friends,showFriendsList,friendListModalRef] = useHandleClick();
  // const [friends, setFriends] = React.useState(false);
  // const friendListModalRef = React.useRef();

  // const showFriendsList = () => {
  //   setFriends(true);
  // };

  // React.useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (
  //       friendListModalRef.current &&
  //       !friendListModalRef.current.contains(e.target)
  //     ) {
  //       setFriends(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [friendListModalRef]);

  return (
    <>
      <BtnWrap>
        <img src={AddBtn} alt="friend_add_btn" onClick={showFriendsList} />
      </BtnWrap>
      {friends ? (
        <FriendsListModal ref={friendListModalRef} />
      ) : null}
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
