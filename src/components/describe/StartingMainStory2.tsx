import React from "react";

import styled, { keyframes } from "styled-components";
import { devices } from "../../device";

import ICat2 from "../../assets/images/cats/cat2.png";

const StartingMainStory2 = () => {
  return (
    <>
      <h2>
        그 다음, 친구를 추가하세요!
        <br />
        친구가 잘 먹고있나 확인 할 수 있어요!
        <br />
        당연히 친구의 고양이도 볼 수 있죠
      </h2>
      <ImgSprite></ImgSprite>
    </>
  );
};

const ImgSprite = styled.div`
  width: 17.5rem;
  height: 11.6rem;
  background: url(${ICat2}) center no-repeat;
  background-size: contain;
  @media ${devices.mobileL} {
    transform: scale(0.7, 0.7);
    min-width: 280px;
  }
`;
export default StartingMainStory2;
