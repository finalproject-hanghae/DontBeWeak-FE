import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalBg, ModalBody } from "../../styled";
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
      <ModalBody>
        <SearchDrug/>
      </ModalBody>
    </>
  );
};

export default SearchModal;
