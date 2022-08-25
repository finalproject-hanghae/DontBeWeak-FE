import React from 'react'
import styled from "styled-components";

import ShopModal from "../buttonpop/ShopModal";
import useHandleClick from "../../../hooks/useHandleClick";

import shopBtn from "../../../assets/images/icons/shop.png";

const ShopBtn = () => {
  const [shop, setShop,showModal,shopModalRef] =
    useHandleClick();

  return (
    <>
    <BtnWrap>
      <img src={shopBtn} alt="shop_btn" onClick={showModal} />
    </BtnWrap>
    {shop ? <ShopModal ref={shopModalRef} /> : null}

  </>
 )};
const BtnWrap = styled.div`
  width: 61px;
  height: 61px;
  padding: 8px;
  text-align: center;
  position: absolute;
  right: 38px;
  bottom: 88px;
  &:hover {
    cursor: pointer;
  }
`;
export default ShopBtn;