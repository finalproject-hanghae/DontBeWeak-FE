import styled from "styled-components";
import { devices } from "../device";

export const ModalBg = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(3, 3, 3, 0.2);

  @media ${devices.tablet} {
    width: 100%;
    min-width: 280px;
    right: 0px;
  }
`;

export const Dimmed = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 100;
  width: 50%;
  overflow:hidden;
  padding: 5px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

  @media ${devices.tablet} {
    top: 50%;
    left: 50%;
  }
`;
