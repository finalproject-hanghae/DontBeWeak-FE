import React from "react";

import styled, { keyframes } from "styled-components";
import { devices } from "../../device";

import spriteImg from "../../assets/images/cats/BLKbeen_sprite.png";

const StartingMainStory0 = () => {
  return (
    <>
      <h2>
        아기고양이를 키우면서
        <br />
        영양제도 챙겨 먹어보세요!
        <br />
        차근차근 도와줄게요.
      </h2>
      <ImgSprite></ImgSprite>
    </>
  );
};

const Keyframes = keyframes`
  100%{
    background-position: -52.5rem;
  }
`;
const ImgSprite = styled.div`
  width: 17.5rem;
  height: 11.6rem;
  background: url(${spriteImg}) left center;
  animation: ${Keyframes} 0.8s steps(3) infinite;
  @media ${devices.mobileL} {
    transform: scale(0.7, 0.7);
    min-width: 280px;
  }
`;

export default StartingMainStory0;
