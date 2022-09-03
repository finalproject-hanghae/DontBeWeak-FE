import React from "react";
import useHandleClick from "../../../hooks/useHandleClick";
import shopBtn from "../../../assets/images/icons/shop.png";
import ShopModal from "../buttonpop/ShopModal";
import styled from "styled-components";

const ShopBtn = () => {
  const [shop, setShop, showModal, shopModalRef] = useHandleClick();
  return (
    <>
      <BtnWrap>
        <img src={shopBtn} alt="shop_btn" onClick={showModal} />
      </BtnWrap>
      {shop ? <ShopModal ref={shopModalRef} /> : null}
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
  
`;
export default ShopBtn;
