import React from "react";
import styled from "styled-components";
import FriendsListForm from "../modalforms/FriendsListForm";

const FriendsListModal = React.forwardRef((props, ref) => {
  return (
    <Wrap ref={ref}>
      <FriendsListForm />
    </Wrap>
  );
});
const Wrap = styled.div`
  width: 527px;
  height: 241px;
  border-radius: 1.5rem;
  background-color: #fff;
  position: absolute;
  right: 124px;
  bottom: 129px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default FriendsListModal;
