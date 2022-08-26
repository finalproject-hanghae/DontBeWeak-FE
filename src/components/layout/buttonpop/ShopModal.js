import React from "react";
import styled from "styled-components";
import { ColumnFlexDiv, RowFlexDiv } from "../../../style/styled";
import CatItemList from "../../purpose/cat/item/CatItemList";
import useUserData from "../../../hooks/useUserData";

const ShopModal = React.forwardRef((props, ref) => {
  const data = useUserData();

  return (
    <Wrap ref={ref}>
      <TiltelBar>
        <h3>상점 아이템 구매 </h3>
      </TiltelBar>

      <Section>
        <CatItemList />
        <MyPoint>
          <p>
            MY 포인트 :<span>{data?.point}</span>
          </p>
        </MyPoint>
      </Section>
      
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
const Section = styled(ColumnFlexDiv)`
  width: 90%;
  height: 200px;
  margin: 20px auto;
`;
const MyPoint = styled(RowFlexDiv)`
  width: 98%;
  height: 40px;
  align-items: center;
  justify-content: right;
  margin: 0 auto;
  p {
    font-size: 1rem;
  }
  span {
    font-weight: 500;
    margin-left: 8px;
  }
`;

export default ShopModal;
