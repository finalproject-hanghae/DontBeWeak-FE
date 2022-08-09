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

export const LinkC = styled(Link)`
  text-decoration:none;
  color: black;
`

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  display: block;
  background-color: rgba(0, 0, 0, 0.4);
  @media ${devices.tablet} {
    width: 100vw;
  }
`;

export const ModalBody = styled.div`
  position: fixed;
  top: 50%;
  left: 75%;
  z-index: 100;
  width: fit-content;
  height: fit-content;
  padding: 5px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  transform: translateX(-50%) translateY(-50%);
  @media ${devices.tablet} {
    top: 50%;
    left: 50%;
  }
`;
