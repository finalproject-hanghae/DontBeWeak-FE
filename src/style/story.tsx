import styled from "styled-components";

import { devices } from "../device";

export const LeftDiv = styled.div`
  width: 20px;
  aspect-ratio: 1;
  transform: rotate(45deg);
  border: 4px solid black;
  border-style: none none solid solid;
  margin: 0px 20px 0px 0px;
  cursor: pointer;
  &:hover {
    border-color: #686868;
  }
`;
export const RightDiv = styled(LeftDiv)`
  border-style: solid solid none none;
  margin: 0px 0px 0px 20px;
`;

export const StoryImage = styled.div`
  width: 17.5rem;
  height: 11.6rem;
  @media ${devices.mobileL} {
    transform: scale(0.7, 0.7);
    min-width: 280px;
  }
`;
