import React from "react";
import styled from "styled-components";
import { devices } from "../../device";
import { ColumnFlexDiv, RowFlexDiv } from "../../style/styled";
import PageController from "../layout/button/PageController";
import StartingMainStory0 from "./StartingMainStory0";
import StartingMainStory1 from "./StartingMainStory1";
import StartingMainStory2 from "./StartingMainStory2";
import StartingMainStory3 from "./StartingMainStory3";

const StartingMainStory = () => {
  const [storyPage, setStoryPage] = React.useState<number>(0);

  return (
    <Main>
      <PageController storyPage={storyPage} setStoryPage={setStoryPage} />
      {Math.abs(storyPage % 4) === 0 && <StartingMainStory0 />}
      {Math.abs(storyPage % 4) === 1 && <StartingMainStory1 />}
      {Math.abs(storyPage % 4) === 2 && <StartingMainStory2 />}
      {Math.abs(storyPage % 4) === 3 && <StartingMainStory3 />}
    </Main>
  );
};

const Main = styled(ColumnFlexDiv)`
  width: 100%;
  height: 24rem;
  align-items: center;
  text-align: center;
  h2 {
    font-size: 1.45rem;
    @media ${devices.mobileL} {
      font-size: 1.1rem;
    }
  }
  img {
    width: 4rem;
    height: 4rem;
    @media ${devices.mobileL} {
      transform:scale(0.75, 0.75)
    }
  }
`;

export default StartingMainStory;
