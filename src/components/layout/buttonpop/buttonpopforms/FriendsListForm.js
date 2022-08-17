import React from "react";
import axios from "axios";

// 스타일 관련
import styled from "styled-components";
import { ColumnFlexDiv } from "../../../../style/styled";

const FriendsListForm = () => {
  // isAddFriend가 false -> true로 변하면 친구 ID 등록창이 나타나게 함.
  const [isAddFriend, setIsAddFriend] = React.useState(false);
  const [list, setList] = React.useState([]);
  const token = sessionStorage.getItem("authorization");
  const showFriendAddInput = () => {
    setIsAddFriend(true);
  };

  React.useEffect(() => {
    async function gets() {
      try {
        const res = await axios.get("http://3.37.88.75/friend", {
          headers: {
            authorization: token,
          }
        })
        setList(res.data);
        
      } catch (error) {
        console.log(error);
      }
    }
    gets();
  }, []);

  // github Issues #50 >> 'isAddFriend state 충돌현상' 일단 해결..
  const [disabled, setDisabled] = React.useState(true);
  const friendIdRef = React.useRef(null);
  const change = () => {
    if (friendIdRef.current.value !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };


 

  const submitToFriendId = async () => {
    // axios 요청하기
    await axios({
      method: "post",
      url: "http://3.37.88.75/friend",
      data: {
        friendname: friendIdRef.current.value,
      },
      headers: {
        authorization: token,
      },
    })
      .then((res) => {
        alert("친구추가에 성공하셨습니다.");
        isAddFriend(false);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrap>
      {isAddFriend ? (
        // 등록할 친구 ID 입력창
        <TrueForm>
          <FriendIdInput
            type="text"
            placeholder="친구 ID를 입력해주세요."
            ref={friendIdRef}
            onChange={change}
          />
          <FriendAddBtn
            type="button"
            onClick={() => {
              submitToFriendId();
            }}
          >
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
          return <p>{item.nickname}</p>
        })}
      </FriendsList>
    </Wrap>
  );
};

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
