import React from "react";
import styled from "styled-components";

import SearchDrugModal from "../buttonpop/SearchDrugModal";
import useHandleClick from "../../../hooks/useHandleClick";

import SearchBtn from "../../../assets/images/drug_icon.png";

const SearchDrugBtn = () => {
  const [drug, setDrug, showSearchDrug, SearchDrugModalRef] = useHandleClick();

  return (
    <>
      <BtnWrap>
        <img src={SearchBtn} alt="search_drug_btn" onClick={showSearchDrug} />
      </BtnWrap>
      {drug ? <SearchDrugModal ref={SearchDrugModalRef} setDrug={setDrug}/> : null}
    </>
  );
};

const BtnWrap = styled.div`
  width: 84px;
  height: 84px;
  padding: 8px;
  text-align: center;
  position: absolute;
  right: 20px;
  bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export default SearchDrugBtn;
