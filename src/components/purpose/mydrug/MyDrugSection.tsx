import { useParams } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { ColumnFlexDiv, RowFlexDiv } from "../../../style/styled";
import { devices } from "../../../device";
import { loadDrugDataMW } from "../../../redux/modules/drugs";
import SingleDrugLine from "./SingleDrugLine";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { drugList } from "../../../types/drugs";
import { useSomeCatSatus } from "../../../hooks/useSomeCatSatus";

const MyDrugSection = () => {
  const Data = useSomeCatSatus();
  const dispatch = useAppDispatch();
  const username = useParams().username;
  const myDrug: drugList = useAppSelector((state) => state.drugs.drugs);
  console.log(myDrug, "잉?");
  React.useEffect(() => {
    dispatch(loadDrugDataMW(username));
  }, []);
  return (
    <MyDrugCard>
      <CatState>
        <p>Lv.{Data?.level} 고먐미</p>
        <CatImg>
          <img src={Data?.catImg} alt="cat_img" />
        </CatImg>
      </CatState>
      <MyDrugs>
        {myDrug.map((val, idx) => {
          return (
            <SingleDrugLine key={"SingleDrugLine" + idx} val={val} idx={idx} />
          );
        })}
      </MyDrugs>
    </MyDrugCard>
  );
};

const MyDrugCard = styled(RowFlexDiv)`
  width: 90%;
  margin: 0px auto;
  height: 22rem;
  border-radius: 0.625em;
  border: solid 2px #000;
  box-shadow: 10px 10px 0px #ffc58e;
  justify-content: center;
  align-items: center;
  padding: 1%;
  @media ${devices.mobileL} {
    flex-direction: column;
    height: 17.5rem;
    padding: 0px;
  }
`;
const MyDrugs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  overflow: auto;
  margin-left: 2%;
  margin: 10px 0px 10px 2%;
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
`;
const CatState = styled(ColumnFlexDiv)`
  width: 12rem;
  height: 12rem;
  aspect-ratio: 1;
  background-color: #fabc4f;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1rem;
    margin: 0px;
    font-weight: 600;
  }
  @media ${devices.mobileL} {
    width: 100%;
    height: 8rem;
    border-radius: 0.625em 0.625em 0px 0px;
    p {
      font-size: 0.7rem;
    }
  }
`;
const CatImg = styled(ColumnFlexDiv)`
  img {
    width: 9rem;
  }
  @media ${devices.mobileL} {
    img {
      width: 5rem;
    }
  }
`;

export default MyDrugSection;
