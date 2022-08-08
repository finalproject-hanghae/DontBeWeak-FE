import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalBg, ModalBody } from "../../styled";
import SignUpForm from "../SignUpForm";

const SignUpModal = () => {
  const navigate = useNavigate();
  return (
    <>
      <ModalBg
        onClick={() => {
          navigate(-1);
        }}
      />
      <ModalBody>
        <SignUpForm/>
      </ModalBody>
    </>
  );
};

export default SignUpModal;
