import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NotFoundPage from "../../pages/NotFoundPage";
import { CenterFlexDiv, ModalBg, ModalBody } from "../../styled";

const NotFoundModal = () => {
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
          <NotFoundPage />
        </ModalBody>
      </CenterFlexDiv>
    </>
  );
};

export default NotFoundModal;
