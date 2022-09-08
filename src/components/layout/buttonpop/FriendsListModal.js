import React from "react";
import styled from "styled-components";
import { devices } from "../../../device";
import FriendsListForm from "./buttonpopforms/FriendsListForm";

const FriendsListModal = React.forwardRef((props, ref) => {
  return (
    <Wrap ref={ref}>
      <FriendsListForm />
    </Wrap>
  );
});
const Wrap = styled.div`
  width: 28rem;
  height: 30rem;
  border-radius: 1.5rem;
  background-color: #fff;
  position: absolute;
  right: 124px;
  bottom: 129px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media ${devices.mobileL} {
    width: 14rem;
    height: 20rem;
    right: 3.5rem;
    bottom: 8rem;
  }
`;

export default FriendsListModal;
