import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalBg, ModalBody} from "../../../style/modal";
import { RelaitiveDiv } from "../../../style/styled";

const ModalComponent = ({to, children}) => {
  const navigate = useNavigate();
  return (
    <>
      <ModalBg
        onClick={() => {
          navigate(to);
        }}
      >
        <RelaitiveDiv>
          <ModalBody
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {children}
          </ModalBody>
        </RelaitiveDiv>
      </ModalBg>
    </>
  );
};

export default ModalComponent;