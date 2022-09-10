import React from "react";
import styled from "styled-components";
import { devices } from "../../../device";
import SearchDrugModal from "../buttonpop/SearchDrugModal";
import useHandleClick from "../../../hooks/useHandleClick";

import SearchBtn from "../../../assets/images/icons/drug_add.png";

const SearchDrugBtn = () => {
  const [drug, setDrug, showSearchDrug, SearchDrugModalRef] = useHandleClick();

  return (
    <>
      <BtnWrap>
        <img src={SearchBtn} alt={"Serch_Drug_Btn"} onClick={showSearchDrug} />
      </BtnWrap>
      {drug ? (
        <SearchDrugModal ref={SearchDrugModalRef} setDrug={setDrug} />
      ) : null}
    </>
  );
};

const BtnWrap = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  padding: 8px;
  text-align: center;
  position: absolute;
  right: 38px;
  bottom: 15px;
  &:hover {
    cursor: pointer;
  }
  @media ${devices.mobileL} {
    width: 2rem;
    height: 2rem;
    right: 1rem;
    bottom: 1rem;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default SearchDrugBtn;
