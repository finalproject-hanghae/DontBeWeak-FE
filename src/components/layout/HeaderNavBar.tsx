import React from "react";
import styled from "styled-components";
import { devices } from "../../device";
import { awaySessionDataMW } from "../../redux/modules/users";
import { LinkC, RowFlexDiv } from "../../style/styled";
import menu from "../../assets/images/icons/menu.png";
import Logo from "../../assets/images/logo/logo_small.png";
import { loadDrugDataMW } from "../../redux/modules/drugs";
import { useFindWeek } from "../../hooks/useFindWeek";
import { loadWeekDataMW } from "../../redux/modules/weeks";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const HeaderNavBar = () => {
  const dispatch = useAppDispatch();
  const authorization = useAppSelector((state) => state.users.authorization);
  const week = useAppSelector((state) => state.weeks.week);
  const username = sessionStorage.getItem("username");
  const ClickToReloadRecordPageData = () => {
    let [startDate, endDate] = useFindWeek(week);
    const params = {
      startDate: startDate.replace(".", ""),
      endDate: endDate.replace(".", ""),
    };
    dispatch(loadDrugDataMW(username));
    dispatch(loadWeekDataMW(username, params));
  };
  return (
    <NavBar>
      <Wrap>
        {/* 로그인 전 후 분기 나눠야함 */}
        <LogoBox>
          <LinkC to="/">
            <img src={Logo} alt="logo" />
          </LinkC>
        </LogoBox>
        {/* 모바일 메뉴 */}
        <MenuBar>
          <img src={menu} alt="menu" />
        </MenuBar>
        <LinkButtons>
          {/* 웹 메뉴 */}
          <LinkC className="tabLink" to="/">
            About
          </LinkC>
          {authorization && (
            <>
              <LinkC
                className="tabLink"
                to={"/record/" + username}
                onClick={() => ClickToReloadRecordPageData()}
              >
                하루기록
              </LinkC>
              <LinkC className="tabLink" to={"/cat/" + username}>
                고양이 상태
              </LinkC>
            </>
          )}
          {/* <LinkC to="/">로그아웃</LinkC> */}
        </LinkButtons>
        <LinkButtons>
          {!authorization ? (
            <>
              <LinkC className="smalla" to="/login">
                로그인
              </LinkC>
              　|　
              <LinkC className="smalla" to="/signup">
                회원가입
              </LinkC>
            </>
          ) : (
            <LinkC to="/" onClick={() => dispatch(awaySessionDataMW())}>
              로그아웃
            </LinkC>
          )}
        </LinkButtons>
      </Wrap>
    </NavBar>
  );
};

const NavBar = styled.div`
  width: 100%;
  min-height: 8%;
  background-color: #fff;
  border-bottom: solid 0.05rem #a5a5a5;
  box-sizing: border-box;
  align-content: center;
  padding-left: 5%;
  display: flex;
  align-items: center;
  z-index: 999;
`;
const Wrap = styled(RowFlexDiv)`
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;
const LogoBox = styled.div`
  width: 22%;
  height: 80%;
  margin-right: 7%;
  img {
    width: 11rem;
  }
`;
const MenuBar = styled.div`
  width: 30px;
  height: 30px;
  @media ${devices.laptopL} {
    display: none;
  }
  @media ${devices.desktop} {
    display: none;
  }
  @media ${devices.mobileL} {
    display: block;
  }
  @media ${devices.tablet} {
    display: block;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const LinkButtons = styled(RowFlexDiv)`
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  .tabLink {
    font-size: 1rem;
    font-weight: bold;
    color: #383838;
    margin: 0rem 2em;
  }
  div {
    border-left: solid 1px #858383;
  }
  .smalla {
    font-size: 15px;
    color: #383838;
  }
  a {
    margin: 0 3px;
  }
  @media ${devices.tablet} {
    display: none;
  }
  @media ${devices.mobileL} {
    display: none;
  }
`;

export default HeaderNavBar;
