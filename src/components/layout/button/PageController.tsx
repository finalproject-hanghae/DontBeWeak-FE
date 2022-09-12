import React from "react";
import styled from "styled-components";
import IDrugAdd from "../../../assets/images/icons/drug_add.png";
import IFriend from "../../../assets/images/icons/friend_add.png";
import IShop from "../../../assets/images/icons/shop.png";
import ICat from "../../../assets/images/cats/drug_cat.png";

import { LeftDiv, RightDiv } from "../../../style/story";
import { RowFlexDiv } from "../../../style/styled";

type GreetingsProps = {
  storyPage: number;
  setStoryPage: React.Dispatch<React.SetStateAction<number>>;
};

const PageController = ({ storyPage, setStoryPage }: GreetingsProps) => {
  const leftDivRef = React.useRef<HTMLDivElement>(null);
  const rightDivRef = React.useRef<HTMLDivElement>(null);
  console.log(storyPage);

  React.useEffect(() => {
    leftDivRef.current?.addEventListener("click", () => {
      setStoryPage((prev) => prev - 1);
    });
    rightDivRef.current?.addEventListener("click", () => {
      setStoryPage((prev) => prev + 1);
    });
    return () => {
      leftDivRef.current?.removeEventListener("click", () => {
        setStoryPage((prev) => prev - 1);
      });
      rightDivRef.current?.removeEventListener("click", () => {
        setStoryPage((prev) => prev + 1);
      });
    };
  }, []);

  console.log(storyPage % 4);

  return (
    <Controller>
      <LeftDiv ref={leftDivRef} />
      {Math.abs(storyPage % 4) === 0 && (
        <img src={ICat} className="shadow-bottom" alt="Cat_icon" />
      )}
      {Math.abs(storyPage % 4) === 1 && <img src={IDrugAdd} alt="Drug_icon" />}
      {Math.abs(storyPage % 4) === 2 && <img src={IFriend} alt="Friend_icon" />}
      {Math.abs(storyPage % 4) === 3 && <img src={IShop} alt="Shop_icon" />}
      <RightDiv ref={rightDivRef} />
    </Controller>
  );
};

const Controller = styled(RowFlexDiv)`
  justify-content: center;
  align-items: center;
  .shadow-bottom {
    width: 58px;
    height: 58px;
    margin: 0px 3px 6px;
    border-radius: 100%;
    box-shadow: 0px 3px 3px #aaaaaa;
  }
`;

export default PageController;
