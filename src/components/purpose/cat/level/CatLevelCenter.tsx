import React from "react";
import styled from "styled-components";

import stamp from "../../../../assets/images/icons/stamp.png";
import { CenterFlexDiv } from "../../../../style/styled";
import { cat } from "../../../../types/cats";

type GreetingsProps = {
  level: cat["level"];
};

const CatLevelCenter = ({ level }: GreetingsProps) => {
  // const level = 30;
  const maxLevel = 30;
  return (
    <FlexBox>
      {/* {level}/{maxLevel} */}
      {/* ❓레벨 30이 되면 리셋 -> 키웠던 고양이와 키우고 있는 고양이에 대한 데이터 기록을 api를 통해 남겨야하지 않을까..❓ */}
      {level &&
        Array(Math.floor(level / 2) + 1)
          .fill(0)
          .map((val, idx) => {
            return (
              <LevelHole key={"LevelHoleStamped" + idx}>
                <img src={stamp} alt="stamp" />
              </LevelHole>
            );
          })}
      {level &&
        Array(15 - Math.floor(level / 2) - 1)
          .fill(0)
          .map((val, idx) => {
            return <LevelHole key={"LevelHole" + idx} />;
          })}
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: inline-flex;
  width: 18rem;
  flex-wrap: wrap;
`;

const LevelHole = styled(CenterFlexDiv)`
  width: 2.5rem;
  height: 2.5rem;

  background-color: #fff;
  border: solid 1px #fabc4f;
  border-radius: 40px;
  margin: 8px 7px;
`;

export default CatLevelCenter;
