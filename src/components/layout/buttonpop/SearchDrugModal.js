import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv } from "../../../style/styled";
import SeachDrugForm from "./buttonpopforms/SearchDrugForm";

const SearchDrugModal = React.forwardRef((props, ref) => {
  return (
    <Wrap ref={ref}>
      <SeachDrugForm setDrug={props.setDrug}/>
    </Wrap>
  );
});

const Wrap = styled(ColumnFlexDiv)`
  width: 527px;
  overflow: hidden;
  max-height: 550px;
  border-radius: 1rem;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 124px;
  bottom: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default SearchDrugModal;
