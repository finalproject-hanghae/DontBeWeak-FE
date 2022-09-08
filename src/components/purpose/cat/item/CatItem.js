import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { loadCatDataMW } from "../../../../redux/modules/cats";
import { itemApi } from "../../../../api/itemApi";
import CatItemCost from "./CatItemCost";
import styled from "styled-components";
import { AlertDiv, ColumnFlexDiv } from "../../../../style/styled";
import { devices } from "../../../../device";

const CatItem = ({ val }) => {
  const dispatch = useDispatch();

  const username = useParams().username;
  // 구매 확인 모달창 (예/아니오)
  const [openModal, setOpenModal] = useState(false);

  // 구매 완료 알림(Notice)
  const [notice, setNotice] = useState(false);

  // 알림창에 autoClose, fadeOut 효과 --> ** 추후 레벨업 알림 등에도 재사용하기 위해 컴포넌트로 빼기 !**
  const [fadeOut, setFadeOut] = useState(100);
  const autoRemover = () => {
    setNotice(true);
    if (fadeOut > 94) {
      setTimeout(() => {
        setFadeOut(fadeOut - 0.5);
      }, 100);
    } else if (fadeOut > 5) {
      setTimeout(() => {
        setFadeOut(fadeOut - 8);
      }, 50);
    }
  }; 
  const callBack = useCallback(autoRemover, [fadeOut]);
  useEffect(() => {
    if (notice === true) {
      callBack();
    }
  }, [fadeOut]);

  // 아이템 구매, 적용 axios 실행
  const [someItem, setSomeItem] = useState("");
  const toBuyItem = () => {
    const itemId = val.itemId;
    itemApi
      .apiItemBuy(itemId)
      .then((res) => {
        setSomeItem(res.data);
        dispatch(loadCatDataMW(username));
        setOpenModal(false);
        //❓❓setOpenModal과 함께 ShopModal도 없애버리고 싶은데...useHandleClick > openedModalRef를 여기서 false 하는 법이 헷깔림...❓❓
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
    {/* 구매 의사 컨펌창 */}
      {openModal ? (
        <Confirm>
          <p>
            <span>{val?.itemName}</span>를(을) 구매하시겠습니까?
          </p>
          <Btn onClick={() => setOpenModal(false)}>아니오</Btn>
          <Btn
            onClick={() => {toBuyItem(); autoRemover();}}> 네 </Btn>
        </Confirm>
      ) : null}
    {/* 구매 완료 알림창 */}
      {notice ? (
        <FadeOutModal opacity={`${fadeOut}%`}>
           구매 완료😻
           <br />
           경험치 +5 증가!
        </FadeOutModal>
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
const FadeOutModal = styled(AlertDiv)`
  width: 16.8rem;
  height: 8.1rem;
  line-height: 2.3rem;
  top: 50%;
  margin-top: -4.3rem;
  left: 50%;
  padding-top: 1.25rem;
  margin-left: -8.43rem;
  opacity: ${(props) => props.opacity};
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
