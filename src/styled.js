import styled from "styled-components";
import {Link} from "react-router-dom"
import { devices } from "./device";

export const ColumnFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CenterFlexDiv = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
`

export const LinkC = styled(Link)`
  text-decoration:none;
  color: black;
`

export const ModalBg = styled.div`
  position: fixed;
  display: absolute;
  top: 0;
  right: calc(50%+50px);
  width: 30%;
  min-width:745px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  
  @media ${devices.tablet} {
    width: 100%;
    right: 0px;

  }
`;

export const ModalBody = styled.div`
  position: fixed;
  z-index: 100;
  width: fit-content;
  height: fit-content;
  padding: 5px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  
  @media ${devices.tablet} {
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    left: 50%;
  }
`;
