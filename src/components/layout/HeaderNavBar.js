import { useSelector, useDispatch } from "react-redux";
import React from "react";
import styled from "styled-components";
import { devices } from "../../device";
import { awaySessionDataMW } from "../../redux/modules/users";
import { LinkC, RowFlexDiv } from "../../style/styled";

import Logo from "../../assets/images/logo/logo_small.png";
import { loadDrugDataMW } from "../../redux/modules/drugs";
import { useFindWeek } from "../../hooks/useFindWeek";
import { loadWeekDataMW } from "../../redux/modules/weeks";

const HeaderNavBar = () => {
  const dispatch = useDispatch();
  let sessionStorage = window.sessionStorage;
  const authorization = useSelector((state) => state.users.authorization);
  const week = useSelector((state) => state.weeks.week);
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
      {/* 로그인 전 후 분기 나눠야함 */}
      <LinkC to="/">
        <img src={Logo} alt="logo" />
      </LinkC>

      <LinkButtons>
        <LinkC className="tabLink" to="/">
          About
        </LinkC>
        {authorization && (
          <>
            <LinkC className="tabLink" to={"/record/" + username} onClick={()=>ClickToReloadRecordPageData()}>
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
            <div />
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
    </NavBar>
  );
};

const NavBar = styled(RowFlexDiv)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  border-bottom: solid 1px #a5a5a5;
  box-sizing: border-box;
  align-content: center;
  padding: 0px 5%;
`;

const LinkButtons = styled(RowFlexDiv)`
  display: flex;
  align-items: center;
  .tabLink {
    font-size: 1rem;
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
