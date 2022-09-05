import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { devices } from "../device";

//페이지를 relative로 제공함으로서 모달의 absolute 위치 제한
export const PageSection = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #fcdcbe;
  @media ${devices.mobileL} {
    width: 100%;
    height: 95%;
  }
  button {
    display: relative;
  }
  .Padding {
    padding: 0px 45px;
    @media ${devices.tablet} {
      padding: 0px 5px;
    }
  }
`;

//필요한대로 쓰기 조각조각 레고
export const ColumnFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CenterFlexDiv = styled.div`
  height: 100%;
  width: 100%;
  display: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RelaitiveDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const DeviceDiv = styled.div`
@media ${devices.mobileL} {
    min-height: 653px;
    max-height: 
  }
  @media ${devices.tablet} {
    min-height: 375px;
    max-height: 800px;
  }
  @media ${devices.laptopL} {
    min-height: 1200px;
    max-height: 1440px;
  }
`;

//a tag로 이루어진 Link 태그의 밑줄 및 텍스트 컬러 제거
export const LinkC = styled(Link)`
  text-decoration: none;
  color: black;
`;
