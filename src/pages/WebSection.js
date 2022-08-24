import React from "react";
import styled from "styled-components";

import { ColumnFlexDiv } from "../style/styled";
import { devices } from "../device";

import Logo from "../assets/images/logo/logo_big.png";
import catImg from "../assets/images/cats/cat4.png";

const WebSection = () => {
  return (
    <WebCard>
      <Section>
        {/* logo */}
        <img src={Logo} alt="logo" />
        <TextBox>
          <p>
            꼬박꼬박 영양제 챙겨 먹기 <br />
            번거로우셨죠? <br />
            <span>작은 아기고양이를 키우면서 건강도 함께 챙겨보세요</span>
          </p>
          <img src={catImg} alt="catImg" />
        </TextBox>
      </Section>
    </WebCard>
  );
};

// styled-component 적용

const WebCard = styled(ColumnFlexDiv)`
  width: 48.5%;
  margin-top: 80px;
  justify-content: center;
  @media ${devices.tablet} {
    display: none;
  }
`;

const Section = styled(ColumnFlexDiv)`
  width: 517px;
  height: 673px;

  margin: 0 auto;
  img {
    &:first-child {
      width: 346px;
      height: 68px;
    }
  }
`;

const TextBox = styled(ColumnFlexDiv)`
  width: 100%;
  height: 580px;
  margin-top: 30px;
  p {
    &:first-child {
      font-size: 42px;
      font-weight: 800;
      margin: 0px 0px 30px;
    }
  }
  p > span {
    font-size: 20px;
    font-weight: 900;
    border-bottom: 2px solid #000;
  }
  img {
    width: 271px;
    height: 317px;
    margin: 44px auto;
  }
`;

export default WebSection;
