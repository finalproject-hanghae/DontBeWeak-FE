import React from "react";
import styled from "styled-components";
import { LinkC, RowFlexDiv } from "../style/styled";

const HeaderNavBar = () => {
  return (
    <NavBar>
      <div>약해지지마</div>
      <LinkButtons>
        <LinkButtons>
          <LinkC to="/record">하루기록</LinkC>
          <LinkC to="/signup">고양이 상태</LinkC>
          {/* <LinkC to="/">로그아웃</LinkC> */}
        </LinkButtons>
        <LinkButtons>
          <LinkC className="smalla" to="/login">로그인</LinkC>
          <LinkC className="smalla" to="/signup">회원가입</LinkC>
          {/* <LinkC to="/">로그아웃</LinkC> */}
        </LinkButtons>
      </LinkButtons>
    </NavBar>
  );
};

const NavBar = styled(RowFlexDiv)`
  justify-content: space-between;
  align-items:center;
  height: 82px;
  div {
    margin: 0 3px;
  }
`;

const LinkButtons = styled(RowFlexDiv)`
display:flex;
align-items:baseline;

  .smalla{
    font-size:.7rem;
  }
  a {
    margin: 0 3px;
  }
`;

export default HeaderNavBar;