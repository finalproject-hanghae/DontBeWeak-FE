import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadDrugDataMW } from "../../../redux/modules/drugs";
import SingleDrugLine from "./SingleDrugLine";
import styled from "styled-components";
import { ColumnFlexDiv, RowFlexDiv } from "../../../style/styled";
import { devices } from "../../../device";
import { loadCatDataMW } from "../../../redux/modules/cats";

const MyDrugSection = () => {
  const Data = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();
  const username = useParams().username;
  const myDrug = useSelector((state) => state.drugs.drugs);
  console.log(myDrug, "잉?");
  React.useEffect(() => {
    dispatch(loadDrugDataMW(username));
    dispatch(loadCatDataMW(username));
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
  @media ${devices.mobileL} {
    height: 20rem;
    padding: 1%;
  }
`;
const MyDrugs = styled.div`
  width: 65%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
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
    width: 85%;
    height: 100%;
  }
`;
const CatState = styled(ColumnFlexDiv)`
  width: 15rem;
  height: 15rem;
  background-color: #fabc4f;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1rem;
    margin-bottom: 10%;
    font-weight: 600;
  }
  @media ${devices.mobileL} {
    width: 8rem;
    height: 7rem;
    p{
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
