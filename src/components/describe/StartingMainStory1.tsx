import React from "react";

import styled from "styled-components";

import ICat1 from "../../assets/images/cats/cat1.png";
import { StoryImage } from "../../style/story";

const StartingMainStory1 = () => {
  return (
    <>
      <h2>
        우선, 영양제를 등록!
        <br />
        체크하면 포인트를 획득해요.
        <br />
        언제 먹었는지도 알려줄게요.
      </h2>
      <CatImage/>
    </>
  );
};

const CatImage = styled(StoryImage)`
  background: url(${ICat1}) center no-repeat;
  background-size: contain;
`;

export default StartingMainStory1;
