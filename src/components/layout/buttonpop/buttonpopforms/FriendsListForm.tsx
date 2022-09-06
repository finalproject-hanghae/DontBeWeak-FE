import React from "react";

// 스타일 관련
import styled from "styled-components";
import { ColumnFlexDiv } from "../../../../style/styled";
import {
  keepFriendDataMW,
  loadFriendDataMW,
} from "../../../../redux/modules/friends";
import {
  FriendAddBtn,
  FriendIdInput,
  FriendsList,
} from "../../../../style/friendList";
import { useNavigate, useParams } from "react-router-dom";
import { loadDrugDataMW } from "../../../../redux/modules/drugs";
import { loadWeekDataMW } from "../../../../redux/modules/weeks";
import { useFindWeek } from "../../../../hooks/useFindWeek";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

const FriendsListForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // isAddFriend가 false -> true로 변하면 친구 ID 등록창이 나타나게 함.
  const [isAddFriend, setIsAddFriend] = React.useState(false);
  const friendList = useAppSelector((state) => state.friends.friends);
  const friendname = useParams().username;

  const week = useAppSelector((state) => state.weeks.week);

  React.useEffect(() => {
    dispatch(loadFriendDataMW());
  }, [friendname]);

  const [disabled, setDisabled] = React.useState(true);
  const friendIdRef = React.useRef(null);

  const change = () => {
    if (friendIdRef.current.value !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const submitToFriendId = () => {
    const username = friendIdRef.current.value;
    try {
      dispatch(keepFriendDataMW(username));
    } catch {
      alert("친구추가에 성공했습니다.");
      setIsAddFriend(false);
    }
  };

  const ClickToReloadRecordPageData = (val) => {
    let [startDate, endDate] = useFindWeek(week);
    const params = {
      startDate: startDate.replace(".", ""),
      endDate: endDate.replace(".", ""),
    };
    navigate("/record/" + val.friendname);
    dispatch(loadDrugDataMW(val.friendname));
    dispatch(loadWeekDataMW(val.friendname, params));
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
          <FriendAddBtn type="button" onClick={submitToFriendId}>
            친구추가+
          </FriendAddBtn>
        </TrueForm>
      ) : (
        // 친구 목록 Title
        <FalseForm>
          <h3>친구 목록</h3>
          <FriendAddBtn onClick={() => setIsAddFriend(true)}>
            친구추가+
          </FriendAddBtn>
        </FalseForm>
      )}

      {/* 친구 리스트 */}
      <FriendsList>
        {friendList.map((val, idx) => {
          return (
            <p
              key={"friendListItem" + idx}
              onClick={() => {
                ClickToReloadRecordPageData(val)
              }}
            >
              {val.nickname}
            </p>
          );
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
const FalseForm = styled(TrueForm)``;
export default FriendsListForm;
