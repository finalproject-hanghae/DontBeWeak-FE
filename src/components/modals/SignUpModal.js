import React from "react";
import { useNavigate } from "react-router-dom";
import { CenterFlexDiv, ModalBg, ModalBody } from "../../styled";
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
      <CenterFlexDiv>
        <ModalBody>
          <SignUpForm />
        </ModalBody>
      </CenterFlexDiv>
    </>
  );
};

export default SignUpModal;
