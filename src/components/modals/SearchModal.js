import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalBg, ModalBody, RelaitiveDiv } from "../../styled";
import SearchDrug from "../SearchDrug";

const SearchModal = () => {
  const navigate = useNavigate();
  return (
    <>
      <ModalBg
        onClick={() => {
          navigate(-1);
        }}
      >
        <RelaitiveDiv>
          <ModalBody
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <SearchDrug />
          </ModalBody>
        </RelaitiveDiv>
      </ModalBg>
    </>
  );
};

export default SearchModal;
