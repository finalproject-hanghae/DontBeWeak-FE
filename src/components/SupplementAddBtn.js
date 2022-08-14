import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import AddBtn from "../images/supplement_icon.png";

const SupplementAddBtn = () => {
  const navigate = useNavigate();

  const goToSplmnModal = () => {
    navigate("/record/search");
  };

  return (
    <BtnWrap>
      <img src={AddBtn} alt="supplement_add_btn" onClick={goToSplmnModal} />
    </BtnWrap>
  );
};

const BtnWrap = styled.div`
  width: 84px;
  height: 84px;
  padding: 8px;
  text-align: center;
  position: absolute;
  right: 20px;
  bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export default SupplementAddBtn;
