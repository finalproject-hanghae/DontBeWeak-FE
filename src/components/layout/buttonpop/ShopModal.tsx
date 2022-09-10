import React from "react";
import useUserData from "../../../hooks/useUserData";
import CatItemList from "../../purpose/cat/item/CatItemList";
import styled from "styled-components";
import { ColumnFlexDiv } from "../../../style/styled";
import { devices } from "../../../device";

const ShopModal = React.forwardRef<HTMLInputElement>((props, ref) => {
  const data = useUserData();
  return (
    <Wrap ref={ref}>
      <TiltelBar>
        <h3>상점 아이템 구매</h3>
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

// style 적용
const Wrap = styled.div`
  width: 33rem;
  overflow: hidden;
  background-color: #fff;
  position: absolute;
  right: 124px;
  bottom: 129px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  @media ${devices.mobileL} {
   width: 90%;
   right: 5%;
   bottom: 5rem;
  }
`;
const TiltelBar = styled.div`
  padding-left: 5%;
  width: 100%;
  height: 3.125rem;
  border-bottom: 1px solid #a5a5a5;
  line-height: 2.2rem;
`;
const Section = styled(ColumnFlexDiv)`
  width: 90%;
  height: 12.5rem;
  margin: 1.25rem auto;
`;
const MyPoint = styled.div`
  width: 98%;
  height: 1.5rem;
  text-align: right;
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
