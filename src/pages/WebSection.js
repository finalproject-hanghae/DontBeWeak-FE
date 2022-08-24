import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv } from "../style/styled";
import { devices } from "../device";

import Logo from "../assets/images/logo/logo_big.png";
import MainCatImg from "../assets/images/cats/cat4.png";

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


// styled-component 적용

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
  p {
    &:first-child {
      font-size: 2.1rem;
      font-weight: 800;
    }
  }
  p {
    &:last-child {
      font-size: 1.3rem;
      font-weight: 600;
    }
  }
  p > span {
    color: #f98532;
  }
`;

const ImgBox = styled.div`
  width: 271px;
  height: 317px;
  margin: 20% auto 10% auto;
  background: url(${MainCatImg}) no-repeat 100%;
  background-position: center;
`;  

export default WebSection;
