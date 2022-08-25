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
              {/* <img src={DrugCat} alt="cat_state" /> */}

      {/* <CatState>
        <p>Lv.1 기운없는 고양이 </p>
      </CatState> */}
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
  box-shadow: 10px 10px 0px #ffc58e;
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
  img {
    width: 50%;
    height: 50%;

  }
`;
// const CatState = styled.div`
//   max-width: 100%;
//   height: auto;
//   margin: 0px 0px 10px 360px;
//   background: url(${DrugCat}) no-repeat 100%;
//   position: absolute;
//   z-index: 99;
//   p {
//     margin: 30px 20px 0px 40px;

//     font-size: 1em;
//   }
// `;

export default MyDrugSection;
