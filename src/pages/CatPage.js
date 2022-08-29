import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

import { loadFriendDataMW } from "../redux/modules/friends";
import { ColumnFlexDiv, LinkC, PageSection, RowFlexDiv } from "../style/styled";
import { useCatPageData } from "../hooks/useCatPageData";
import ExpBar from "../components/purpose/cat/level/ExpBar";
import CatLevelCenter from "../components/purpose/cat/level/CatLevelCenter";
import CatLevelLeft from "../components/purpose/cat/level/CatLevelLeft";
import CatLevelRight from "../components/purpose/cat/level/CatLevelRight";
import Modals from "../components/layout/modal/modalList";
import ShopBtn from "../components/layout/button/ShopBtn";

const CatPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Data = useCatPageData();

  const friendList = useSelector((state) => state.friends.friends);
  const [FriendId, setFriendId] = React.useState();

  const giveId = (e) => {
    setFriendId(e.target.value);
    console.log(FriendId, "제발");
    navigate("/cat/" + FriendId);
  };
  React.useEffect(() => {
    dispatch(loadFriendDataMW());
  }, []);
  return (
    <PageSection>
      {!Data.level && Modals.NotFound}
      <FullPage>
        <ColumnFlexDiv>
          {/* 고양이가 존재하지 않으면 잘못된 접근 추후 백엔드 처리 */}

          {/* 고양이 주인이름과 사진표시 구역 Start */}
          <CatNameAndImage>
            <select onChange={giveId} value={FriendId}>
              <option>
                {Data?.username}의 고양이　🢓
              </option>
              {friendList.map((val, idx) => {
                return (
                  <option value={val.friendname} key={"friendListItem" + idx}>
                    {val.nickname}의 고양이　🢓
                  </option>
                );
              })}
            </select>
            <div>
              <img src={Data?.catImg} alt="" />
            </div>
          </CatNameAndImage>
          {/* 고양이 주인이름과 사진표시 구역 End */}

          {/*  경험치 표시 */}
          <ExCard>
            <p>exp</p> <ExpBar />
          </ExCard>

          {/* 고양이 레벨표시 구역 Start */}
          <CatLevelCard>
            <CatLevelLeft />
            <CatLevelCenter level={Data?.level} />
            <CatLevelRight />
          </CatLevelCard>
          {/* 고양이 레벨표시 구역 End */}

          {/* 고양이 상점 표시구역 Start */}
          <ShopBtn />
          {/* 고양이 상점 표시구역 End */}
        </ColumnFlexDiv>
      </FullPage>
    </PageSection>
  );
};

const FullPage = styled.div`
  height: 80%;
  width: 100%;
`;

const CatNameAndImage = styled(ColumnFlexDiv)`
  align-items: center;
  div {
    width: 350px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 269px;
  }
  select {
    width: 308px;
    height: 50px;
    border: 2px solid #fabc4f;
    border-radius: 4px;
    text-align: center;
    font-size: 1.2rem;
    font-family: inherit;
    background-color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }
`;
const ExCard = styled(RowFlexDiv)`
  width: 50%;
  height: 50px;
  margin: auto;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 670;
    font-size: 16px;
  }
`;
const CatLevelCard = styled(RowFlexDiv)`
  width: fit-content;
  margin: 0px auto;
`;

export default CatPage;
