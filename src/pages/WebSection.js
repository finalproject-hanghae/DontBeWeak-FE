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
      <Section> {/* Section Bg - Cat 이미지 삽입 */}
        {/* logo 이미지 삽입 */}
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
      </Section>
    </WebCard>
  );
};

const WebCard = styled(ColumnFlexDiv)`
  width: 48.5%;
  justify-content: center;

  @media ${devices.tablet} {
    display: none;
  }
`;

const Section = styled(ColumnFlexDiv)`
  width: 58%;
  height: 68.5%;
  margin: 0 auto;

  background: url(${MainCatImg}) no-repeat 100%;
  background-position: bottom center;
  img {
    width: 346px;
    height: 68px;
  }
`;

const TextBox = styled(ColumnFlexDiv)`
  width: 100%;
  height: 24%;
  justify-content: space-between;
  p {
    &:first-child {
      font-size: 42px;
      font-weight: 800;
    }
  }
  p {
    &:last-child {
      font-size: 24px;
      font-weight: 600;
    }
  }
  p > span {
    color: #F98532;
  }
`;

export default WebSection;
