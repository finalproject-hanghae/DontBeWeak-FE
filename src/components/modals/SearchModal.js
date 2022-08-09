import React from "react";
import { useNavigate } from "react-router-dom";
import { CenterFlexDiv, ModalBg, ModalBody } from "../../styled";
import SearchDrug from "../SearchDrug";

const SearchModal = () => {
  const navigate = useNavigate();
  return (
    <>
      <ModalBg
        onClick={() => {
          navigate(-1);
        }}
      />
      <CenterFlexDiv>
        <ModalBody>
          <SearchDrug />
        </ModalBody>
      </CenterFlexDiv>
    </>
  );
};

export default SearchModal;
