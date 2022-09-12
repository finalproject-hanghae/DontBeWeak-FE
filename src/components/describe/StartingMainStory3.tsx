import React from "react";

import styled, { keyframes } from "styled-components";
import { devices } from "../../device";

import ICat3 from "../../assets/images/cats/cat3.png";

const StartingMainStory3 = () => {
  return (
    <>
      <h2>
        얻은 포인트로 고양이에게 선물을 해봐요!
        <br />
        고양이는 계속해서 성장해요
        <br />
        짱 쌘 고양이 최고!!!!
      </h2>
      <ImgSprite></ImgSprite>
    </>
  );
};

const ImgSprite = styled.div`
  width: 17.5rem;
  height: 11.6rem;
  background: url(${ICat3}) center no-repeat;
  background-size: contain;
  @media ${devices.mobileL} {
    transform: scale(0.7, 0.7);
    min-width: 280px;
  }
`;

export default StartingMainStory3;
