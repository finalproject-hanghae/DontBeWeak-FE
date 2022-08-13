import React from "react";
import styled from "styled-components";
import { ColumnFlexDiv } from "../../style/styled";

function FriendsListForm() {
  const friendIdRef = React.useRef(null);

  const friendIdChange = () => {
    if (friendIdRef.current.value !== "") {
    }
  };
  console.log(friendIdRef.current);
  
  const [isAddFriend, setIsAddFriend] = React.useState(false);

  const showFriendAddInput = () => {
    setIsAddFriend(true);
  };

  return (
    <Wrap>
      {isAddFriend ? (
        <False>
          <FriendIdInput
            placeholder="친구 ID를 입력해주세요."
            ref={friendIdRef}
            onChange={friendIdChange}
          />
          <FriendAddBtn>친구추가+</FriendAddBtn>
        </False>
      ) : (
        <True>
          <h3>친구 목록</h3>
          <FriendAddBtn onClick={showFriendAddInput}>친구추가+</FriendAddBtn>
        </True>
      )}

      <FriendsList>
        <p>김철수</p>
        <p>정종성</p>
        <p>박명수</p>
        <p>김철수</p>
        <p>이민수</p>
        <p>박명수</p>
        <p>김철수</p>
        <p>이민수</p>
        <p>박명수</p>
        <p>김철수</p>
        <p>이민수</p>
        <p>박명수</p>
      </FriendsList>
    </Wrap>
  );
}

const Wrap = styled(ColumnFlexDiv)`
  padding: 10px 30px;
`;

const True = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #a5a5a5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* display: none; */
  button {
    cursor: pointer;
  }
`;
const False = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #a5a5a5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* display: none; */
  button {
    background-color: #f98532;
    border: none;
    color: #fff;
    cursor: pointer;
  }
`;

const FriendIdInput = styled.input`
  width: 325px;
  height: 37px;
  border: 0.5px solid #282828;
  border-radius: 5px;
  padding-left: 10px;
  color: #9a9a9a;
`;

const FriendAddBtn = styled.button`
  width: 111px;
  height: 34px;
  background-color: transparent;
  border: 1px solid #a5a5a5;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 800;
`;

const FriendsList = styled(ColumnFlexDiv)`
  width: 100%;
  height: 150px;
  padding: 1%;
  font-size: 1rem;
  line-height: 10%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f98532;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
`;

export default FriendsListForm;
