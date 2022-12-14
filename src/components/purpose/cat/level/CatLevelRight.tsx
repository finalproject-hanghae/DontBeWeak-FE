import React from "react";
import styled from "styled-components";
import { devices } from "../../../../device";
import { ColumnFlexDiv } from "../../../../style/styled";

const CatLevelRight = () => {
  return (
    <SideCard>
      <p>Lv.10</p>
      <p>Lv.20</p>
      <p>Lv.30</p>
    </SideCard>
  );
};

const SideCard = styled(ColumnFlexDiv)`
  p {
    font-weight: bold;
    margin: 1.3rem 0rem;
  }
  @media ${devices.mobileL} {
    p {
      margin: 1.3rem 0px;
      font-size: 0.6rem;
    }
  }
`;

export default CatLevelRight;
