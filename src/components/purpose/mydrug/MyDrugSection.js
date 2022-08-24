import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv, RowFlexDiv } from "../../../style/styled";
import { devices } from "../../../device";
import { loadDrugDataMW } from "../../../redux/modules/drugs";
import SingleDrugLine from "./SingleDrugLine";

import DrugCat from "../../../assets/images/cats/drug_cat.png";

const MyDrugSection = () => {
  const dispatch = useDispatch();
  const username = useParams().username;
  const myDrug = useSelector((state) => state.drugs.drugs);

  React.useEffect(() => {
    dispatch(loadDrugDataMW(username));
  }, []);

  return (
    <MyDrugCard>
      <MyDrugs>
        {myDrug.map((val, idx) => {
          return (
            <SingleDrugLine key={"SingleDrugLine" + idx} val={val} idx={idx} />
          );
        })}
      </MyDrugs>
      <CatState>
        <img src={DrugCat} alt="cat_img" />
        <p>Lv.1 기운없는 고양이 </p>
      </CatState>
    </MyDrugCard>
  );
};

const MyDrugCard = styled(RowFlexDiv)`
  width: 90%;
  margin: 0px auto;
  height: 352px;
  border-radius: 10px;
  border: solid 2px #000;
  box-shadow: 10px 10px 0px #ffc58e;
  justify-content: center;
  align-items: center;
`;
const MyDrugs = styled.div`
  width: 65%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 15px;
  align-content: center;
  align-self: center;
  align-items: center;
  overflow: auto;
  margin-left: 2%;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f98532;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  @media ${devices.mobileL} {
    padding: 0px;
    height: 190px;
  }
`;
const CatState = styled.div`
  width: 221px;
  height: 221px;
  position: relative;
  left: 2%;
  img {
    position: absolute;
  }
  p {
    position: absolute;
    top: 7%;
    left: 17%;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export default MyDrugSection;
