import React from "react";

import styled, { keyframes } from "styled-components";
import { devices } from "../../device";

import ICat1 from "../../assets/images/cats/cat1.png";

const StartingMainStory1 = () => {
  return (
    <>
      <h2>
        우선, 영양제를 등록하세요!
        <br />
        영양제를 먹으면 포인트를 획득 할 수 있어요
        <br />
        언제 먹었는지도 한 눈에 확인!
      </h2>
      <ImgSprite></ImgSprite>
    </>
  );
};

const ImgSprite = styled.div`
  width: 17.5rem;
  height: 11.6rem;
  background: url(${ICat1}) center no-repeat;
  background-size: contain;
  @media ${devices.mobileL} {
    transform: scale(0.7, 0.7);
    min-width: 280px;
  }
`;

export default StartingMainStory1;
