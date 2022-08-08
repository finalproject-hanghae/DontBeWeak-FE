import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";
import { ModalBg, ModalBody } from "../../styled";

const NotFoundModal = () => {
  const navigate = useNavigate();
  return (
    <>
      <ModalBg
        onClick={() => {
          navigate(-1);
        }}
      />
      <ModalBody>
        <NotFoundPage />
      </ModalBody>
    </>
  );
};

export default NotFoundModal;
