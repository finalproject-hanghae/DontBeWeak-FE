import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalBg, ModalBody } from "../../styled";
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
      <ModalBody>
        <LogInForm/>
      </ModalBody>
    </>
  );
};

export default LogInModal;
