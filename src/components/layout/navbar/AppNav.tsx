import React, { useState } from "react";
import styled from "styled-components";
import menu from "../../../assets/images/icons/hambar.png";
import { RowFlexDiv } from "../../../style/styled";

const AppNav = () => {
  const dropMenu = () => {};
  return (
    <AppNavs>

    {/* 메뉴 아이콘 */}
      <MenuIcon>
        <img src={menu} alt="menu" onClick={dropMenu} />
      </MenuIcon>

    {/* 드롭다운 될 메뉴들 */}
      <DropMenu>
        <Menu className="menu1">
          <p></p>
        </Menu>
      </DropMenu>

    </AppNavs>
  );
};

const AppNavs = styled.div`
  width: 5rem;
  height: 5rem;
  display: none;
`;
const MenuIcon = styled.div`
  img {
    width: 2rem;
  }
`;
const DropMenu = styled(RowFlexDiv)``;
const Menu = styled.div``;
export default AppNav;

// const AppNavs = styled(RowFlexDiv)`
//   margin: 0 auto;
//   align-items: center;
//   justify-content: center;
//   .tabLinkC {
//     font-size: 1rem;
//     font-weight: bold;
//     color: #383838;
//     margin: 0rem 2em;
//   }
//   div {
//     border-left: solid 1px #858383;
//   }
//   .smalla {
//     font-size: 15px;
//     color: #383838;
//   }
//   a {
//     margin: 0 3px;
//   }
//   @media ${devices.tablet} {
//     display: none;
//   }
//   @media ${devices.mobileL} {
//     display: none;
//   }
// `;
