import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";
import { ModalBg, ModalBody} from "../../style/modal";
import { RelaitiveDiv } from "../../style/styled";

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