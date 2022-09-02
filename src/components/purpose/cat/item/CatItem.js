import React, { useState } from "react";
import { itemApi } from "../../../../api/itemApi";
import CatItemCost from "./CatItemCost";
import { ColumnFlexDiv } from "../../../../style/styled";
import styled from "styled-components";

const CatItem = ({ val }) => {
  // 구매 Confirm 모달창
  const [openModal, setOpenModal] = useState(false);

  // 아이템 구매, 적용 axios 실행
  const [someItem, setSomeItem] = useState("");
  const toBuyItem = () => {
    const itemId = val.itemId;
    itemApi.apiItemBuy(itemId)
      .then((res) => {
        setSomeItem(res.data);
        setOpenModal(false);
        alert("냥냠냥냠냥냥 😻 경험치 +5 증가!");
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Item>
      <Img onClick={() => setOpenModal(true)}>
        <img src={val?.itemImg} alt={val?.itemName} />
      </Img>
      <Name> {val?.itemName} </Name>
      <CatItemCost cost={val?.itemPoint} />
      {openModal ? (
        <Confirm className="conirm">
          <p>
            <span>{val?.itemName}</span>를(을) 구매하시겠습니까?
          </p>
          <Btn onClick={() => setOpenModal(false)}>아니오</Btn>
          <Btn onClick={toBuyItem}>네</Btn>
        </Confirm>
      ) : null}
    </Item>
  );
};

// Style적용
const Item = styled(ColumnFlexDiv)`
  width: 100px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Img = styled(ColumnFlexDiv)`
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #fcdcbe;
  cursor: pointer;
`;
const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
const Confirm = styled.div`
  width: 270px;
  height: 130px;
  text-align: center;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #e9e9e9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: absolute;
  padding: 5px;
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
  cursor: pointer;
  background: #fffbf9;
  border: 1px solid #a5a5a5;
  border-radius: 23px;
  box-sizing: border-box;
  float: right;
  margin: 3%;
  &:hover {
    background-color: #fabc4f;
    font-weight: 700;
  }
`;
export default CatItem;
