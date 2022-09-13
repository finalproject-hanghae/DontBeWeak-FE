import React from "react";

import styled from "styled-components";

import ICat3 from "../../assets/images/cats/cat3.png";
import { StoryImage } from "../../style/story";

const StartingMainStory3 = () => {
  return (
    <>
      <h2>
        얻은 포인트로 고양이에게 선물!
        <br />
        고양이는 계속해서 성장해요
        <br />짱 쌘 고양이 최고!!!!
      </h2>
      <CatImage />
    </>
  );
};

const CatImage = styled(StoryImage)`
  background: url(${ICat3}) center no-repeat;
  background-size: contain;
`;

export default StartingMainStory3;
