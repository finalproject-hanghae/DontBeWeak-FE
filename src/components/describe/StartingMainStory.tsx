import React from "react";
import styled from "styled-components";
import { devices } from "../../device";
import { ColumnFlexDiv, RowFlexDiv } from "../../style/styled";
import PageController from "../layout/button/PageController";
import StartingMainStory0 from "./StartingMainStory0";

const StartingMainStory = () => {

    const [storyPage,setStoryPage] = React.useState<number>(0); 


  return (
      <Main>
        <PageController storyPage={storyPage} setStoryPage={setStoryPage}/>
        <StartingMainStory0 />
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
      width: 3rem;
      height: 3rem;
    }
  }
`;

export default StartingMainStory;
