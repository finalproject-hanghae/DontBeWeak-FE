import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { loadCatDataMW } from "../../../../redux/modules/cats";
import { itemApi } from "../../../../api/itemApi";
import CatItemCost from "./CatItemCost";
import styled from "styled-components";
import { AlertDiv, ColumnFlexDiv } from "../../../../style/styled";
import { devices } from "../../../../device";
import { catItem } from "../../../../types/cats";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  switchCatShopModal,
  switchShopConfirmModal,
  switchShopNoticeModal,
} from "../../../../redux/modules/modals";

type GreetingsProps = {
  val: catItem;
};

const CatItem = ({ val }: GreetingsProps) => {
  const dispatch = useAppDispatch();
  const username = useParams().username;
  // 구매 Confirm 모달창
  const openModal = useAppSelector(
    (state) => state.modals.modals.shopConfirmModal
  );

  // 아이템 구매, 적용 axios 실행
  const [someItem, setSomeItem] = useState("");
  const toBuyItem = () => {
    const itemId = val.itemId;
    itemApi
      .apiItemBuy(itemId + "")
      .then((res) => {
        setSomeItem(res.data);
        dispatch(loadCatDataMW(username));
        dispatch(switchShopNoticeModal(true));
        dispatch(switchShopConfirmModal(false));
        dispatch(switchCatShopModal(false));
      })
      .catch((err) => {
        console.log(err);
        alert("포인트가 부족합니다.");
      });
  };

  return (
    <Item>
      <Img onClick={() => dispatch(switchShopConfirmModal(true))}>
        <img src={val?.itemImg} alt={val?.itemName} />
      </Img>
      <Name> {val?.itemName} </Name>
      <CatItemCost cost={val?.itemPoint} />
      {/* 구매 의사 컨펌창 */}
      {openModal ? (
        <Confirm>
          <p>
            <span>{val?.itemName}</span>를(을) 구매하시겠습니까?
          </p>
          <Btn onClick={() => dispatch(switchShopConfirmModal(false))}>
            아니오
          </Btn>
          <Btn
            onClick={() => {
              toBuyItem();
            }}
          >
            {" "}
            네{" "}
          </Btn>
        </Confirm>
      ) : null}
    </Item>
  );
};

// Style적용
const Item = styled(ColumnFlexDiv)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media ${devices.mobileL} {
    width: 100%;
  }
`;
const Img = styled(ColumnFlexDiv)`
  width: 4.3rem;
  height: 4.3rem;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #fcdcbe;
  cursor: pointer;
  &:hover {
    width: 4.5rem;
    height: 4.5rem;
  }
  @media ${devices.mobileL} {
    width: 3rem;
    height: 3rem;
  }
`;
const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
const Confirm = styled(AlertDiv)`
  width: 270px;
  height: 130px;
  top: 50%;
  margin-top: -70px;
  left: 50%;
  padding-top: 20px;
  margin-left: -135px;
  span {
    font-weight: 800;
  }
`;

const Btn = styled.button`
  width: 55px;
  height: 22px;
  line-height: 20px;
  font-size: 11px;
  background: #fffbf9;
  border: 1px solid #a5a5a5;
  border-radius: 23px;
  box-sizing: border-box;
  float: right;
  margin: 3%;
  cursor: pointer;
  &:hover {
    background-color: #fabc4f;
    font-weight: 700;
  }
`;
export default CatItem;
