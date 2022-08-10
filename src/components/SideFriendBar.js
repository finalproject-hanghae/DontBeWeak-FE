import React from "react";
import styled from "styled-components";

//Font-Awesome
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CenterFlexDiv } from "../styled";

function SideFriendBar() {
  return (
    <FloatingButton>
      <SideFriendButton>
        <FontAwesomeIcon icon={faUser} size={"2x"} color={"white"} />
      </SideFriendButton>
    </FloatingButton>
  );
}

const FloatingButton = styled.div`
  position: sticky;
  display: flex;
  bottom:0px;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 0px 5% 5% auto;
`;
const SideFriendButton = styled(CenterFlexDiv)`
  width: 80px;
  height: 80px;
  background-color: #f98532;
  border-radius: 100%;
`;

export default SideFriendBar;
