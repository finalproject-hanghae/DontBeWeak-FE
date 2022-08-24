import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv } from "../../../style/styled";
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
      {myDrug.map((val, idx) => {
        return (
          <SingleDrugLine key={"SingleDrugLine" + idx} val={val} idx={idx} />
        );
      })}
      <CatState>
        <p>Lv.1 기운없는 고양이 </p>
      </CatState>
    </MyDrugCard>
  );
};

const MyDrugCard = styled(ColumnFlexDiv)`
  height: 352px;
  border-radius: 10px;
  border: solid 2px #000;
  padding: 10px 50px;
  margin-bottom: 130px;
  background-color: white;

  overflow: auto;
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
  margin: 40px 0px 10px auto;
  background: url(${DrugCat}) no-repeat 100%;
  p {
    margin: 30px 20px 0px 40px;
    font-size: 1rem;
  }
`;

export default MyDrugSection;
