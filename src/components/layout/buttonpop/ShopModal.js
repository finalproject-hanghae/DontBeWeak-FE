import React from "react";
import styled from "styled-components";
import ShopForm from "./buttonpopforms/ShopForm";

const ShopModal = React.forwardRef((props, ref) => {
  return (
    <Wrap ref={ref}>
      <TiltelBar>
        <h3>상점 아이템 구매 </h3>
      </TiltelBar>
      <ShopForm />
    </Wrap>
  );
});
const Wrap = styled.div`
  width: 530px;
  /* min-height: 60px; */
  overflow: hidden;
  background-color: #fff;
  position: absolute;
  right: 124px;
  bottom: 129px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const TiltelBar = styled.div`
  padding-left: 5%;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #a5a5a5;
  line-height: 35px;
`;

export default ShopModal;
