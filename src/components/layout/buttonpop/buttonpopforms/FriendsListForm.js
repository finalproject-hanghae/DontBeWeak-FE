import React from "react";

// 스타일 관련
import styled from "styled-components";
import { ColumnFlexDiv } from "../../../../style/styled";

function FriendsListForm() {
  // isAddFriend가 false -> true로 변하면 친구 ID 등록창이 나타나게 함.
  const [isAddFriend, setIsAddFriend] = React.useState(false);
  const [list, setList] = React.useState(["INSOCCI"]);

  // 기존 친구 리스트에 새 친구를 추가해주는 함수
  const addToFriendList = () => {
    setList((prevList) => {
      return [isAddFriend, ...prevList];
    });
    setIsAddFriend("");
  };

  // isAddFriend가 true로 변하게 해주는 함수
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
      // 등록할 친구 ID 입력창
        <TrueForm>
          <FriendIdInput
            placeholder="친구 ID를 입력해주세요."
            onChange={(e) => setIsAddFriend(e.target.value)}
          />
          <FriendAddBtn type="button" onClick={addToFriendList}>
            친구추가+
          </FriendAddBtn>
        </TrueForm>
      ) : (
      // 친구 목록 Title
        <FalseForm>
          <h3>친구 목록</h3>
          <FriendAddBtn onClick={showFriendAddInput}>친구추가+</FriendAddBtn>
        </FalseForm>
      )}

    {/* 친구 리스트 */}
      <FriendsList>
        {list.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </FriendsList>
    </Wrap>
  );
}


// styled-component 적용

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
`;
const FalseForm = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #a5a5a5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
const FriendIdInput = styled.input`
  width: 325px;
  height: 37px;
  border: 0.5px solid #282828;
  border-radius: 5px;
  padding-left: 10px;
  color: #9a9a9a;
  outline: none;
`;
const FriendAddBtn = styled.button`
  width: 111px;
  height: 34px;
  background-color: transparent;
  border: 1px solid #a5a5a5;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 800;
  &:hover {
    background-color: #f98532;
    border: none;
    color: #fff;
    cursor: pointer;
  }
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
