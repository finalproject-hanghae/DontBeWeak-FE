import styled from "styled-components";
import { devices } from "../device";
import { ColumnFlexDiv } from "./styled";

export const FriendIdInput = styled.input`
  width: 17.5rem;
  height: 2.3rem;
  border: 0.5px solid #282828;
  border-radius: 5px;
  padding-left: 10px;
  color: #9a9a9a;
  outline: none;
  @media ${devices.mobileL} {
    width: 11rem;
    height: 2rem;
    font-size: 0.8rem;
  }
`;
export const FriendAddBtn = styled.button`
  width: 6rem;
  height: 34px;
  background-color: transparent;
  border: 1px solid #a5a5a5;
  border-radius: 5px;
  font-size: 0.95rem;
  font-weight: 800;
  @media ${devices.mobileL} {
    width: 5rem;
    height: 2rem;
    font-size: 0.8rem;
  }
  &:hover {
    background-color: #f98532;
    border: none;
    color: #fff;
    cursor: pointer;
  }
`;
export const FriendsList = styled(ColumnFlexDiv)`
  width: 100%;
  height: 150px;
  padding: 1%;
  font-size: 1rem;
  line-height: 10%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f98532;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
`;
