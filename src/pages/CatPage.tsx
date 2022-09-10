import React, { useEffect } from "react";
import { useSomeCatSatus } from "../hooks/useSomeCatSatus";
import { loadFriendDataMW } from "../redux/modules/friends";
import styled from "styled-components";
//componenets
import { ColumnFlexDiv, PageSection, RowFlexDiv } from "../style/styled";
import { devices } from "../device";
import SelectBox from "../components/layout/SelectBox";
import ExpBar from "../components/purpose/cat/level/ExpBar";
import CatLevelCenter from "../components/purpose/cat/level/CatLevelCenter";
import CatLevelLeft from "../components/purpose/cat/level/CatLevelLeft";
import CatLevelRight from "../components/purpose/cat/level/CatLevelRight";
import ShopBtn from "../components/layout/button/ShopBtn";
// img
import backgroundL from "../assets/images/cats/bg_L.png";
import backgroundM from "../assets/images/cats/bg_M.png";
import { loadCatDataMW } from "../redux/modules/cats";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { friendList } from "../types/friends";
import { cat } from "../types/cats";

const CatPage = () => {
  const dispatch = useAppDispatch();
  const username = useParams().username;
  const friendList:friendList = useAppSelector((state) => state.friends.friends);
  // const [FriendId, setFriendId] = React.useState();
  const catData:cat = useAppSelector((state) => state.cats.cats);

  useEffect(() => {
    dispatch(loadFriendDataMW());
    dispatch(loadCatDataMW(username));
  }, []);

  return (
    <PageSection>
      <Bg>
        {/* 고양이가 존재하지 않으면 잘못된 접근 추후 백엔드 처리 */}
        <CatImage>
          {/* 나의 고먐미 ~ 친구네 고먐미 셀렉창 */}
          <SelectBox friendList={friendList} />

          {/* 고먐 이미지 */}
          <div>
            <img src={catData?.catImg} alt="cat_Img" />
          </div>
        </CatImage>

        {/* 경험치 표시바 */}
        <ExCard>
          <p>exp</p> <ExpBar catData={catData} />
        </ExCard>

        {/* 고양이 레벨표시 구역 Start */}
        <CatLevelCard>
          <CatLevelLeft />
          <CatLevelCenter level={catData?.level} />
          <CatLevelRight />
        </CatLevelCard>
        {/* 고양이 레벨표시 구역 End */}

        {/* 상점 Btn */}
        {username == sessionStorage.getItem("username") && <ShopBtn />}
      </Bg>
    </PageSection>
  );
};

//Style
const Bg = styled(ColumnFlexDiv)`
  background: url(${backgroundL}) no-repeat 100%;
  background-position: bottom;
  width: 100%;
  height: 100%;
  justify-content: center;
  @media ${devices.mobileL} {
    background: url(${backgroundM}) no-repeat 100%;
    background-size: 100%;
    background-position: bottom;
  }
`;
const CatImage = styled(ColumnFlexDiv)`
  align-items: center;
  div {
    &:last-child {
      width: 22rem;
      height: 19rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5%;
    }
  }
  img {
    width: 14rem;
  }
  @media ${devices.mobileL} {
    div {
      &:last-child {
        width: 17rem;
        height: 16rem;
      }
    }
    img {
      width: 13rem;
    }
  }
`;
const ExCard = styled(RowFlexDiv)`
  width: 23rem;
  height: 50px;
  margin: auto;
  margin: 15px auto;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 13px;
  }
  @media ${devices.mobileL} {
    width: 80%;
  }
`;
const CatLevelCard = styled(RowFlexDiv)`
  width: fit-content;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
  @media ${devices.mobileL} {
    width: 100%;
    height: 10rem;
  }
`;

export default CatPage;
