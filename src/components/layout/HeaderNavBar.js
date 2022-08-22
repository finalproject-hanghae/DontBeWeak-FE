import React from "react";
import styled from "styled-components";
import { LinkC, RowFlexDiv } from "../../style/styled";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../assets/images/logo_small.png";
import { awaySessionDataMW } from "../../redux/modules/users";

const HeaderNavBar = () => {
  const dispatch = useDispatch();
  let sessionStorage = window.sessionStorage;
  const authorization = useSelector((state) => state.users.authorization);
  const username = sessionStorage.getItem("username");
  return (
    <NavBar>
      {!authorization ? (
        <>
        {/* 로그아웃 */}
          <LinkC to="/">
            <img src={Logo} alt="logo" />
          </LinkC>

          <LinkButtons>
            <LinkC className="tabLink" to="/about">
              About
            </LinkC>
            <LinkC className="tabLink" to="/login">
              하루기록
            </LinkC>
            <LinkC className="tabLink" to="/login">
              고양이 상태
            </LinkC>
          </LinkButtons>

          <LinkC className="smalla" to="/login">
            로그인
          </LinkC>
          <LinkC className="smalla" to="/signup">
            회원가입
          </LinkC>
        </>
      ) : (
        <>
        {/* 로그인 */}
          <LinkC to="/">
            <img src={Logo} alt="logo" />
          </LinkC>

          <LinkButtons>
            <LinkC className="tabLink" to="/about">
              About
            </LinkC>
            <LinkC className="tabLink" to={"/record/" + username}>
              하루기록
            </LinkC>
            <LinkC className="tabLink" to={"/cat/" + username}>
              고양이 상태
            </LinkC>
          </LinkButtons>
          
          <LinkC to="/" onClick={() => dispatch(awaySessionDataMW())}>
            로그아웃
          </LinkC>
        </>
      )}
    </NavBar>
  );
};

const NavBar = styled(RowFlexDiv)`
  justify-content: space-around;
  align-items: center;
  height: 82px;
  border-bottom: solid 1px #a5a5a5;
  h1 {
    /* line-height: 100%; */
    font-size: 30px;
    font-weight: bolder;
    color: #f98532;
  }
`;

const LinkButtons = styled(RowFlexDiv)`
  display: flex;
  align-items: center;
  .tabLink {
    font-size: 20px;
    font-weight: bold;
    color: #383838;
    margin: 0px 25px;
  }
  div {
    height: 20px;
    border-left: solid 1px #858383;
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
