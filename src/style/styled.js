import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../device";

//페이지를 relative로 제공함으로서 모달의 absolute 위치 제한
export const PageSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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

export const AlertDiv = styled.div`
  text-align: center;
  box-sizing: border-box;
  background: #fff;
  border: 0.06rem solid #e9e9e9;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  position: absolute;
  padding: 0.312rem;
`;

export const DeviceDiv = styled.div`
  @media ${devices.mobileL} {
    min-height: 653px;
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
