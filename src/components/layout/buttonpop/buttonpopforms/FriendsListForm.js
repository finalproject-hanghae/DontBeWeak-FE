import React from "react";
import styled from "styled-components";
import { ColumnFlexDiv } from "../../../../style/styled";

function FriendsListForm() {
  const [isAddFriend, setIsAddFriend] = React.useState(false);
  const [list, setList] = React.useState(["INSOCCI"]);

  const addToFriendList = () => {
    setList((prevList) => {
      return [isAddFriend, ...prevList];
    });
    setIsAddFriend("");
  };

  const showFriendAddInput = () => {
    setIsAddFriend(true);
  };

  // const submitToFriendId = (e) => {
  //   e.preventDefault();

  // axios 요청하기

  // axios({
  //   method: "post",
  //   url: "/friend",
  //   data: {
  //     friendname: s
  //   }
  // })

  // };

  return (
    <Wrap>
      {isAddFriend ? (
        <FalseForm>
          <FriendIdInput
            // ref={friendIdRef}
            placeholder="친구 ID를 입력해주세요."
            onChange={(e) => setIsAddFriend(e.target.value)}
          />
          <FriendAddBtn type="button" onClick={addToFriendList}>
            친구추가+
          </FriendAddBtn>
        </FalseForm>
      ) : (
        <TrueForm>
          <h3>친구 목록</h3>
          <FriendAddBtn onClick={showFriendAddInput}>친구추가+</FriendAddBtn>
        </TrueForm>
      )}

      <FriendsList>
        {list.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </FriendsList>
    </Wrap>
  );
}

const Wrap = styled(ColumnFlexDiv)`
  padding: 10px 30px;
`;

const TrueForm = styled.div`
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
const FalseForm = styled.div`
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
