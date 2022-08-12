import React from "react";

// 스타일 관련 컴포넌트
import styled from "styled-components";
import { devices } from "../device";
import { ColumnFlexDiv } from "../style/styled";

// Logo & Cat Background 이미지 연결
import Logo from "../images/logo_big.png";
import MainCatImg from "../images/main_cat.png";

const WebSection = () => {
  return (
    <WebCard>
      <Section>
        {/* logo */}
        <img src={Logo} alt="logo" />
        <TextBox>
          <p>
            꼬박꼬박 영양제 챙겨 먹기 <br />
            번거로우셨죠?
          </p>
          <p>
            작은 <span>아기고양이</span>를 키우면서 <span>건강</span>도 함께
            챙겨보세요!
          </p>
        </TextBox>
        <ImgBox />
      </Section>
    </WebCard>
  );
};

const WebCard = styled(ColumnFlexDiv)`
  width: 48.5%;
  height: 100%;
  justify-content: center;
  @media ${devices.tablet} {
    display: none;
  }
`;

const Section = styled(ColumnFlexDiv)`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  img {
    width: 346px;
    height: 68px;
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 24%;
  justify-content: space-between;
  p {
    &:first-child {
      font-size: 1.8rem;
      font-weight: 800;
    }
  }
  p {
    &:last-child {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
  p > span {
    color: #f98532;
  }
`;

const ImgBox = styled.div`
  width: 528px;
  height: 402px;
  margin: 5% auto;
  background: url(${MainCatImg}) no-repeat 100%;
  background-position: center;
`;

export default WebSection;
