import React from "react";
import styled from "styled-components";

import FriendsListForm from "./buttonpopforms/FriendsListForm";

const FriendsListModal = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <Wrap ref={ref}>
      <FriendsListForm />
    </Wrap>
  );
});
const Wrap = styled.div`
  width: 527px;
  height: 547px;
  border-radius: 1.5rem;
  background-color: #fff;
  position: absolute;
  right: 124px;
  bottom: 129px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default FriendsListModal;
