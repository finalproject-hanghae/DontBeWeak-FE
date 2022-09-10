import React, { useState } from "react";
import { LinkC } from "../../../style/styled";
import styled from "styled-components";
import { devices } from "../../../device";
import { CenterFlexDiv, RowFlexDiv } from "../../../style/styled";
import Logo from "../../../assets/images/logo/logo_small.png"
import AppNav from "./AppNav";
import WebNav from "./WebNav";

const HeaderNavBar = () => {
  return (
    <Container>
      <Navbar>
        {/* 로고 */}
        <LinkC to="/">
          <img src={Logo} alt="logo" />
        </LinkC>
        {/* 메뉴 */}
        <WebNav />
        <AppNav />
      </Navbar>
    </Container>
  );
};

const Container = styled(CenterFlexDiv)`
  width: 51.5%;
  height: 3.5rem;
  background-color: #fff;
  border-bottom: solid 0.05rem #a5a5a5;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 999;
  @media ${devices.mobileL} {
    width: 100%;
  }
  @media ${devices.laptop} {
    width: 100%;
  }
`;
const Navbar = styled(RowFlexDiv)`
  width: 85%;
  height: 2.8rem;
  line-height: 2.8rem;
  align-items: center;
`;

export default HeaderNavBar;
