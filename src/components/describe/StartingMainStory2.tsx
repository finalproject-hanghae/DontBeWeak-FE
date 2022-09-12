import React from "react";

import styled from "styled-components";

import ICat2 from "../../assets/images/cats/cat2.png";
import { StoryImage } from "../../style/story";

const StartingMainStory2 = () => {
  return (
    <>
      <h2>
        그 다음, 친구를 추가하세요!
        <br />
        친구가 잘 챙기나 확인 해봐요!
        <br />
        당연 친구 고양이도 볼 수 있어요
      </h2>
      <CatImage/>
    </>
  );
};

const CatImage = styled(StoryImage)`
  background: url(${ICat2}) center no-repeat;
  background-size: contain;
`;

export default StartingMainStory2;
