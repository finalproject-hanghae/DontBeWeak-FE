import React from "react";
import styled from "styled-components";
import { LinkC, RowFlexDiv } from "../styled";

const HeaderNavBar = () => {
  return (
    <NavBar>
      <div>로고</div>
      <LinkButtons>
        <LinkC to="login">로그인</LinkC>
        <LinkC to="signup">회원가입</LinkC>
        {/* <LinkC to="/">로그아웃</LinkC> */}
      </LinkButtons>
    </NavBar>
  );
};

const NavBar = styled(RowFlexDiv)`
  justify-content: space-between;
  div {
    margin: 0 10px;
  }
`;

const LinkButtons = styled(RowFlexDiv)`
  a {
    margin: 0 10px;
  }
`;

export default HeaderNavBar;
