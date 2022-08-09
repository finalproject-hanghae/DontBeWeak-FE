import React from "react";
import { useNavigate } from "react-router-dom";
import { CenterFlexDiv, ModalBg, ModalBody } from "../../styled";
import LogInForm from "../LogInForm";

const LogInModal = () => {
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
          <LogInForm />
        </ModalBody>
      </CenterFlexDiv>
    </>
  );
};

export default LogInModal;
