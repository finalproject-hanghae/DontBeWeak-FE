import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalBg, ModalBody} from "../../style/modal";
import { RelaitiveDiv } from "../../style/styled";
import LogInForm from "../modalforms/LogInForm";

const LogInModal = () => {
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
            <LogInForm />
          </ModalBody>
        </RelaitiveDiv>
      </ModalBg>
    </>
  );
};

export default LogInModal;