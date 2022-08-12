import React from "react";
import styled from "styled-components";
import { LinkC, RowFlexDiv } from "../style/styled";

const HeaderNavBar = () => {
  return (
    <NavBar>
      <h1>약해지지마</h1>

      <LinkButtons>
        <LinkC className="tabLink" to="/record">
          하루기록
        </LinkC>
        <LinkC className="tabLink" to="/signup">
          고양이 상태
        </LinkC>
        {/* <LinkC to="/">로그아웃</LinkC> */}
      </LinkButtons>
      <LinkButtons>
        <LinkC className="smalla" to="/login">
          로그인
        </LinkC>
        <div></div>
        <LinkC className="smalla" to="/signup">
          회원가입
        </LinkC>
        {/* <LinkC to="/">로그아웃</LinkC> */}
      </LinkButtons>
    </NavBar>
  );
};

const NavBar = styled(RowFlexDiv)`
  justify-content: space-around;
  align-items: center;
  height: 82px;
  border-bottom:solid 1px #a5a5a5;
  h1 {
    /* line-height: 100%; */
    font-size: 30px;
    font-weight: bolder;
    color: #F98532;
  }
`;

const LinkButtons = styled(RowFlexDiv)`
  display: flex;
  align-items: center;
  .tabLink {
    font-size:20px;
    font-weight:bold;
    color:#383838;
    margin:0px 25px;
  }
  div {
    height:15px;
    border-left:solid 1px #858383;
  }
  .smalla {
    font-size: 15px;
    color: #383838;
  }
  a {
    margin: 0 3px;
  }
`;

export default HeaderNavBar;