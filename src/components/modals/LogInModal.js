import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalBg, ModalBody, RelaitiveDiv } from "../../styled";
import LogInForm from "../LogInForm";

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
