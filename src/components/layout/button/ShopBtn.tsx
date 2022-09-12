import React from "react";
import useHandleClick from "../../../hooks/useHandleClick";
import shopBtn from "../../../assets/images/icons/shop.png";
import ShopModal from "../buttonpop/ShopModal";
import styled, { keyframes } from "styled-components";
import { devices } from "../../../device";
import {
  switchCatShopModal,
  switchShopNoticeModal,
} from "../../../redux/modules/modals";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { AlertDiv } from "../../../style/styled";

const ShopBtn = () => {
  const dispatch = useAppDispatch();
  const shop = useAppSelector((state) => state.modals.modals.catShopModal);
  const notice = useAppSelector((state) => state.modals.modals.shopNoticeModal);
  const shopModalRef = useHandleClick(switchCatShopModal);

  // 알림창에 autoClose, fadeOut 효과 --> ** 추후 레벨업 알림 등에도 재사용하기 위해 컴포넌트로 빼기 !**
  const autoRemover = () => {
      setTimeout(() => {
        dispatch(switchShopNoticeModal(false));
      }, 1400);
  };

  return (
    <>
      <BtnWrap>
        <img
          src={shopBtn}
          alt="shop_btn"
          onClick={() => {
            dispatch(switchCatShopModal(true));
            dispatch(switchShopNoticeModal(false));
          }}
        />
      </BtnWrap>
      {shop && <ShopModal ref={shopModalRef} />}
      {/* 구매 완료 알림창 */}
      {notice ? (
        <FadeOutModal>
          구매 완료😻
          <br />
          경험치 +5 증가!
          <img src="" onError={autoRemover} />
        </FadeOutModal>
      ) : null}
    </>
  );
};

// style 적용
const BtnWrap = styled.div`
  width: 61px;
  height: 61px;
  padding: 8px;
  text-align: center;
  position: absolute;
  right: 5%;
  bottom: 5%;
  &:hover {
    cursor: pointer;
  }
  @media ${devices.mobileL} {
    right: 1rem;
    bottom: 1rem;
    width: 2rem;
    height: 2rem;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
const OpacityController = keyframes`
  0% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const FadeOutModal: any = styled(AlertDiv)`
  width: 16.8rem;
  height: 8.1rem;
  line-height: 2.3rem;
  top: 50%;
  margin-top: -4.3rem;
  left: 50%;
  padding-top: 1.25rem;
  margin-left: -8.43rem;
  animation: ${OpacityController} 1.5s alternate;
`;
export default ShopBtn;
