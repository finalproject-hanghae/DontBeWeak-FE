import React from "react";
import styled from "styled-components";
import { devices } from "../../../device";
import { ColumnFlexDiv } from "../../../style/styled";
import SeachDrugForm from "./buttonpopforms/SearchDrugForm";


type GreetingsProps = {
  setDrug:any;
};

const SearchDrugModal = React.forwardRef<HTMLInputElement,GreetingsProps>((props, ref) => {
  return (
    <Wrap ref={ref}>
      <SeachDrugForm setDrug={props.setDrug} />
    </Wrap>
  );
});

const Wrap = styled(ColumnFlexDiv)`
  width: 527px;
  padding: 20px 0px;
  max-height: 460px;
  overflow: hidden;
  border-radius: 1rem;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 124px;
  bottom: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media ${devices.mobileL} {
    width: 14rem;
    height: 20rem;
    right: 3.5rem;
    bottom: 8rem;
  }
`;

export default SearchDrugModal;
