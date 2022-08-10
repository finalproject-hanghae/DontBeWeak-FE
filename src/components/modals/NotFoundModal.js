import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";
import { ModalBg, ModalBody, RelaitiveDiv } from "../../styled";

const NotFoundModal = () => {
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
            <NotFoundPage />
          </ModalBody>
        </RelaitiveDiv>
      </ModalBg>
    </>
  );
};

export default NotFoundModal;
