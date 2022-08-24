import React from "react";
import styled from "styled-components";

import { CenterFlexDiv } from "../../../../style/styled";

const CatLevelCenter = ({level}) => {
  // const level = 30;
  const maxLevel = 30;
  return (
    <FlexBox>
      {/* {level}/{maxLevel} */}
      {level &&
        Array(Math.floor(level / 2))
          .fill(0)
          .map((val, idx) => {
            return <LevelHole>🍣</LevelHole>;
          })}
      {level &&
        Array(15 - Math.floor(level / 2))
          .fill(0)
          .map((val, idx) => {
            return <LevelHole />;
          })}
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: inline-flex;
  width: 260px;
  flex-wrap: wrap;
`;

const LevelHole = styled(CenterFlexDiv)`
  width: 36px;
  height: 36px;
  background-color: #FFF3AA;
  border: solid 1px #ffc329;
  border-radius: 40px;
  margin: 6px 7px 6px 7px;
`;

export default CatLevelCenter;
