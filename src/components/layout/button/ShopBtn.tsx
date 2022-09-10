import React from "react";
import useHandleClick from "../../../hooks/useHandleClick";
import shopBtn from "../../../assets/images/icons/shop.png";
import ShopModal from "../buttonpop/ShopModal";
import styled from "styled-components";
import { devices } from "../../../device";
import {
  switchCatShopModal,
  switchShopConfirmModal,
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
  const [fadeOut, setFadeOut] = React.useState(100);
  const autoRemover = () => {
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
  const callBack = React.useCallback(autoRemover, [fadeOut]);
  React.useEffect(() => {
    if (notice === true) {
      callBack();
    }
  }, [fadeOut]);

  return (
    <>
      <BtnWrap>
        <img
          src={shopBtn}
          alt="shop_btn"
          onClick={() => {
            dispatch(switchCatShopModal(true));
            dispatch(switchShopConfirmModal(false));
            dispatch(switchShopNoticeModal(false));
            setFadeOut(100) // 이게 없어서 알림창 한번만 떠서 30분동안 고생
          }}
        />
      </BtnWrap>
      {shop && <ShopModal ref={shopModalRef} />}
      {/* 구매 완료 알림창 */}
      {notice ? (
        <FadeOutModal opacity={`${fadeOut}%`}>
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

const FadeOutModal: any = styled(AlertDiv)`
  width: 16.8rem;
  height: 8.1rem;
  line-height: 2.3rem;
  top: 50%;
  margin-top: -4.3rem;
  left: 50%;
  padding-top: 1.25rem;
  margin-left: -8.43rem;
  opacity: ${(props: any) => props.opacity};
`;
export default ShopBtn;
