import React from "react";
import styled from "styled-components";

import SearchDrugModal from "../buttonpop/SearchDrugModal";
import SearchBtn from "../../../assets/images/drug_icon.png";

const SearchDrugBtn = () => {
  const [drug, setDrug] = React.useState(false);
  const SearchDrugModalRef = React.useRef();

  const showSearchDrug = () => {
    setDrug(true);
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        SearchDrugModalRef.current &&
        !SearchDrugModalRef.current.contains(e.target)
      ) {
        setDrug(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [SearchDrugModalRef]);



  return (
    <>
      <BtnWrap>
        <img src={SearchBtn} alt="search_drug_btn" onClick={showSearchDrug} />
      </BtnWrap>
      {drug ? (
        <SearchDrugModal ref={SearchDrugModalRef} setDrug={setDrug} />
      ) : null}
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
