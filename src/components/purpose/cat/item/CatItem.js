import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { itemApi } from "../../../../api/itemApi";
import CatItemCost from "./CatItemCost";
import { ColumnFlexDiv } from "../../../../style/styled";
import styled from "styled-components";
import { loadCatDataMW } from "../../../../redux/modules/cats";

const CatItem = ({ val }) => {
  const dispatch = useDispatch();
  const username = useParams().username;
  // 구매 Confirm 모달창
  const [openModal, setOpenModal] = useState(false);

  // 구매 완료 모달창 fadeOut 효과로 자동으로 닫히게.
  const [fadeOut, setFadeOut] = useState(100);

  // const autoRemover = () => {
  //   if (fadeOut > 96) {
  //     setTimeout(() => {
  //       setFadeOut(fadeOut - 1);
  //     }, 100);
  //   } else if (fadeOut > 5)
  //     setTimeout(() => {
  //       setFadeOut(fadeOut - 8);
  //     }, 50);
  // };

  // React.useEffect(() => {
  //   autoRemover();
  // }, [autoRemover]);

  // 아이템 구매, 적용 axios 실행
  const [someItem, setSomeItem] = useState("");
  const toBuyItem = () => {
    const itemId = val.itemId;
    itemApi
      .apiItemBuy(itemId)
      .then((res) => {
        setSomeItem(res.data);
        setOpenModal(false);
        // autoRemover();
        dispatch(loadCatDataMW(username));
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
        <Confirm>
          <p>
            <span>{val?.itemName}</span>를(을) 구매하시겠습니까?
          </p>
          <Btn onClick={() => setOpenModal(false)}>아니오</Btn>
          <Btn onClick={toBuyItem}>네</Btn>
        </Confirm>
      ) : null}
      {fadeOut === 100 ? (
        <FadeOutModal>적용완료! 경험치 5 획득 !</FadeOutModal>
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
const FadeOutModal = styled.div`
  /* width:  */
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
