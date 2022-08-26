import React from "react";
import styled from "styled-components";
import { ColumnFlexDiv, RowFlexDiv } from "../../../../style/styled";
import item1 from "../../../../assets/images/cats/item1.png";
import point from "../../../../assets/images/cats/stamp.png";
import useCatItemList from "../../../../hooks/useCatItemList";
import CatItemList from "../../../purpose/cat/item/CatItemList";


const ShopForm = () => {
const Data = CatItemList();
console.log(Data);

  return (
    <Wrap>
      <ItemsBox>

        <Item>
          <Img>
            <img src={item1} alt="item1" />
          </Img>
          <Name> 붕어 </Name>
          <Price>
            <img src={point} alt="point" />
            <img src={point} alt="point" />
          </Price>
        </Item>

        <Item>
          <Img>
            <img src={item1} alt="item1" />
          </Img>
          <Name> 붕어 </Name>
          <Price>
            <img src={point} alt="point" />
            <img src={point} alt="point" />
          </Price>
        </Item>

        <Item>
          <Img>
            <img src={item1} alt="item1" />
          </Img>
          <Name> 붕어 </Name>
          <Price>
            <img src={point} alt="point" />
            <img src={point} alt="point" />
          </Price>
        </Item>

        <Item>
          <Img>
            <img src={item1} alt="item1" />
          </Img>
          <Name> 붕어 </Name>
          <Price>
            <img src={point} alt="point" />
            <img src={point} alt="point" />
          </Price>
        </Item>

        <Item>
          <Img>
            <img src={item1} alt="item1" />
          </Img>
          <Name> 붕어 </Name>
          <Price>
            <img src={point} alt="point" />
            <img src={point} alt="point" />
          </Price>
        </Item>
      </ItemsBox>
      <MyPoint>
        <p>
          잔여포인트 :<span>4</span>점
        </p>
      </MyPoint>
    </Wrap>
  );
};

const Wrap = styled(ColumnFlexDiv)`
  width: 90%;
  height: 200px;
  margin: 20px auto;
`;
const ItemsBox = styled(RowFlexDiv)`
  width: 100%;
  height: 85%;
  justify-content: space-between;
  align-items: center;
`;
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
  img {
    width: 34px;
    height: 25px;
  }
`;
const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
const Price = styled(RowFlexDiv)`
  width: 70%;
  height: 50px;

  /* align-items: center; */
  justify-content: center;
  img {
    width: 20px;
    height: 20px;
    margin-left: 3%;
  }
`;
const MyPoint = styled(RowFlexDiv)`
  width: 88%;
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

export default ShopForm;
